import { useCallback, useState } from 'react';
import Hero from '../components/Hero';
import CallNow from '../components/CallNow';
import Catalog from '../components/Catalog';
import OwnerProfile from '../components/OwnerProfile';
import InquiryForm from '../components/InquiryForm';
import Contact from '../components/Contact';
import { usePageTitle } from '../lib/usePageTitle';

export default function Home() {
  usePageTitle('Verma Healthcare | Trusted Pharmacy in Basholi — Ashok Kumar, JIAR');
  const [prefill, setPrefill] = useState<{ name: string; ts: number } | null>(null);

  const handleEnquire = useCallback((medicineName: string) => {
    setPrefill({ name: medicineName, ts: Date.now() });
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Hero />
      <CallNow />
      <InquiryForm prefill={prefill} />
      <OwnerProfile />
      <Catalog onEnquire={handleEnquire} />
      <Contact />
    </main>
  );
}
