import PolicyLayout, { type PolicySection } from "../common/PolicyLayout";

const sections: PolicySection[] = [
  {
    title: "Workshop Cancellations by Participants",
    paragraphs: [
      "Because workshop seats are limited and materials are prepared in advance for each participant, we follow a clear cancellation and refund structure:",
    ],
    bullets: [
      "Cancellations requested 7 or more days before the workshop date are eligible for a full refund or a free transfer to a future batch.",
      "Cancellations requested between 3 and 6 days before the workshop date are eligible for a 50% refund or a one-time reschedule to the next available session.",
      "Cancellations made less than 48 hours before the workshop start time, as well as no-shows, are non-refundable.",
    ],
  },
  {
    title: "Online Workshop Access",
    paragraphs: [
      "Once an online workshop has commenced or digital materials/recordings have been shared with a registered participant, fees are non-refundable. If you miss a live session due to an emergency, please contact us and we will do our best to accommodate you in an upcoming batch.",
    ],
  },
  {
    title: "Rescheduling & Seat Transfers",
    paragraphs: [
      "If you are unable to attend after registering, you may transfer your seat to another person at no extra charge by notifying us at least 24 hours before the workshop with the new participant's name and contact details.",
    ],
  },
  {
    title: "Cancellations by Nashys & Co.",
    paragraphs: [
      "In the rare event that Nashys & Co. must cancel or postpone a workshop due to unforeseen circumstances, participants will be offered the choice of a full 100% refund or a complimentary transfer to a rescheduled date.",
    ],
  },
  {
    title: "How Refunds Are Processed",
    bullets: [
      "To request a cancellation, reschedule, or refund, email us at nashysandco@gmail.com or call +91 7994519952 with your booking details.",
      "Approved refunds are issued back to the original payment method within 5 to 7 business days.",
    ],
  },
];

const Refund = () => {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Refund Policy"
      subtitle="Clear and fair guidelines covering cancellations, rescheduling, and refunds for Nashys & Co. workshops."
      lastUpdated="November 2026"
      sections={sections}
    />
  );
};

export default Refund;
