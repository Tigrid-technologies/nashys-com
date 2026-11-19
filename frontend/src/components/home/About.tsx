import aboutImage from "../../assets/about-image.png";
import sealImage from "../../assets/seal.png";
import CountUp from "../../common/CountUp";

const paragraphs = [
  "Texture Art Painting Is A Beautiful And Expressive Art Form That Allows Us To Create Stunning Pieces Using Textures, Layers, Patterns, And Creativity — And Today, Learning It Online Is Easier And More Interactive Than Ever Before.",
  "Through My Carefully Guided Online Workshop, I Will Help You Learn Techniques, Understand Materials, Follow Step-By-Step Demonstrations, And Create Your Own Artwork From The Comfort Of Your Home. With Modern Technology, Live Guidance, And Detailed Instruction, Creativity Can Now Be Learned And Shared Beyond One’s Reach.",
  "Over The Years, I Have Explored Different Creative Works, Paintings, And Handmade Décor, And These Experiences Have Helped Me Develop Teaching Methods That Make Learning Simple, Practical, And Easy To Grasp — Even For Complete Beginners.",
  "Whether You Are Someone Completely New To Art Or Simply Looking To Explore A New Creative Skill, This Workshop Is Designed To Make Your Learning Journey Exciting, Inspiring, And Enjoyable. Sometimes, Trying Something New Is All It Takes To Discover A Passion You Never Knew You Had.",
];

const stats = [
  { value: 10, suffix: "", label: "Awards & Achievements" },
  { value: 25, suffix: "+", label: "Total Workshops" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-10 md:grid-cols-2">
        <div>
          <h2 className="font-roman text-4xl font-light tracking-tight text-primary md:text-5xl">
            Learn Art Like Never Before!
          </h2>
          <div className="relative mt-6 ">
            <img
              src={aboutImage}
              alt="Texture art painting with a palette knife"
              className="w-full rounded-2xl object-cover h-[350px] image-bottom shadow-xl shadow-primary/15"
            />
            <img
              src={sealImage}
              alt="Nashys & Co. seal"
              className="absolute left-0 top-30 w-[40%] -translate-y-1/2 drop-shadow-xl"
            />
          </div>
        </div>

        <div className=" md:pl-6">
          <p className="font-sans text-sm text-gray-800">About</p>
          <h3 className="mt-3 font-roman text-2xl text-primary">
            Welcome To Our Workshop
          </h3>
          <div className=" font-sans mt-5 space-y-4 text-justify text-[14px] leading-relaxed text-gray-700">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <ul className="grid grid-cols-3">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`py-2 pl-4 md:pl-12 ${i > 0 ? "border-l border-gray-300" : ""}`}
            >
              <p className="font-roman flex items-center text-5xl leading-none text-primary md:text-8xl">
                <CountUp value={s.value} />
                {s.suffix && (
                  <span className="ml-1 text-2xl md:text-5xl font-medium">
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="mt-4 max-w-[4rem] font-sans text-xs leading-snug text-gray-600 md:text-[14px]">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
