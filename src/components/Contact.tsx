import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { STORE } from '../lib/store';
import { useSectionNav } from '../lib/useSectionNav';

const cards = [
  {
    icon: Phone,
    title: 'Call the store',
    primary: STORE.phoneDisplay,
    secondary: 'Speak directly with Ashok Kumar — the quickest way to check availability.',
    href: `tel:${STORE.phoneRaw}`,
    cta: 'Call now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    primary: 'Message us anytime',
    secondary: 'Send the medicine name or a photo of your prescription — we’ll reply.',
    href: STORE.whatsapp,
    cta: 'Chat with us',
    external: true,
  },
  {
    icon: Clock,
    title: 'Store hours',
    primary: 'Open all 7 days',
    secondary: `${STORE.hoursShort} · Call ahead for rare or special-order medicines.`,
    href: `tel:${STORE.phoneRaw}`,
    cta: 'Plan your visit',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    primary: STORE.address,
    secondary: 'Call for directions — we’ll guide you right to the door.',
    href: `tel:${STORE.phoneRaw}`,
    cta: 'Get directions',
  },
];

export default function Contact() {
  const goTo = useSectionNav();

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-600">
            Contact Details
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">
            We're here, every single day
          </h2>
          <p className="mt-5 leading-relaxed text-ink/65">
            A question about a medicine, a prescription, or availability? Reach
            us however is easiest — a call, a message, or a visit to our store at{' '}
            <span className="font-bold text-brand-900">{STORE.address}</span>.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-brand-900/10 bg-cream p-7 transition hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-gold-300 shadow-lg shadow-brand-900/20 ring-1 ring-gold-400/40">
                <c.icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">{c.title}</p>
              <p className="mt-1.5 font-display text-xl font-semibold leading-snug text-brand-950">{c.primary}</p>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/60">{c.secondary}</p>
              <span className="mt-6 text-sm font-bold text-brand-800 transition group-hover:text-gold-600">
                {c.cta} →
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-semibold text-ink/50">
          Email us at{' '}
          <a
            href={`mailto:${STORE.email}`}
            className="inline-flex items-center gap-1.5 font-bold text-brand-800 underline underline-offset-4 hover:text-gold-600"
          >
            <Mail className="h-3.5 w-3.5" />
            {STORE.email}
          </a>{' '}
          · Prefer to order ahead? Use the{' '}
          <button
            onClick={() => goTo('inquiry')}
            className="cursor-pointer font-bold text-brand-800 underline underline-offset-4 hover:text-gold-600"
          >
            Order Enquiry form
          </button>{' '}
          and we'll call you back.
        </p>
      </div>
    </section>
  );
}
