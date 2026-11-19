import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MainLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
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
    </div>
  );
};

export default MainLayout;
