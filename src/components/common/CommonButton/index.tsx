import { clsx } from "clsx";
import React from "react";

interface ICommonButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "default";
}
export default function CommonButton(props: ICommonButtonProps) {
  const { className, children, type = "default", onClick } = props ?? {};

  return (
    <button
      className={clsx(
        className,
        "min-w-[199px] h-[64px] rounded-[30px] text-[20px] flex justify-center items-center cursor-pointer font-kronaOne",
        type === "default"
          ? "border-[1px] border-solid border-[#757575] bg-[#111111] hover:bg-[#222]"
          : "text-black bg-gradient-to-r from-[#8CF6A6] to-[#C4F5F8] hover:from-[#8DF7A7] hover:to-[#8DF7A7]"
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          type === "default"
            ? "bg-gradient-to-r from-[#8CF6A6] to-[#C4F5F8] bg-clip-text text-transparent bg-[length:200%_auto] animate-shine"
            : "text-black"
        )}
      >
        {children}
      </span>
    </button>
  );
}
