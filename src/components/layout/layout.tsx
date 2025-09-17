// src/components/layout/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LeftPic from "@/assets/left.png";
import RightPic from "@/assets/right.png";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-w-[1440px] mx-auto">
      {isHome && (
        <img
          src={LeftPic}
          alt=""
          className="absolute left-0 bottom-0 h-[238px]"
        />
      )}
      {isHome && (
        <img
          src={RightPic}
          alt=""
          className="absolute right-0 bottom-[1013px] h-[477px]"
        />
      )}
      <div className="flex flex-col mx-auto w-[1440px] min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
