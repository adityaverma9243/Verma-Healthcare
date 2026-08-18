import { motion } from 'framer-motion';
import {
  Award,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { STORE } from '../lib/store';

const credentials = [
  {
    icon: GraduationCap,
    title: `Qualified from ${STORE.qualificationShort}`,
    text: `Professional training at ${STORE.qualification} — one of the region’s most respected medical institutions.`,
  },
  {
    icon: ShieldCheck,
    title: 'Genuine medicines only',
    text: 'Every product is sourced from licensed distributors and checked for quality before it reaches the shelf.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest, personal guidance',
    text: 'Clear advice on dosage, precautions and prescriptions — given freely with every purchase, every time.',
  },
  {
    icon: Sparkles,
    title: 'A wide range of products',
    text: 'Everyday medicines for fever, cough and cold, along with support for long-term care needs — subject to availability and prescription requirements.',
  },
];

export default function OwnerProfile() {
  return (
    <section id="owner" className="relative scroll-mt-20 overflow-hidden bg-brand-950 py-24 text-white">
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative flex justify-center">
              <div className="absolute top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-gold-400/25" />
              <div className="absolute top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-gold-400/10" />
              <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full bg-gradient-to-b from-brand-800 to-brand-900 shadow-2xl shadow-black/40 ring-2 ring-gold-400/70 sm:h-72 sm:w-72">
                <span className="font-display text-7xl font-semibold text-gold-300">AK</span>
                <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                  Owner & Pharmacist
                </span>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-gold-400/25 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/40">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
                    Qualification
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug">
                    {STORE.qualification}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                <a href={`tel:${STORE.phoneRaw}`} className="text-sm font-bold text-white underline-offset-4 hover:underline">
                  Direct line: {STORE.phoneDisplay}
                </a>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <p className="text-sm font-semibold text-white/70">{STORE.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-300">
              The Owner
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {STORE.owner}
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/60">
              Owner & Pharmacist · Qualified from {STORE.qualificationShort}
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
              With training from {STORE.qualification}, {STORE.owner} built{' '}
              {STORE.name} on a single promise — every family should find the
              right medicine, with the right advice, close to home. Whether it's
              a midnight fever or a monthly refill for a long-term condition,
              you will always be guided personally.
            </p>

            <blockquote className="mt-8 border-l-2 border-gold-400 pl-6">
              <p className="font-display text-xl italic leading-relaxed text-gold-100 sm:text-2xl">
                “Every customer deserves honest advice, not just a sale.”
              </p>
            </blockquote>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-gold-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3.5 font-display text-[15px] font-semibold leading-snug">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
