import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "Works", "Awards", "Workshop"];

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" aria-label="Nashys & Co. home">
          <img src="/logo.png" alt="Nashys & Co." className="h-10 w-auto" />
        </NavLink>

        <nav className="rounded-full bg-white p-1 shadow-md shadow-primary/10 ring-1 ring-primary/5">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 font-sans text-xs font-medium tracking-wide transition-all duration-300 ${
                    active === item
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "text-gray-800 hover:bg-primary/10"
                  }`}
                >
                  {item}
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
