import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import RegisterButton from "./RegisterButton";

const navItems = [
  { label: "Home", sectionId: null },
  { label: "Works", sectionId: "works" },
  { label: "Awards", sectionId: "awards" },
  { label: "Workshop", sectionId: "workshop" },
] as const;

const Header = () => {
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (label: string, sectionId: string | null) => {
    setActive(label);
    setMenuOpen(false);

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
    <>
      <header className="sticky top-0 z-40 w-full bg-secondary/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            aria-label="Nashys & Co. home"
            onClick={() => handleNavClick("Home", null)}
          >
            <img src="/logo.png" alt="Nashys & Co." className="h-8 md:h-10 w-auto" />
          </NavLink>

          {/* Desktop navigation */}
          <nav className="hidden rounded-full bg-white p-1 shadow-md shadow-primary/10 ring-1 ring-primary/5 md:block">
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

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-primary shadow-md shadow-primary/10 ring-1 ring-primary/5 transition-colors hover:bg-primary hover:text-white md:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile side drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-xs"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
              className="fixed right-0 top-0 flex h-dvh w-72 max-w-[82vw] flex-col justify-between bg-secondary p-6 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-primary/15 pb-4">
                  <img
                    src="/logo.png"
                    alt="Nashys & Co."
                    className="h-8 w-auto"
                  />
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-lg text-primary shadow-sm ring-1 ring-primary/10 transition-colors hover:bg-primary hover:text-white"
                  >
                    <FiX />
                  </button>
                </div>

                <nav className="mt-6">
                  <ul className="flex flex-col gap-2">
                    {navItems.map(({ label, sectionId }) => (
                      <li key={label}>
                        <button
                          type="button"
                          onClick={() => handleNavClick(label, sectionId)}
                          className={`w-full cursor-pointer rounded-full px-5 py-3 text-left font-helvetica text-sm font-medium tracking-wide transition-all duration-300 ${
                            active === label
                              ? "bg-primary text-white shadow-md shadow-primary/30"
                              : "bg-white/75 text-gray-800 hover:bg-primary/10"
                          }`}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div
                className="border-t border-primary/15 pt-5"
                onClick={() => setMenuOpen(false)}
              >
                <RegisterButton variant="primary" />
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
