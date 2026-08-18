import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Baby,
  Bandage,
  Citrus,
  Droplets,
  Flower2,
  HeartPulse,
  Pill,
  RefreshCw,
  Ribbon,
  Search,
  Snowflake,
  Soup,
  Sparkles,
  Syringe,
  Thermometer,
  type LucideIcon,
} from 'lucide-react';
import type { Medicine } from '../lib/types';

const categoryIcons: Record<string, LucideIcon> = {
  'Fever & Pain': Thermometer,
  'Cold & Cough': Snowflake,
  'Antibiotics': Syringe,
  'Diabetes': Droplets,
  'Heart & BP': HeartPulse,
  'Stomach & Digestion': Soup,
  'Skin Care': Sparkles,
  'Vitamins & Supplements': Citrus,
  'Allergy': Flower2,
  "Women's Health": Ribbon,
  'Baby Care': Baby,
  'First Aid': Bandage,
};

function formatPrice(price: number | string) {
  const n = Number(price);
  return Number.isInteger(n) ? `₹${n}` : `₹${n.toFixed(2)}`;
}

interface Props {
  onEnquire: (medicineName: string) => void;
}

export default function Catalog({ onEnquire }: Props) {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const fetchMedicines = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/medicines');
      if (!res.ok) throw new Error('Could not load medicines');
      const data = await res.json();
      setMedicines(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Fetch error:', e);
      setError('We could not load the medicine list. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMedicines();
  }, [fetchMedicines]);

  const categories = useMemo(() => {
    const set = new Set(medicines.map((m) => m.category));
    return ['All', ...Array.from(set)];
  }, [medicines]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return medicines.filter((m) => {
      const matchCat = category === 'All' || m.category === category;
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.composition.toLowerCase().includes(q) ||
        m.uses.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [medicines, search, category]);

  return (
    <section id="medicines" className="scroll-mt-20 bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
            Our Medicine Catalogue
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Find the medicine you need
          </h2>
          <p className="mt-4 text-ink/70">
            Search by medicine name, salt (composition) or condition — or browse
            by category. Can't find something? Call us — we may be able to help.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search e.g. Paracetamol, diabetes, cough syrup…"
              className="w-full rounded-full border border-brand-100 bg-white py-3.5 pl-12 pr-5 text-sm font-medium outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const Icon = c === 'All' ? Pill : categoryIcons[c] ?? Pill;
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                      : 'border border-brand-100 bg-white text-ink/70 hover:border-brand-300 hover:text-brand-700'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {loading && (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-brand-100 bg-white p-5">
                <div className="h-5 w-24 rounded-full bg-brand-100" />
                <div className="mt-4 h-5 w-3/4 rounded bg-brand-100" />
                <div className="mt-2 h-3 w-1/2 rounded bg-brand-100" />
                <div className="mt-4 h-3 w-full rounded bg-brand-100" />
                <div className="mt-2 h-3 w-2/3 rounded bg-brand-100" />
                <div className="mt-6 flex justify-between">
                  <div className="h-7 w-16 rounded bg-brand-100" />
                  <div className="h-8 w-20 rounded-full bg-brand-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <AlertTriangle className="mx-auto h-8 w-8 text-red-500" />
            <p className="mt-3 text-sm font-semibold text-red-700">{error}</p>
            <button
              onClick={fetchMedicines}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-700"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Try again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <p className="mt-10 text-center text-sm font-semibold text-ink/50">
              Showing {filtered.length} of {medicines.length} medicines
            </p>

            {filtered.length === 0 ? (
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-brand-100 bg-white p-8 text-center">
                <Search className="mx-auto h-8 w-8 text-brand-400" />
                <p className="mt-3 font-display font-bold">No medicines found</p>
                <p className="mt-2 text-sm text-ink/60">
                  Try a different search term or category — or call us directly and
                  we'll check our full stock for you.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((m) => {
                  const Icon = categoryIcons[m.category] ?? Pill;
                  return (
                    <div
                      key={m.id}
                      className={`group flex flex-col rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10 ${
                        !m.in_stock ? 'opacity-80' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700">
                          <Icon className="h-3.5 w-3.5" />
                          {m.category}
                        </span>
                        <span
                          className={`flex items-center gap-1.5 text-[11px] font-bold ${
                            m.in_stock ? 'text-emerald-600' : 'text-red-500'
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              m.in_stock ? 'bg-emerald-500' : 'bg-red-400'
                            }`}
                          />
                          {m.in_stock ? 'In stock' : 'Out of stock'}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-base font-bold leading-snug">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/45">
                        {m.composition}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">
                        {m.uses}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                        <div>
                          <p className="font-display text-lg font-bold text-brand-700">
                            {formatPrice(m.price)}
                          </p>
                          <span
                            className={`mt-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                              m.rx
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {m.rx ? 'Rx · prescription' : 'OTC'}
                          </span>
                        </div>
                        <button
                          onClick={() => onEnquire(m.name)}
                          className="rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-700 group-hover:shadow-md"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        <p className="mt-10 text-center text-xs font-medium text-ink/45">
          Prices shown are indicative and may vary by batch. Prescription (Rx)
          medicines are sold only against a valid doctor's prescription.
        </p>
      </div>
    </section>
  );
}
