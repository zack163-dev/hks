// src/components/layout/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import backImage from "@/assets/back.png";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-w-[1440px] mx-auto overflow-hidden">
      {isHome && (
        <img
          src={backImage}
          alt="Background"
          className="absolute top-[1219px] left-0 w-full h-[1950px] object-fill z-[-1]"
        />
      )}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
