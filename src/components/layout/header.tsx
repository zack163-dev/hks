import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();
  return (
    <header className="h-[73px] px-[90px] items-center flex bg-[rgba(9_26_16_/_0.5)] border-b border-transparent [border-image:linear-gradient(90deg,rgba(47,135,81,0)_0%,#1D5432_50%,rgba(65,186,111,0)_100%)_1]">
      <img
        onClick={() => {
          nav("/");
        }}
        src={logo}
        alt="logo"
        className="w-auto h-[20px] cursor-pointer"
      />
    </header>
  );
}
