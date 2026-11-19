import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const links = ["Contact Us", "Privacy Policy", "Refund Policy", "Terms & Conditions"];

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      <div className="bg-primary text-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2">
          {/* Left: logo, socials, contact */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <img
                src="/logo.png"
                alt="Nashys & Co."
                className="h-9 w-auto brightness-0 invert"
              />
              <ul className="mt-5 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/40 text-sm text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm">
              <a
                href="tel:+917994519952"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <FiPhone className="text-base" />
                +91 7994519952
              </a>
              <a
                href="mailto:nashysandco@gmail.com"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <FiMail className="text-base" />
                nashysandco@gmail.com
              </a>
            </div>
          </div>

          {/* Right: newsletter, links */}
          <div className="flex flex-col justify-between gap-8 md:items-end">
            <div className="w-full max-w-md">
              <h3 className="font-roman text-2xl font-light tracking-wide">
                Our Little Secrets
              </h3>
              <p className="mt-2 text-[14px] leading-snug text-secondary/80">
                Never Miss A Moment! Stay Updated On Our Latest Programs,
                Workshops &amp; Activities.
              </p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="min-w-0 flex-1 rounded-md bg-white px-3 py-2 text-[14px] text-black outline-none ring-2 ring-transparent transition focus:ring-tertiary"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-secondary px-5 py-2 text-[14px] font-medium text-primary transition hover:bg-tertiary"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <ul className="flex flex-wrap gap-5 text-[14px] text-secondary/90">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-opacity hover:opacity-70">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-3 text-center text-[12px] tracking-wide text-primary">
        © All Rights Reserved | Designed And Developed By TiGRID
      </div>
    </footer>
  );
};

export default Footer;
