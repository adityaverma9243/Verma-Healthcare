import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Clock,
  MessageCircle,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { STORE } from '../lib/store';

const trust = [
  { icon: ShieldCheck, label: 'Genuine, licensed stock' },
  { icon: Clock, label: 'Open all 7 days' },
  { icon: Stethoscope, label: 'Qualified pharmacist guidance' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold-100/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/50 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-800 shadow-sm">
            <BadgeCheck className="h-4 w-4 text-gold-500" />
            Owner qualified from {STORE.qualificationShort}
          </span>

          <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-brand-950 sm:text-6xl">
            The right medicine, <em className="italic text-brand-700">one call away.</em>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {STORE.name} offers a wide range of medicines and healthcare
            products for everyday and long-term care needs — with qualified
            personal guidance, subject to availability and valid prescription
            requirements.
          </p>

          <div className="mt-8 rounded-3xl border border-gold-400/40 bg-white p-6 shadow-2xl shadow-brand-900/10 sm:p-7">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-800">
                Call now — we'll confirm availability on the spot
              </p>
            </div>

            <a
              href={`tel:${STORE.phoneRaw}`}
              className="mt-3 block font-display text-4xl font-semibold tracking-tight text-brand-950 transition hover:text-brand-700 sm:text-[2.9rem]"
            >
              {STORE.phoneDisplay}
            </a>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${STORE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/30 transition hover:-translate-y-0.5 hover:bg-gold-300"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={STORE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-900/20 bg-white px-7 py-3.5 text-sm font-bold text-brand-900 transition hover:-translate-y-0.5 hover:border-brand-700 hover:text-brand-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            {trust.map((t) => (
              <span key={t.label} className="flex items-center gap-2.5 text-sm font-bold text-brand-900/80">
                <t.icon className="h-5 w-5 text-gold-500" />
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-gold-400/40" />
          <div className="relative overflow-hidden rounded-[1.7rem] shadow-2xl shadow-brand-950/25">
            <img
              src="images/store-hero.jpg"
              alt="Inside Verma Healthcare"
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
          </div>

          <div className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur sm:right-6">
            <p className="flex items-center gap-2 text-xs font-bold text-brand-900">
              <Pill className="h-4 w-4 text-gold-500" />
              A wide range of medicines & healthcare products
            </p>
          </div>

          <div className="absolute -bottom-7 left-4 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-brand-900/10 sm:left-8">
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 font-display text-lg font-semibold text-gold-300 ring-2 ring-gold-400/60">
                AK
              </span>
              <div>
                <p className="font-display text-base font-semibold text-brand-950">{STORE.owner}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Owner · {STORE.qualificationShort}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
