import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import RegisterButton from "../../common/RegisterButton";

interface WorkshopItem {
  title: string;
  description: string;
}

// Descriptions for all items except the first are placeholder copy; edit freely.
const items: WorkshopItem[] = [
  {
    title: "From A Beginner To Expert",
    description:
      "Gain Hands-On Knowledge About Textures, Tools, Materials, Composition, Layering, And Finishing Techniques Used To Create Professional Looking Artwork.",
  },
  {
    title: "Insights That Are Real",
    description:
      "Learn directly from real studio experience. Get honest tips on what works, common beginner mistakes to avoid, and practical insights gathered from years of creating and teaching texture art.",
  },
  {
    title: "Bring The Creative In You!",
    description:
      "No prior experience needed. Guided step by step, you will discover your own creative voice and see your ideas take shape on canvas with confidence.",
  },
  {
    title: "Art That Redefines You",
    description:
      "Texture art is more than painting. It is a way to express emotions and stories, and to see yourself as an artist who can create something truly personal and meaningful.",
  },
  {
    title: "Be Your Own Brand",
    description:
      "Understand how handmade art and décor can become a creative path of your own. Build skills, confidence and the foundation to turn your passion into something independent.",
  },
  {
    title: "Art A Form Of Mindfulness",
    description:
      "Slow down and unwind. Working with textures, colours and layers is a calming, hands-on experience that helps you relax, focus and enjoy the present moment.",
  },
];

const Workshop = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="workshop" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="font-sans">
          <h2 className="font-roman text-4xl font-light leading-tight tracking-tight text-primary md:text-5xl">
            Explore Art. Experience Creativity. Create Memories.
          </h2>
          <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-gray-700">
            Discover The Beauty Of Texture Art And Bring Your Imagination To
            Life With Every Brushstroke. Explore Creative Techniques, Experiment
            With Colours, And Create Stunning 3D Textured Masterpieces. Enjoy A
            Hands-On Painting Experience Guided By Creativity And Inspiration.
            Whether You’re A Beginner Or An Art Enthusiast, There’s Something
            Exciting Waiting For You. Unleash Your Creativity, Create Something
            Unique, And Take Home Memories To Cherish Forever!
          </p>
          <p className="mt-5 text-md font-bold text-gray-600">
            Register Now &amp; Be Part Of The Creative Experience!
          </p>
          <div className="mt-6">
            <RegisterButton variant="primary" />
          </div>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.title}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary text-secondary bg-primary shadow-xl shadow-primary/25"
                    : "text-primary hover:border-primary/60 hover:bg-white/70"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-3 text-left"
                >
                  <span className="font-roman text-lg">{item.title}</span>
                  <span
                    aria-hidden
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-sm transition-all duration-500 ${
                      isOpen ? "rotate-180 bg-white text-primary" : "bg-primary text-white"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiPlus />}
                  </span>
                </button>
                {/* Grid-rows trick animates height smoothly (0fr -> 1fr) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 font-sans text-[12px] leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Workshop;
