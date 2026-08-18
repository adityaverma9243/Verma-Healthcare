import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({ eyebrow, title, updated, children }: Props) {
  return (
    <main className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-800 transition hover:text-gold-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-600">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm font-semibold text-ink/50">Last updated: {updated}</p>

        <div className="mt-10 border-t border-brand-900/10 pt-2">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold text-brand-950">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink/70">{children}</div>
    </section>
  );
}
