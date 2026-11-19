const socials = [
  { label: "Facebook", href: "#", text: "f" },
  { label: "Instagram", href: "#", text: "◎" },
  { label: "LinkedIn", href: "#", text: "in" },
  { label: "YouTube", href: "#", text: "▶" },
];

const links = ["Contact Us", "Privacy Policy", "Refund Policy", "Terms & Conditions"];

const Footer = () => {
  return (
    <footer className="w-full font-montserrat">
      <div className="bg-primary text-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 md:grid-cols-2">
          {/* Left: logo, socials, contact */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <img
                src="/logo.png"
                alt="Nashys & Co."
                className="h-9 w-auto brightness-0 invert"
              />
              <ul className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary hover:opacity-80"
                    >
                      {s.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm">
              <a href="tel:+917994519952" className="flex items-center gap-2">
                <span aria-hidden>📞</span>+91 7994519952
              </a>
              <a href="mailto:nashysandco@gmail.com" className="flex items-center gap-2">
                <span aria-hidden>✉️</span>nashysandco@gmail.com
              </a>
            </div>
          </div>

          {/* Right: newsletter, links */}
          <div className="flex flex-col justify-between gap-8 md:items-end">
            <div className="w-full max-w-md">
              <h3 className="font-cormorant text-lg font-semibold">Our Little Secrets</h3>
              <p className="mt-1 text-[10px] leading-tight">
                Never Miss A Moment! Stay Updated On Our Latest Programs, Workshops &amp;
                Activities.
              </p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="min-w-0 flex-1 rounded-md bg-white px-3 py-1.5 text-[10px] text-black outline-none"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-secondary px-5 py-1.5 text-[10px] font-medium text-primary hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <ul className="flex flex-wrap gap-5 text-[11px]">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-3 text-center text-[10px] text-primary">
        © All Rights Reserved | Designed And Developed By TIGRID
      </div>
    </footer>
  );
};

export default Footer;
