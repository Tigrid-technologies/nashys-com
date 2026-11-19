import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", sectionId: null },
  { label: "Works", sectionId: "works" },
  { label: "Awards", sectionId: "awards" },
  { label: "Workshop", sectionId: "workshop" },
] as const;

const Header = () => {
  const [active, setActive] = useState<string>("Home");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (label: string, sectionId: string | null) => {
    setActive(label);

    if (!sectionId) {
      if (pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          aria-label="Nashys & Co. home"
          onClick={() => handleNavClick("Home", null)}
        >
          <img src="/logo.png" alt="Nashys & Co." className="h-10 w-auto" />
        </NavLink>

        <nav className="rounded-full bg-white p-1 shadow-md shadow-primary/10 ring-1 ring-primary/5">
          <ul className="flex items-center gap-1">
            {navItems.map(({ label, sectionId }) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(label, sectionId)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 font-helvetica text-sm font-medium tracking-wide transition-all duration-300 ${
                    active === label
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "text-gray-800 hover:bg-primary/10"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
