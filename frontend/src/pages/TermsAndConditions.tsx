import PolicyLayout, { type PolicySection } from "../common/PolicyLayout";

const sections: PolicySection[] = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing this website or registering for any online or offline workshop hosted by Nashys & Co., you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.",
    ],
  },
  {
    title: "Workshop Registration & Booking",
    bullets: [
      "Workshop seats are limited and are confirmed only upon receipt of full registration payment.",
      "Participants are responsible for providing accurate contact details so we can send workshop timings, venue information, or online session links.",
      "Nashys & Co. reserves the right to reschedule or modify a workshop session if unavoidable circumstances arise, in which case registered participants will be notified promptly.",
    ],
  },
  {
    title: "Materials & Participation",
    bullets: [
      "For offline workshops, essential art materials specified in the workshop listing are provided at the venue.",
      "For online workshops, participants are responsible for arranging the recommended materials list shared prior to the session and maintaining a stable internet connection.",
      "Participants are expected to maintain a respectful and supportive environment for everyone attending the workshop.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All website content, branding, photographs, workshop curriculum, demonstrations, and teaching materials are the intellectual property of Nashys & Co. You may keep and display the artwork you personally create during a workshop, but recording, redistributing, or reselling our workshop videos or teaching materials without written permission is prohibited.",
    ],
  },
  {
    title: "Photography & Media",
    paragraphs: [
      "During offline and online workshops, we may capture photographs or short clips of the creative process and finished artworks for our portfolio and social media. If you prefer not to appear in photos or videos, please let us know before the session begins.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "While we take care to ensure a safe and enjoyable experience, Nashys & Co. is not liable for any personal injury, loss of personal belongings at offline venues, or technical interruptions outside our control during online sessions.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts in Kerala, India.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using the Nashys & Co. website or registering for our texture art workshops."
      lastUpdated="November 2026"
      sections={sections}
    />
  );
};

export default TermsAndConditions;
