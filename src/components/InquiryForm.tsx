import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquareText, PhoneCall, Send, Store } from 'lucide-react';
import { STORE } from '../lib/store';
import type { InquiryPayload } from '../lib/types';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Send your request',
    text: 'Tell us the medicine name and your phone number — that’s all we need.',
  },
  {
    icon: PhoneCall,
    title: 'We call you back',
    text: 'We confirm availability and price, usually within a short time.',
  },
  {
    icon: Store,
    title: 'Collect at the store',
    text: 'Pick up your medicine, or call us to arrange the handover conveniently.',
  },
];

interface Props {
  prefill: { name: string; ts: number } | null;
}

export default function InquiryForm({ prefill }: Props) {
  const [form, setForm] = useState<InquiryPayload>({ name: '', phone: '', medicine: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (prefill) {
      setForm((f) => ({ ...f, medicine: prefill.name }));
      setSuccess(false);
    }
  }, [prefill]);

  const validate = () => {
    const next: { name?: string; phone?: string } = {};
    if (!form.name || form.name.trim().length < 2) {
      next.name = 'Please enter your name';
    }
    const digits = (form.phone || '').replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(digits)) {
      next.phone = 'Enter a valid 10-digit mobile number';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.replace(/\D/g, ''),
          medicine: form.medicine?.trim() || '',
          message: form.message?.trim() || '',
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Could not submit your request');
      }
      setSuccess(true);
      setForm({ name: '', phone: '', medicine: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err);
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  const field = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium outline-none transition focus:ring-4 ${
      hasError
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-brand-900/15 focus:border-brand-500 focus:ring-brand-100'
    }`;

  return (
    <section id="inquiry" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-600">
            Order Enquiry
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">
            Reserve a medicine in under a minute
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-ink/65">
            Not sure if we have it in stock? Send a quick request and we'll
            confirm it for you — no app downloads, no sign-ups, just a phone
            call away.
          </p>

          <div className="mt-10 space-y-7">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-gold-300 ring-1 ring-gold-400/40">
                    <s.icon className="h-5 w-5" />
                  </span>
                  {i < steps.length - 1 && <span className="mt-2 h-full w-px bg-brand-900/15" />}
                </div>
                <div className="pb-2">
                  <p className="font-display text-base font-semibold text-brand-950">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-bold text-brand-900">
            Prefer talking? Call us directly at{' '}
            <a href={`tel:${STORE.phoneRaw}`} className="text-gold-600 underline underline-offset-4 hover:text-brand-700">
              {STORE.phoneDisplay}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-brand-900/10 bg-cream p-6 shadow-2xl shadow-brand-900/10 sm:p-8"
        >
          {success ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-brand-950">Request received!</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
                Thank you. We'll call you back shortly to confirm availability and
                price. Need it urgently? Call us now at {STORE.phoneDisplay}.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 rounded-full border-2 border-brand-800 px-6 py-2.5 text-sm font-bold text-brand-800 transition hover:bg-brand-50"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-display text-xl font-semibold text-brand-950">Medicine enquiry</h3>
              <p className="mt-1 text-sm text-ink/55">We'll respond on your phone number.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    Your name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className={field(errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className={field(errors.phone)}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    Medicine name
                  </label>
                  <input
                    type="text"
                    value={form.medicine}
                    onChange={(e) => setForm({ ...form, medicine: e.target.value })}
                    placeholder="e.g. Paracetamol 500mg"
                    className={field()}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    Message (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="Quantity, brand preference, or anything else…"
                    className={`${field()} resize-none`}
                  />
                </div>
              </div>

              {submitError && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-brand-900/25 ring-1 ring-gold-400/40 transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4 text-gold-300" />
                {submitting ? 'Sending…' : 'Send enquiry'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
