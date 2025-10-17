import clsx from "clsx";
import step1 from "@/assets/steps/text-1.svg";
import step2 from "@/assets/steps/text-2.svg";
import right from "@/assets/right.svg";
import { scheduleData as allScheduleData } from "@/config";
import { useMemo, useState } from "react";

interface IStepsModuleProps {
  className?: string;
  id: string;
}

interface ISteps {
  id: number;
  title: string[];
  img: string;
  url?: string;
}

const steps: ISteps[] = [
  {
    id: 1,
    title: ["ONLINE", "SIGN-UP"],
    img: step1,
  },
  {
    id: 2,
    title: ["ONSITE", "EVENT"],
    img: step2,
  },
];

export default function StepsModule(props?: IStepsModuleProps) {
  const { className, id } = props || {};
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const glareStyle = {
    background: `linear-gradient(-45deg,
      hsla(0,0%,0%,0) 60%,
      hsla(0,0%,100%,0.1) 70%,
      hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `250% 250%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%",
    animation: "glare-sweep 0.6s ease-out",
  };

  const scheduleData = useMemo(() => {
    return allScheduleData.find((item) => item.id === id)?.data;
  }, [id]);

  const eventDetailData = useMemo(() => {
    return allScheduleData.find((item) => item.id === id)?.data;
  }, [id]);

  const stepList = useMemo(() => {
    return steps.map((item) => {
      return {
        ...item,
        time:
          item.id === 1 ? scheduleData?.onlineTime : scheduleData?.onSiteTime,
        url:
          item.id === 1
            ? eventDetailData?.typeformUrl
            : eventDetailData?.lumaUrl,
      };
    });
  }, [
    eventDetailData?.lumaUrl,
    eventDetailData?.typeformUrl,
    scheduleData?.onSiteTime,
    scheduleData?.onlineTime,
  ]);

  return (
    <div className={clsx("flex gap-[30px] justify-center", className)}>
      {stepList.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-[445px] items-start flex-col px-[46px] py-[38px] rounded-[10px] border-[1px] border-[#3B3B3B]"
          >
            <img src={item.img} className="h-[18px] w-auto" />
            <div
              className="flex items-center justify-between w-full mt-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
              onClick={() => {
                if (item.url) {
                  window.open(item.url, "_blank");
                }
              }}
              onMouseEnter={() => setHoveredStep(item.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative flex gap-2">
                {hoveredStep === item.id && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={glareStyle}
                  />
                )}
                {item.title.map((title, index) => {
                  return (
                    <span
                      key={index}
                      className={clsx(
                        "text-[32px] leading-[1] font-DMSansBold font-bold",
                        index === 0 ? "text-[#58ff98]" : "text-[white]"
                      )}
                    >
                      {title}
                    </span>
                  );
                })}
              </div>
              <img src={right} className="w-auto" />
            </div>
            <div className="mt-12 text-[#D9D9D9] text-[24px] leading-[1]">
              {item.time}
            </div>
          </div>
        );
      })}
    </div>
  );
}
