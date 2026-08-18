import LegalLayout, { LegalSection } from '../components/LegalLayout';
import { STORE } from '../lib/store';
import { usePageTitle } from '../lib/usePageTitle';

export default function PrivacyPolicy() {
  usePageTitle('Privacy Policy | Verma Healthcare');
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="18 August 2026">
      <LegalSection title="Our simple promise">
        <p>
          <strong className="text-brand-900">We don't collect your data through tracking.</strong>{' '}
          This website does not use cookies, analytics tools, or advertising
          networks. There are no third-party trackers of any kind.
        </p>
      </LegalSection>

      <LegalSection title="Information you choose to share">
        <p>
          When you use the order enquiry form, call us, or message us on
          WhatsApp, you voluntarily share details such as your name, phone
          number, the medicine you are asking about, and any message you add.
        </p>
        <p>
          We use this information for one purpose only: to respond to your
          request — confirming availability, price, and pickup. We do not sell,
          rent, or share your details with any third party.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and tracking">
        <p>
          This website does not set cookies and does not embed analytics,
          advertising, or social-media tracking scripts. Browsing the site is
          completely anonymous.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep enquiry details">
        <p>
          Enquiry records are kept only as long as needed to serve your request
          and maintain basic store records. They are never used for marketing.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          You may contact us at any time to ask what enquiry details we hold
          about you, or to request that they be removed. Simply call{' '}
          <a href={`tel:${STORE.phoneRaw}`} className="font-bold text-brand-800 underline underline-offset-4">
            {STORE.phoneDisplay}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${STORE.email}`} className="font-bold text-brand-800 underline underline-offset-4">
            {STORE.email}
          </a>{' '}
          and we will take care of it promptly.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If this policy ever changes, the updated version will be posted on
          this page with a new date.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Questions about privacy? Reach us at{' '}
          <a href={`mailto:${STORE.email}`} className="font-bold text-brand-800 underline underline-offset-4">
            {STORE.email}
          </a>
          , by phone at {STORE.phoneDisplay}, or visit us at {STORE.address}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
