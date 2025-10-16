import clsx from "clsx";
import { eventDetails, routeMap } from "@/config";
import route from "@/assets/route-new.svg";
import shine from "@/assets/shine.png";

interface IIntroModuleProps {
  className?: string;
  id: string;
}

export default function IntroModule(props?: IIntroModuleProps) {
  const { className, id } = props || {};
  const eventDetail = eventDetails.find((item) => item.id === id);
  const routeDetail = routeMap.find((item) => item.id === id);

  return (
    <div
      className={clsx(
        "flex flex-col items-end px-[90px] h-[656.5px] relative mx-auto w-[1440px]",
        className
      )}
    >
      <div className="w-[335px] h-[189px] bg-gradient-to-r from-black to-transparent absolute left-0 top-0 z-20"></div>
      <div className="w-[597px] h-[189px] bg-gradient-to-r to-black from-transparent absolute right-0 bottom-0 z-20"></div>
      <img src={route} alt="" className="left-[0] top-0 absolute w-[1440px]" />
      <div
        className={clsx(
          "absolute  cursor-pointer hover:animate-float-up-down left-[324px] top-[92px]"
        )}
      >
        <img
          src={routeDetail?.img}
          alt=""
          className="w-[201px]"
          style={{ filter: "drop-shadow(0 20px 20px rgba(0, 0, 0, 0.6))" }}
        />
      </div>
      <img
        src={shine}
        alt=""
        className="flex-shrink-0 h-auto absolute -top-[600px] -right-[300px]"
      />
      <div className="absolute right-[200px] w-fit flex flex-col items-center top-[150px]">
        <h1 className="text-[76px] leading-[1] font-DMSansBold font-bold gradient-text">
          {eventDetail?.title}
        </h1>
        <div className="flex gap-12 items-center mt-8">
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-[16px] font-DMSansMedium font-medium leading-[1] text-[#D9D9D9]">
              <span>Prize</span>
              <span>Pool</span>
            </div>
            <span className="text-[40px] font-bold leading-[1.36] font-DMSansBold gradient-text">
              ${eventDetail?.prizeUsd}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-[16px] font-DMSansMedium font-medium leading-[1] text-[#D9D9D9]">
              <span>Start</span>
              <span>Date</span>
            </div>
            <span className="text-[40px] font-bold leading-[1.36] font-DMSansBold gradient-text">
              {eventDetail?.startDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
