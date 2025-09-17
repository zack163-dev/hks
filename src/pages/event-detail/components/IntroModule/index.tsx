import clsx from "clsx";
import { eventDetails } from "@/config";
import Bignumber from "bignumber.js";
import route1 from "@/assets/route1.png";

interface IIntroModuleProps {
  className?: string;
  id: string;
}

export default function IntroModule(props?: IIntroModuleProps) {
  const { className, id } = props || {};
  const eventDetail = eventDetails.find((item) => item.id === id);

  return (
    <div
      className={clsx(
        "w-full flex flex-col items-end px-[90px] h-[695px] relative",
        className
      )}
    >
      <img
        src={route1}
        alt=""
        className="left-[0] -top-[80px] absolute w-[1440px]"
      />
      <h4 className="text-[20px] leading-[1] text-[#B3B3B3] w-[400px] text-right mt-[84px]">
        {eventDetail?.description}
      </h4>
      <h1 className="text-[72px] leading-[1] font-kronaOne gradient-text">
        {eventDetail?.title}
      </h1>
      <div className="flex mt-6 flex-col items-end gap-1">
        <span className="text-[20px] leading-[1] text-white">Total Price</span>
        <div className="flex items-center gap-1">
          <span className="gradient-text-1 text-[20px] leading-[1.36] font-kronaOne">
            ${Bignumber(eventDetail?.totalPrizeUsd ?? 0).toFormat()}
          </span>
          <span className="text-[16px] leading-[20.63px] text-[#B3B3B3]">{`in ${eventDetail?.prizeToken}`}</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-4">
        {[1, 2].map((item) => {
          return (
            <div key={item} className="w-9 h-9 bg-[#D9D9D9] rounded-full"></div>
          );
        })}
      </div>
    </div>
  );
}
