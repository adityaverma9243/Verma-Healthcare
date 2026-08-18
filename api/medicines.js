import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      let query = supabase
        .from('medicines')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true });

      const { search, category } = req.query || {};
      if (category && category !== 'All') {
        query = query.ilike('category', String(category));
      }
      if (search) {
        const s = String(search);
        query = query.or(`name.ilike.%${s}%,composition.ilike.%${s}%,uses.ilike.%${s}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return res.status(200).json(data);
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
