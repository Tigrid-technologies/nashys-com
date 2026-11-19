import { useState } from "react";
import faqImage from "../../assets/faq-card.jpg";

interface FaqItem {
  question: string;
  answer: string;
}

// Only the first answer was provided in the design; fill in the rest.
const faqs: FaqItem[] = [
  {
    question: "What Is A Texture Art Painting Workshop ?",
    answer:
      "A Texture Art Painting Workshop Teaches You How To Create Beautiful 3D Effects And Textured Surfaces Using Different Painting Techniques And Materials.",
  },
  { question: "Do I Need Any Prior Painting Experience ?", answer: "" },
  { question: "What Materials Will Be Provided During The Workshop ?", answer: "" },
  { question: "Will I Be Able To Take My Artwork Home ?", answer: "" },
  { question: "What Skills Will I Learn In This Workshop ?", answer: "" },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-8 md:grid-cols-[1.4fr_1fr]">
        <div className="font-montserrat">
          <p className="text-sm text-gray-800">FAQ</p>
          <h2 className="mt-2 font-cormorant text-3xl text-primary">
            Everything Made Clear
          </h2>
          <p className="mt-3 max-w-md text-[11px] leading-relaxed text-gray-700">
            Find Quick, Clear Answers To Your Most Common Questions. Explore
            Helpful Information About Our Services, Process, And Everything You
            Need To Know—All In One Place.
          </p>

          <ul className="mt-6 border-t border-gray-300">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question} className="border-b border-gray-300">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between py-4 text-left"
                  >
                    <span className="font-cormorant text-base text-gray-800">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary text-sm leading-none ${
                        isOpen ? "bg-primary text-white" : "text-primary"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && faq.answer && (
                    <p className="pb-4 text-[10px] leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-lg bg-primary p-4 text-white">
          <img
            src={faqImage}
            alt="Texture art close-up"
            className="h-56 w-full rounded-md object-cover"
          />
          <h3 className="mt-5 font-cormorant text-2xl">
            A Glimpse Into Our Offline World
          </h3>
          <p className="mt-3 font-montserrat text-[11px] leading-relaxed">
            Step Inside Our Creative Space, Where Hands-On Experiences,
            Meaningful Connections, And Unforgettable Moments Bring Learning To
            Life.
          </p>
          <a
            href="#register"
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-secondary py-1.5 pl-4 pr-1.5 font-montserrat text-[11px] text-primary hover:opacity-90"
          >
            Register Now
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary text-xs">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
