import LegalLayout, { LegalSection } from '../components/LegalLayout';
import { STORE } from '../lib/store';
import { usePageTitle } from '../lib/usePageTitle';

export default function TermsOfService() {
  usePageTitle('Terms of Service | Verma Healthcare');
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="18 August 2026">
      <LegalSection title="1. Acceptance of terms">
        <p>
          By using this website, you agree to these terms. If you do not agree,
          please do not use the site. These terms apply to {STORE.name}, located
          at {STORE.address}.
        </p>
      </LegalSection>

      <LegalSection title="2. What this website offers">
        <p>
          This website provides information about our store and our range of
          products, and lets you send medicine enquiries. An online enquiry is a
          request for information — it becomes a confirmed order only when we
          verify availability and price with you by phone.
        </p>
      </LegalSection>

      <LegalSection title="3. Medicines and prescriptions">
        <p>
          We keep a wide range of medicines and healthcare products,{' '}
          <strong className="text-brand-900">
            subject to availability and valid prescription requirements.
          </strong>{' '}
          Prescription (Rx) medicines are sold only against a valid doctor's
          prescription, as required by law. We may refuse a sale if a valid
          prescription is not provided.
        </p>
      </LegalSection>

      <LegalSection title="4. Prices and availability">
        <p>
          Prices shown on this website are indicative and may vary by batch,
          supplier, or revision of the Maximum Retail Price. Availability
          changes daily; please call to confirm before visiting.
        </p>
      </LegalSection>

      <LegalSection title="5. Medical information is not medical advice">
        <p>
          Content on this website is for general reference only and is not a
          substitute for professional medical advice, diagnosis, or treatment.
          Always consult a qualified doctor before starting, stopping, or
          changing any medication.
        </p>
      </LegalSection>

      <LegalSection title="6. Fair use">
        <p>
          You agree to use this website only for lawful purposes — to browse
          product information and send genuine enquiries. Please do not misuse
          the enquiry form or submit false or misleading information.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, {STORE.name} is not liable for
          any indirect or consequential loss arising from the use of this
          website or from reliance on information published here.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing law">
        <p>
          These terms are governed by the laws of India. Any disputes are
          subject to the jurisdiction of the competent courts in our region.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For any question about these terms, contact us at{' '}
          <a href={`mailto:${STORE.email}`} className="font-bold text-brand-800 underline underline-offset-4">
            {STORE.email}
          </a>{' '}
          or call {STORE.phoneDisplay}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
