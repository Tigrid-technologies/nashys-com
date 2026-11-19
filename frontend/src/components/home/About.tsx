import aboutImage from "../../assets/about-image.png";

const paragraphs = [
  "Texture Art Painting Is A Beautiful And Expressive Art Form That Allows Us To Create Stunning Pieces Using Textures, Layers, Patterns, And Creativity — And Today, Learning It Online Is Easier And More Interactive Than Ever Before.",
  "Through My Carefully Guided Online Workshop, I Will Help You Learn Techniques, Understand Materials, Follow Step-By-Step Demonstrations, And Create Your Own Artwork From The Comfort Of Your Home. With Modern Technology, Live Guidance, And Detailed Instruction, Creativity Can Now Be Learned And Shared Beyond One’s Reach.",
  "Over The Years, I Have Explored Different Creative Works, Paintings, And Handmade Décor, And These Experiences Have Helped Me Develop Teaching Methods That Make Learning Simple, Practical, And Easy To Grasp — Even For Complete Beginners.",
  "Whether You Are Someone Completely New To Art Or Simply Looking To Explore A New Creative Skill, This Workshop Is Designed To Make Your Learning Journey Exciting, Inspiring, And Enjoyable. Sometimes, Trying Something New Is All It Takes To Discover A Passion You Never Knew You Had.",
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-10 md:grid-cols-2">
        <div>
          <h2 className="font-cormorant text-4xl text-primary md:text-5xl">
            Learn Art Like Never Before!
          </h2>
          <img
            src={aboutImage}
            alt="Texture art painting with a palette knife"
            className="mt-6 w-full rounded-2xl object-cover"
          />
        </div>

        <div className="font-montserrat md:pl-6">
          <p className="text-sm text-gray-800">About</p>
          <h3 className="mt-3 font-cormorant text-2xl text-primary">
            Welcome To Our Workshop
          </h3>
          <div className="mt-5 space-y-4 text-justify text-[11px] leading-relaxed text-gray-700">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
