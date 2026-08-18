import { motion } from 'framer-motion';
import { Award, Clock, Mail, MapPin, Phone, ShieldCheck, Stethoscope } from 'lucide-react';
import LegalLayout, { LegalSection } from '../components/LegalLayout';
import { STORE } from '../lib/store';
import { usePageTitle } from '../lib/usePageTitle';

const values = [
  {
    icon: Stethoscope,
    title: 'Qualified guidance',
    text: `Every enquiry is answered with the training ${STORE.owner} received at ${STORE.qualificationShort} — honest advice, not just a sale.`,
  },
  {
    icon: ShieldCheck,
    title: 'Carefully sourced stock',
    text: 'Products are stocked from licensed distributors and checked for quality before they reach the shelf.',
  },
  {
    icon: Award,
    title: 'Respect for prescriptions',
    text: 'Prescription medicines are dispensed only against a valid doctor’s prescription — no shortcuts.',
  },
];

export default function About() {
  usePageTitle('About Us | Verma Healthcare — Trusted Pharmacy in Basholi');
  return (
    <LegalLayout eyebrow="About Us" title={`The story behind ${STORE.name}`} updated="18 August 2026">
      <LegalSection title="Who we are">
        <p>
          {STORE.name} is a personal medical store at {STORE.address}, owned and
          run by {STORE.owner}, who holds his qualification from{' '}
          {STORE.qualification}. We keep a wide range of medicines and
          healthcare products, subject to availability and valid prescription
          requirements.
        </p>
        <p>
          For us, a pharmacy is more than a shop. It is the first place a family
          turns to at midnight with a fever, and the steady partner in long-term
          care. That is why every customer gets personal attention, honest
          guidance, and a straight answer.
        </p>
      </LegalSection>

      <LegalSection title="Why this website exists">
        <p>
          We built this website so our customers can reach us without friction:
          browse the kind of products we keep, check our timings and location,
          and send a quick order enquiry — all without downloading an app or
          creating an account. The fastest route is still the phone: call{' '}
          <a href={`tel:${STORE.phoneRaw}`} className="font-bold text-brand-800 underline underline-offset-4">
            {STORE.phoneDisplay}
          </a>{' '}
          and we will confirm availability on the spot.
        </p>
      </LegalSection>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-brand-900/10 bg-white p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-gold-300">
              <v.icon className="h-5 w-5" />
            </span>
            <p className="mt-3 font-display text-[15px] font-semibold text-brand-950">{v.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.text}</p>
          </motion.div>
        ))}
      </div>

      <LegalSection title="Visit or reach us">
        <div className="space-y-3">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            {STORE.address}
          </p>
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            {STORE.hours}
          </p>
          <p className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            <a href={`tel:${STORE.phoneRaw}`} className="font-bold text-brand-800 underline underline-offset-4">
              {STORE.phoneDisplay}
            </a>
          </p>
          <p className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            <a href={`mailto:${STORE.email}`} className="font-bold text-brand-800 underline underline-offset-4">
              {STORE.email}
            </a>
          </p>
        </div>
      </LegalSection>

      <LegalSection title="Content and copyright">
        <p>
          All text on this website is original, written for our store. The hero
          artwork was custom-created for us, and every icon comes from the free,
          open-source Lucide icon set. We do not use any copyrighted logos,
          images, or third-party content.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
