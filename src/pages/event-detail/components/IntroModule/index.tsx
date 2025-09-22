import clsx from "clsx";
import { eventDetails, routeMap } from "@/config";
import Bignumber from "bignumber.js";
import route1 from "@/assets/route1.png";
import route2 from "@/assets/route2.png";

interface IIntroModuleProps {
  className?: string;
  isHistoryData?: boolean;
  id: string;
}

export default function IntroModule(props?: IIntroModuleProps) {
  const { className, id, isHistoryData } = props || {};
  const eventDetail = eventDetails.find((item) => item.id === id);
  const routeDetail = routeMap.find((item) => item.id === id);

  return (
    <div
      className={clsx(
        "w-full flex flex-col items-end px-[90px] h-[605px] relative",
        className
      )}
    >
      <div className="w-[335px] h-[189px] bg-gradient-to-r from-black to-transparent absolute left-0 top-0 z-20"></div>
      <div className="w-[597px] h-[189px] bg-gradient-to-r to-black from-transparent absolute right-0 bottom-0 z-20"></div>
      <img
        src={isHistoryData ? route2 : route1}
        alt=""
        className="left-[0] top-0 absolute w-[1440px]"
      />
      <div
        className={clsx(
          "absolute  cursor-pointer hover:animate-float-up-down",
          isHistoryData
            ? "left-[522px] top-[292px]"
            : "left-[268px] top-[142px]"
        )}
      >
        <img
          src={routeDetail?.img}
          alt=""
          className="w-[201px]"
          style={{ filter: "drop-shadow(0 20px 20px rgba(0, 0, 0, 0.6))" }}
        />
      </div>
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
