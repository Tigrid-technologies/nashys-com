import { useState } from "react";

const navItems = ["Home", "Works", "Awards", "Workshop"];

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="w-full bg-secondary border-b border-primary/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" aria-label="Nashys & Co. home">
          <img src="/logo.png" alt="Nashys & Co." className="h-10 w-auto" />
        </a>

        <nav className="rounded-full bg-white p-1 shadow-sm">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition-colors font-montserrat ${
                    active === item
                      ? "bg-primary text-white"
                      : "text-black hover:bg-primary/10"
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
