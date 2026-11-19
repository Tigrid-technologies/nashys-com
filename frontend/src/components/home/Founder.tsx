import founderBg from "../../assets/founder-bg.png";
import founderImage from "../../assets/founder.png";
import Reveal from "../../common/Reveal";

const paragraphs = [
  "Over The Years, I Have Explored And Immersed Myself In Different Forms Of Creativity — From Paintings And Handmade Décor To Various Artistic And Design Works That Helped Me Discover And Refine My Own Style, Ideas, And Craft. Every Experience Taught Me Something Valuable, Shaping The Artist And Person I Am Today. What Made Me Truly Fall In Love With Texture Art Painting Is The Freedom It Gives Me To Bring Together All These Creative Experiences Onto A Single Canvas. Through Textures, Layers, Colors, And Forms, I Am Able To Express Emotions, Stories, And Ideas In A Way That Feels Deeply Personal And Meaningful.",
  "I Founded NashysHomeDecor Not Only To Create Art That I Am Passionate About, But Also To Share My Vision And Stories With The World Through Every Piece I Make. More Importantly, This Journey Gave Me Something Beyond Creativity — It Gave Me Confidence, Purpose, And Independence. What Started As A Passion Slowly Became A Path That Transformed My Everyday Life, Allowing Me To Build Something Of My Own Through Art.",
  "Today, Through Our Offline Workshops, My Goal Is To Help Other Women Discover That Same Possibility Within Themselves. I Want To Create A Space Where Women Can Explore Their Creativity, Learn Valuable Artistic Skills, Gain Confidence In Their Talents, And Potentially Build An Independent Creative Journey Of Their Own.",
];

const Founder = () => {
  return (
    <section
      id="founder"
      className="bg-primary bg-cover bg-left text-white"
      style={{ backgroundImage: `url(${founderBg})` }}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
        <Reveal direction="left" className="relative overflow-hidden rounded-2xl">
          <img
            src={founderImage}
            alt="Nasheeda K T, founder"
            className="w-full object-cover"
          />
          <span className="absolute bottom-4 right-3 rounded-full bg-white px-6 py-1.5 font-sans text-xs font-medium text-primary">
            Nasheeda K T
          </span>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <h2 className="font-roman text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Meet The Founder
            <br />
            Behind The Art.
          </h2>
          <div className="mt-6 space-y-4 text-justify font-sans text-[14px] leading-relaxed">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Founder;
