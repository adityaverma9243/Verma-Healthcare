import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { name, phone, medicine, message } = req.body || {};
      if (!name || !String(name).trim()) {
        return res.status(400).json({ error: 'Name is required' });
      }
      if (!phone || !String(phone).trim()) {
        return res.status(400).json({ error: 'Phone number is required' });
      }
      const { data, error } = await supabase
        .from('inquiries')
        .insert({
          name: String(name).trim(),
          phone: String(phone).trim(),
          medicine: medicine ? String(medicine).trim() : null,
          message: message ? String(message).trim() : null,
          status: 'new',
        })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(200);
      if (error) throw error;
      return res.status(200).json(data);
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
