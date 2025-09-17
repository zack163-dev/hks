import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();
  return (
    <header className="h-[68px] px-[90px] items-center flex">
      <img
        onClick={() => {
          nav("/");
        }}
        src={logo}
        alt="logo"
        className="w-[133px] h-[40px] cursor-pointer"
      />
    </header>
  );
}
