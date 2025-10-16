import { clsx } from "clsx";
import React from "react";

interface ICommonButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export default function CommonButton(props: ICommonButtonProps) {
  const { className, children, onClick } = props ?? {};

  return (
    <div className="min-w-[133.5px] h-[37.43px] rounded-[37.5px] overflow-hidden gradient-bg p-[0.75px]">
      <button
        className={clsx(
          className,
          "bg-black cursor-pointer hover:shadow-[inset_0px_0px_20px_5px_rgba(88,255,152,0.5)] w-full h-full rounded-[37.5px] flex justify-center items-center px-[18px] py-3 text-[#B1FFCF] hover:text-[rgba(177_255_207_/_0.7)] leading-[1.2] text-[16px] font-DMSansMedium font-medium"
        )}
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    </div>
  );
}
