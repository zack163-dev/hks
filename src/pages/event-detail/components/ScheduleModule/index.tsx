import { scheduleData as allScheduleData } from "@/config";
import clsx from "clsx";
import { useMemo, useState } from "react";
// import scheduleLeft from "@/assets/schedule-left.png";

interface IScheduleModuleProps {
  className?: string;
  id: string;
}

const tabs = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "On-Site",
    value: "onSite",
  },
];

export default function ScheduleModule(props?: IScheduleModuleProps) {
  const { className, id } = props || {};
  const [curTab, setCurTab] = useState<"online" | "onSite">("onSite");
  const [hoveredTab, setHoveredTab] = useState<"online" | "onSite" | null>(
    null
  );

  const scheduleData = useMemo(() => {
    return allScheduleData.find((item) => item.id === id)?.data;
  }, [id]);

  const curList = useMemo(() => {
    return curTab === "online" ? scheduleData?.online : scheduleData?.onSite;
  }, [curTab, scheduleData?.online, scheduleData?.onSite]);

  const hasContent = useMemo(() => {
    return {
      online: scheduleData?.online && scheduleData.online.length > 0,
      onSite: scheduleData?.onSite && scheduleData.onSite.length > 0,
    };
  }, [scheduleData?.online, scheduleData?.onSite]);

  return (
    <div className="w-full relative">
      {/* <img
        src={scheduleLeft}
        className="absolute -top-[62px] left-0 w-[398.7px] h-auto"
      /> */}
      <div className={clsx("w-[926px] mx-auto flex flex-col", className)}>
        <h2 className="text-[32px] leading-[1] font-DMSansBold font-bold text-[#D9D9D9]">
          SCHEDULE
        </h2>
        <div className="w-full gradient-border-2 border-y-[1px] border-x-0 h-[61px] flex items-center mt-12">
          {tabs.map((item) => {
            const isActive = curTab === item.value;
            const isHovered = hoveredTab === item.value;
            const showEffect = isActive || isHovered;
            const tabHasContent =
              hasContent[item.value as keyof typeof hasContent];
            const displayText =
              isHovered && !tabHasContent ? "Coming Soon" : item.label;

            return (
              <div
                key={item.value}
                className={clsx(
                  "relative w-[218px] h-full flex items-center justify-center",
                  tabHasContent ? "cursor-pointer" : "cursor-not-allowed"
                )}
                onClick={() => {
                  if (tabHasContent) {
                    setCurTab(item.value as "online" | "onSite");
                  }
                }}
                onMouseEnter={() =>
                  setHoveredTab(item.value as "online" | "onSite")
                }
                onMouseLeave={() => setHoveredTab(null)}
              >
                <span className="text-[24px] font-DMSansBold font-bold text-[#D9D9D9]">
                  {displayText}
                </span>
                {showEffect && (
                  <div className="absolute bottom-0 left-0 w-full">
                    <div
                      className="absolute bottom-0 left-0 w-full h-[26px] transition-opacity duration-300 opacity-100"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(88, 255, 152, 0) 0%, rgba(88, 255, 152, 0.25) 100%)",
                      }}
                    ></div>
                    <div className="w-full h-[1px] bg-[#58FF98]"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {curList?.length === 0 ? (
          <div className="w-full flex items-center justify-center h-[300px]">
            <span className="text-[16px] leading-[1.5] text-[#AEAEAE]">
              Coming soon ~
            </span>
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 gap-x-8 gap-y-[56px] mt-12">
            {curList?.map((item, index) => {
              return (
                <div key={index} className="w-full h-full flex flex-col gap-4">
                  <span className="text-[32px] font-DMSansMedium font-medium text-[#AEAEAE]">
                    {item.timeRange}
                  </span>
                  <div className="w-full h-[1px] bg-[rgba(88_255_152_/_0.75)]"></div>
                  <span className="text-[16px] leading-[1.5] text-[#AEAEAE]">
                    {item.content}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
