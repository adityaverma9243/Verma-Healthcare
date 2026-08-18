import { Cross, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STORE } from '../lib/store';
import { useSectionNav } from '../lib/useSectionNav';

const exploreLinks = [
  { id: 'home', label: 'Home' },
  { id: 'inquiry', label: 'Order Enquiry' },
  { id: 'owner', label: 'Owner' },
  { id: 'medicines', label: 'Medicines' },
  { id: 'contact', label: 'Contact' },
];

const infoLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  const goTo = useSectionNav();

  return (
    <footer className="bg-brand-950 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-gold-300 ring-1 ring-gold-400/40">
                <Cross className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">{STORE.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              A wide range of medicines and healthcare products, with qualified
              guidance from {STORE.owner} ({STORE.qualificationShort}).
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">Explore</p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => goTo(l.id)}
                    className="cursor-pointer text-sm font-semibold text-white/70 transition hover:text-gold-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">Information</p>
            <ul className="mt-5 space-y-3">
              {infoLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm font-semibold text-white/70 transition hover:text-gold-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">Reach us</p>
            <a
              href={`tel:${STORE.phoneRaw}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-brand-950 transition hover:bg-gold-300"
            >
              <Phone className="h-4 w-4" />
              {STORE.phoneDisplay}
            </a>
            <p className="mt-4">
              <a
                href={`mailto:${STORE.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-gold-200"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                {STORE.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-white/60">{STORE.hours}</p>
            <p className="mt-2 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              {STORE.address}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/45">
            Disclaimer: {STORE.name} offers a wide range of medicines and
            healthcare products, subject to availability and valid prescription
            requirements. Information on this website is for reference only —
            please consult a qualified doctor before starting any medication.
            Prescription (Rx) medicines are sold only against a valid doctor's
            prescription.
          </p>
          <p className="mt-4 text-xs font-semibold text-white/55">
            © {new Date().getFullYear()} {STORE.name} · Owned by {STORE.owner} · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
