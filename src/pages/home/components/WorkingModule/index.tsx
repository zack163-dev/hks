import clsx from "clsx";
import aitools from "@/assets/ai-tools/ai-tools.svg";

interface IWorkingModuleProps {
  className?: string;
}

export default function WorkingModule(props?: IWorkingModuleProps) {
  const { className } = props || {};
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-[48px] mx-auto w-fit",
        className
      )}
    >
      <h3 className="text-center text-[64px] font-bold gradient-text font-DMSansBold leading-[1] w-[543px]">
        Working With The Best In AI
      </h3>
      <img src={aitools} alt="" className="w-[791.59px] h-[182px]" />
    </div>
  );
}
