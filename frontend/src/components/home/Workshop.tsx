import { useState } from "react";

interface WorkshopItem {
  title: string;
  description: string;
}

// Only the first description was provided in the design; fill in the rest.
const items: WorkshopItem[] = [
  {
    title: "From A Beginner To Expert",
    description:
      "Gain Hands-On Knowledge About Textures, Tools, Materials, Composition, Layering, And Finishing Techniques Used To Create Professional Looking Artwork.",
  },
  { title: "Insights That Are Real", description: "" },
  { title: "Bring The Creative In You!", description: "" },
  { title: "Art That Redefines You", description: "" },
  { title: "Be Your Own Brand", description: "" },
  { title: "Art A Form Of Mindfulness", description: "" },
];

const Workshop = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="workshop" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="font-montserrat">
          <h2 className="font-cormorant text-4xl leading-tight text-primary md:text-5xl">
            Explore Art. Experience Creativity. Create Memories.
          </h2>
          <p className="mt-5 max-w-md text-[11px] leading-relaxed text-gray-700">
            Discover The Beauty Of Texture Art And Bring Your Imagination To
            Life With Every Brushstroke. Explore Creative Techniques, Experiment
            With Colours, And Create Stunning 3D Textured Masterpieces. Enjoy A
            Hands-On Painting Experience Guided By Creativity And Inspiration.
            Whether You’re A Beginner Or An Art Enthusiast, There’s Something
            Exciting Waiting For You. Unleash Your Creativity, Create Something
            Unique, And Take Home Memories To Cherish Forever!
          </p>
          <p className="mt-5 text-sm font-medium text-gray-600">
            Register Now &amp; Be Part Of The Creative Experience!
          </p>
          <a
            href="#register"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-xs font-medium text-white hover:opacity-90"
          >
            Register Now
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white text-sm">
              ↗
            </span>
          </a>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.title}
                className={`rounded-lg border transition-colors ${
                  isOpen
                    ? "border-primary bg-primary text-white"
                    : "border-primary/40 text-primary"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-3 text-left"
                >
                  <span className="font-cormorant text-lg">{item.title}</span>
                  <span
                    aria-hidden
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-sm leading-none ${
                      isOpen ? "bg-white text-primary" : "bg-primary text-white"
                    }`}
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen && item.description && (
                  <p className="px-5 pb-4 font-montserrat text-[10px] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Workshop;
