import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import StickyRegisterBar from "../common/StickyRegisterBar";

const MainLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <StickyRegisterBar />
    </div>
  );
};

export default MainLayout;
