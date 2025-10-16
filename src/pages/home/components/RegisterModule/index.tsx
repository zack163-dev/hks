import CommonButton from "@/components/common/CommonButton";
import { clsx } from "clsx";
import { startDate, prize } from "@/config";

interface IRegisterModuleProps {
  className?: string;
}

export default function RegisterModule(props: IRegisterModuleProps) {
  const { className } = props;

  const handleRegisterClick = () => {
    const sitesContainer = document.getElementById("sites-cards-container");
    if (sitesContainer) {
      sitesContainer.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <div
      className={clsx("flex items-center gap-4 px-[90px] flex-col", className)}
    >
      <div className="text-[80px] leading-[1] text-white font-DMSansBold font-bold">
        <div className="flex space-x-[28px] items-center justify-center">
          <h2>SCOOP</h2>
          <h2 className="text-[#97F7E2]">AI</h2>
        </div>
        <h2>HACKATHON</h2>
      </div>
      <div className="flex gap-9 items-center">
        <div className="flex items-center gap-[10px]">
          <div className="flex flex-col text-[12px] font-DMSansMedium font-medium leading-[0.9] text-[#97F7E2]">
            <span>Start</span>
            <span>Date</span>
          </div>
          <span className="text-[32px] font-bold leading-[1] font-DMSansBold gradient-text">
            {startDate}
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex flex-col text-[12px] font-DMSansMedium font-medium leading-[0.9] text-[#97F7E2]">
            <span>Prize</span>
            <span>Pool</span>
          </div>
          <span className="text-[32px] font-bold leading-[1] font-DMSansBold gradient-text">
            ${prize}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <CommonButton onClick={handleRegisterClick}>Register</CommonButton>
        <CommonButton>Document</CommonButton>
      </div>
    </div>
  );
}
