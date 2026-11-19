import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import faqImage from "../../assets/faq-card.jpg";
import RegisterButton from "../../common/RegisterButton";
import Reveal from "../../common/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

// Answers for all items except the first are placeholder copy; edit freely.
const faqs: FaqItem[] = [
  {
    question: "What Is A Texture Art Painting Workshop ?",
    answer:
      "A Texture Art Painting Workshop Teaches You How To Create Beautiful 3D Effects And Textured Surfaces Using Different Painting Techniques And Materials.",
  },
  {
    question: "Do I Need Any Prior Painting Experience ?",
    answer:
      "Not at all. The workshop is designed for complete beginners as well as art enthusiasts, and every step is guided so you can follow along comfortably.",
  },
  {
    question: "What Materials Will Be Provided During The Workshop ?",
    answer:
      "All the essentials, including canvas, paints, palette knives and texture materials, are provided so you can simply arrive and start creating.",
  },
  {
    question: "Will I Be Able To Take My Artwork Home ?",
    answer:
      "Yes. The piece you create during the workshop is yours to take home and cherish once it has been finished.",
  },
  {
    question: "What Skills Will I Learn In This Workshop ?",
    answer:
      "You will learn texture art basics, layering and colour techniques, tool handling and composition, along with the confidence to continue creating on your own.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-8 md:grid-cols-[1.4fr_1fr]">
        <Reveal direction="left" className="font-sans pb-10">
          <p className="text-sm text-gray-800">FAQ</p>
          <h2 className="mt-2 font-roman text-3xl font-light tracking-tight text-primary">
            Everything Made Clear
          </h2>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-gray-700">
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
                    <span className="font-roman text-xl text-gray-800">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-sm transition-all duration-500 ${
                        isOpen ? "rotate-180 bg-primary text-white" : "text-primary hover:bg-primary/10"
                      }`}
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                  {/* Grid-rows trick animates height smoothly (0fr -> 1fr) */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-[14px] leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.15}
          className="h-full rounded-2xl bg-primary p-4 text-white shadow-2xl shadow-primary/25"
        >
          <img
            src={faqImage}
            alt="Texture art close-up"
            className="h-[60%] w-full rounded-xl object-cover"
          />
          <h3 className="mt-5 font-roman text-2xl">
            A Glimpse Into Our Offline World
          </h3>
          <p className="mt-3 font-sans text-[14px] leading-relaxed">
            Step Inside Our Creative Space, Where Hands-On Experiences,
            Meaningful Connections, And Unforgettable Moments Bring Learning To
            Life.
          </p>
          <div className="mt-5">
            <RegisterButton variant="cream" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
