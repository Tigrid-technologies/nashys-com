import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const StickyRegisterBar = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on the contact/registration page itself
    if (pathname === "/contact") {
      setVisible(false);
      return;
    }

    const updateVisibility = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        // Show once the bottom of the Hero section has scrolled past the top
        setVisible(hero.getBoundingClientRect().bottom <= 80);
      } else {
        setVisible(window.scrollY > 200);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/20 bg-secondary/95 shadow-[0_-8px_30px_rgba(119,19,19,0.14)] backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            {/* Left: price & workshop title */}
            <div className="min-w-0 font-sans">
              <div className="flex items-baseline gap-2">
                <span className="font-roman text-xl font-semibold leading-none tracking-wide text-primary sm:text-2xl">
                  FREE
                </span>
                <span className="text-sm font-medium text-primary/65 line-through sm:text-base">
                  ₹4,999
                </span>
              </div>
              <p className="mt-0.5 truncate text-[11px] font-medium text-gray-700 sm:text-xs">
                Texture Art Painting Workshop
              </p>
            </div>

            {/* Right: CTA button */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0"
            >
              <Link
                to="/contact#register-form"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#5a0e0e] py-2 pl-4 pr-2 font-sans text-xs font-semibold tracking-wide text-white shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl sm:gap-3 sm:py-2.5 sm:pl-6 sm:pr-2.5 sm:text-sm"
              >
                <span>
                  Register now for{" "}
                  <span className="text-secondary/80 line-through">₹4,999</span>{" "}
                  <span className="text-tertiary">Free</span>
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 bg-white/15 text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-primary sm:h-7 sm:w-7">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyRegisterBar;
