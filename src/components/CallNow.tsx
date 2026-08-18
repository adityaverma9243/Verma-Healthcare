import { motion } from 'framer-motion';
import { Award, Clock, MapPin, MessageCircle, Phone, Pill } from 'lucide-react';
import { STORE } from '../lib/store';

const facts = [
  { icon: Clock, text: STORE.hours },
  { icon: MapPin, text: STORE.address },
  { icon: Award, text: `Owner qualified from ${STORE.qualificationShort}` },
  { icon: Pill, text: 'A wide range of medicines & healthcare products' },
];

export default function CallNow() {
  return (
    <section id="call-now" className="scroll-mt-20 bg-cream pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-brand-950 px-6 py-12 text-white sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
                </span>
                Call Now — Fastest Way to Reach Us
              </span>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Need a medicine?{' '}
                <em className="italic text-gold-300">Don't wait — call us.</em>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                We keep a wide range of medicines and healthcare products, subject
                to availability and valid prescription requirements. One call is
                enough — we'll confirm stock and price, and keep your order ready
                for pickup.
              </p>

              <a
                href={`tel:${STORE.phoneRaw}`}
                className="mt-8 inline-block font-display text-4xl font-semibold tracking-wide text-gold-300 transition hover:text-gold-200 sm:text-5xl"
              >
                {STORE.phoneDisplay}
              </a>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${STORE.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-sm font-bold text-brand-950 shadow-xl shadow-gold-500/25 transition hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={STORE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-9 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map((f) => (
                <div
                  key={f.text}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-gold-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3.5 text-sm font-semibold leading-relaxed text-white/80">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
