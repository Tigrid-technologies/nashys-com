import PolicyLayout, { type PolicySection } from "../common/PolicyLayout";

const sections: PolicySection[] = [
  {
    title: "Information We Collect",
    paragraphs: [
      "When you visit Nashys & Co., register for our online or offline texture art workshops, or subscribe to our newsletter, we may collect personal information that you voluntarily provide to us.",
    ],
    bullets: [
      "Contact details such as your name, email address, and phone number.",
      "Workshop registration details, preferences, and enquiry messages.",
      "Payment confirmation details processed securely through third-party payment gateways (we do not store your card or banking credentials).",
      "Basic technical information such as browser type and pages visited to improve website performance.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information we collect solely to deliver a smooth, personal, and reliable workshop experience.",
    ],
    bullets: [
      "Confirming and managing your online or offline workshop bookings.",
      "Sending workshop instructions, schedules, meeting links, or venue updates.",
      "Responding to your enquiries and providing participant support.",
      "Sharing updates on upcoming workshops, programs, and activities when you subscribe to our newsletter.",
    ],
  },
  {
    title: "Sharing Your Information",
    paragraphs: [
      "We respect your privacy and never sell, rent, or trade your personal information to third parties. We only share data with trusted service providers (such as payment processors or email services) strictly to operate our website and workshops, or when required by law.",
    ],
  },
  {
    title: "Cookies & Analytics",
    paragraphs: [
      "Our website may use essential cookies to ensure proper functionality and a smooth browsing experience. You can adjust your browser settings to refuse cookies at any time, though some features of the site may not work as intended.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable administrative and technical measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal information at any time. You can also unsubscribe from our newsletter updates by contacting us directly.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or services. Any updates will be posted on this page with a revised effective date.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Your trust matters to us. This policy explains how Nashys & Co. collects, uses, and safeguards your personal information."
      lastUpdated="November 2026"
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
