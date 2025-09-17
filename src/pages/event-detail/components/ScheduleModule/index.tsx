import { scheduleData as allScheduleData } from "@/config";
import { formatDateRange, monthShort } from "@/utils";
import clsx from "clsx";
import { useMemo, useState } from "react";

interface IScheduleModuleProps {
  className?: string;
  id: string;
}

const weekdayShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

const formatTimeRange = (start: number, end: number) => {
  const s = new Date(start);
  const e = new Date(end);
  const meridiem = s.getHours() < 12 ? "AM" : "PM"; // 仅根据开始时间判断
  const sStr = `${pad2(s.getHours())}:${pad2(s.getMinutes())}`;
  const eStr = `${pad2(e.getHours())}:${pad2(e.getMinutes())}`;
  return `${sStr} - ${eStr} ${meridiem}`;
};

const diffMinutes = (start: number, end: number) =>
  Math.round((end - start) / 60000);

export default function ScheduleModule(props?: IScheduleModuleProps) {
  const { className, id } = props || {};
  const [curTab, setCurTab] = useState(0);

  const scheduleData = useMemo(() => {
    return allScheduleData.find((item) => item.id === id)?.data;
  }, [id]);

  const curScheduleData = useMemo(() => {
    return scheduleData?.[curTab];
  }, [curTab, scheduleData]);

  const formatTabLabel = (dateTs: number) => {
    const d = new Date(dateTs);
    const wd = weekdayShort[d.getDay()];
    const mon = monthShort[d.getMonth()].toUpperCase();
    return `${wd}. ${mon} ${d.getDate()}`;
  };

  return (
    <div className={clsx("w-[958px] mx-auto", className)}>
      <div className="flex items-center justify-between text-[24px] leading-[1.36] font-kronaOne">
        <span className="gradient-text">SCHEDULE</span>
        <span className="text-[rgba(255_255_255_/_0.3)]">
          {formatDateRange(scheduleData)}
        </span>
      </div>
      <div className="mt-[42px]">
        <div className="flex items-center gap-4 font-semibold text-[18px] leading-[20.63px]">
          {scheduleData?.map((d, idx) => {
            const dateTs = d.dayData[0]?.date;
            const active = idx === curTab;
            return (
              <div
                key={idx}
                className={clsx(
                  "px-6 py-3 rounded-[50px] gap-4 flex items-center cursor-pointer",
                  active ? "gradient-bg text-black" : "bg-[#1a1a1a] text-white"
                )}
                onClick={() => setCurTab(idx)}
              >
                <span>{`Day ${idx + 1}`}</span>
                <span className="font-medium text-[16px]">
                  {formatTabLabel(dateTs)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 gradient-bg-1 p-[1px] rounded-2xl overflow-hidden">
        {curScheduleData?.dayData.map((item, idx) => (
          <div key={idx}>
            <div
              className={clsx(
                "bg-black w-full",
                idx == 0
                  ? "rounded-t-2xl"
                  : idx === (curScheduleData?.dayData.length ?? 0) - 1
                    ? "rounded-b-2xl"
                    : "",
                idx !== (curScheduleData?.dayData.length ?? 0) - 1
                  ? "border-b-[1px] border-solid border-[rgba(255_255_255_/_0.3)]"
                  : "",
                curScheduleData?.dayData.length == 1 ? "rounded-2xl" : ""
              )}
            >
              <div className="flex px-8 py-6 items-center gap-8">
                <div className="w-[162px] flex flex-col gap-4">
                  <span className="text-[#8CF6A6] text-[20px] leading-[20.63px] flex-shrink-0">
                    {formatTimeRange(item.startTime, item.endTime)}
                  </span>
                  <span className="text-[14px] leading-[20.63px] text-[#B3B3B3]">
                    {diffMinutes(item.startTime, item.endTime)} minutes
                  </span>
                </div>
                <div className="w-[1px] h-[58px] bg-[rgba(255_255_255_/_0.3)]"></div>
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-[20px] leading-[1.36] text-white font-kronaOne">
                    {item.content}
                  </span>
                  {item.subContent ? (
                    <span className="text-[14px] leading-[1.36] text-[#B3B3B3]">
                      {item.subContent}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
