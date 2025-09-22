import { useParams } from "react-router-dom";
import JudgesModule from "./components/JudgesModule";
import ScheduleModule from "./components/ScheduleModule";
import StepsModule from "./components/StepsModule";
import TracksModule from "./components/TracksModule";
import MentorsModuleNew from "../../components/common/MentorsModuleNew";
import IntroModule from "./components/IntroModule";
import ShowCaseModule from "./components/ShowCaseModule";
import VideosModule from "./components/VideosModule";
import { routeMap } from "@/config";
import { ProgramStatus } from "@/types";
import { useMemo } from "react";
import PartnersModule from "@/components/common/PartnersModule";
import mask2 from "@/assets/shadow2.png";

export default function EventDetailPage() {
  const { id } = useParams();

  const isHistoryData = useMemo(() => {
    return (
      routeMap.find((item) => item.id === id)?.status ===
      ProgramStatus.Completed
    );
  }, [id]);

  return (
    <div className="relative">
      {!isHistoryData && (
        <img
          src={mask2}
          alt=""
          className="absolute left-[23px] top-[1051px] w-[1927px] h-[2556px]"
        />
      )}
      <IntroModule id={id || ""} isHistoryData={isHistoryData} />
      <StepsModule id={id || ""} />
      {isHistoryData && (
        <>
          <ShowCaseModule className="mt-[82px]" />
          <VideosModule className="mt-[135px]" />
          <PartnersModule className="mt-[184px]" />
        </>
      )}
      {!isHistoryData && (
        <>
          <ScheduleModule className="mt-[112px]" id={id || ""} />
          <TracksModule className="mt-[138px]" />
          <JudgesModule className="mt-[126px]" />
        </>
      )}
      <MentorsModuleNew
        className="mt-[164px] mb-[100px]"
        title={isHistoryData ? "MENTORS" : "PARTNERS"}
      />
    </div>
  );
}
