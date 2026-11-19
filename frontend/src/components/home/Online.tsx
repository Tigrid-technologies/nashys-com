import { FaPlay } from "react-icons/fa6";
import onlineImage from "../../assets/online-image.png";
import RegisterButton from "../../common/RegisterButton";

const Online = () => {
  return (
    <section id="online" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="font-sans">
          <p className="text-sm text-gray-800">Real Stories. Real Learning.</p>
          <h2 className="mt-5 font-roman text-4xl font-light leading-tight tracking-tight text-primary md:text-5xl">
            Get A Feel For Our
            <br />
            Online Experience
          </h2>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-gray-700">
            Texture Art Painting Is A Beautiful And Expressive Art Form That
            Allows Us To Create Stunning Pieces Using Textures, Layers,
            Patterns, And Creativity — And Today, Learning
          </p>
          <div className="mt-7">
            <RegisterButton variant="primary" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 ring-1 ring-primary/10">
          <img
            src={onlineImage}
            alt="Students at an online texture art workshop"
            className="w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <button
            type="button"
            className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/20 py-1.5 pl-2 pr-4 text-[10px] text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[8px]">
              <FaPlay className="ml-px" />
            </span>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Online;
