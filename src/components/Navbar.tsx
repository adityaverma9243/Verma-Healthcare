import { useEffect, useState } from 'react';
import { Cross, Phone } from 'lucide-react';
import { STORE } from '../lib/store';
import { useSectionNav } from '../lib/useSectionNav';

const links = [
  { href: 'home', id: 'home', label: 'Home' },
  { href: 'inquiry', id: 'inquiry', label: 'Order Enquiry' },
  { href: 'owner', id: 'owner', label: 'Owner' },
  { href: 'medicines', id: 'medicines', label: 'Medicines' },
  { href: 'contact', id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const goTo = useSectionNav();

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 160;
      let current = 'home';
      let bestTop = -1;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= pos && el.offsetTop > bestTop) {
          bestTop = el.offsetTop;
          current = l.id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        current = 'contact';
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pill = (l: (typeof links)[number], compact = false) => {
    const isActive = active === l.id;
    return (
      <button
        key={l.id}
        onClick={() => goTo(l.id)}
        aria-current={isActive ? 'page' : undefined}
        className={`inline-flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 ${
          compact ? 'px-4 py-2' : 'px-5 py-2.5'
        } ${
          isActive
            ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/25 ring-1 ring-gold-400/60'
            : 'border border-brand-900/15 bg-white text-brand-900/75 hover:border-brand-700/40 hover:bg-brand-50 hover:text-brand-900'
        }`}
      >
        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />}
        {l.label}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <button onClick={() => goTo('home')} className="flex min-w-0 cursor-pointer items-center gap-3 text-left">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-gold-300 shadow-lg shadow-brand-900/25 ring-1 ring-gold-400/50">
            <Cross className="h-5 w-5" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-semibold tracking-tight text-brand-950">
              {STORE.name}
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gold-600">
              {STORE.tagline} · {STORE.qualificationShort}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {links.map((l) => pill(l))}
        </nav>

        <a
          href={`tel:${STORE.phoneRaw}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-4 py-2.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/25 transition hover:bg-gold-300 sm:px-5"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden md:inline">{STORE.phoneDisplay}</span>
          <span className="md:hidden">Call</span>
        </a>
      </div>

      <div className="border-t border-brand-900/5 lg:hidden">
        <nav
          className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Main navigation"
        >
          {links.map((l) => pill(l, true))}
        </nav>
      </div>
    </header>
  );
}
