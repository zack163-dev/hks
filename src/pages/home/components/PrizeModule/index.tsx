import GlareHover from "@/components/common/GlareHover";
import cup from "@/assets/cup.svg";
import clsx from "clsx";
import { prize } from "@/config";
interface IPrizeModuleProps {
  className?: string;
}

export default function PrizeModule(props?: IPrizeModuleProps) {
  return (
    <div className={clsx("w-fit mx-auto", props?.className)}>
      <div className="w-[670px] h-[252px] flex justify-center items-center rounded-[10px] relative bg-[url('@/assets/prize-pool-box.svg')] bg-contain bg-no-repeat bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center relative rounded-[10px]">
          <GlareHover
            glareColor="#0a2514"
            glareOpacity={0.1}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <span className="gradient-text font-DMSansBold text-[100px] leading-[1] font-bold">
              ${prize}
            </span>
          </GlareHover>
          <span className="text-[#58FF98] text-[24px] leading-[1] mt-5">
            IN GAS
          </span>
          <div className="w-[370px] flex absolute -top-8 left-1/2 transform -translate-x-1/2 gap-2 items-center justify-center">
            <img src={cup} alt="" className="w-10 h-[48px]" />
            <span className="text-[#58FF98] text-[64px] leading-[1] font-bold font-DMSansBold flex-shrink-0 tracking-[-2px]">
              Prize Pool
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
