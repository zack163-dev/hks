import { useParams } from "react-router-dom";
import JudgesModule from "./components/JudgesModule";
import ScheduleModule from "./components/ScheduleModule";
import StepsModule from "./components/StepsModule";
import TracksModule from "./components/TracksModule";
import MentorsModule from "../../components/common/MentorsModule";
import IntroModule from "./components/IntroModule";
import ShowCaseModule from "./components/ShowCaseModule";
import VideosModule from "./components/VideosModule";
import { routeMap } from "@/config";
import { ProgramStatus } from "@/types";
import { useMemo } from "react";
import PartnersModule from "@/components/common/PartnersModule";

export default function EventDetailPage() {
  const { id } = useParams();

  const isHistoryData = useMemo(() => {
    return (
      routeMap.find((item) => item.id === id)?.status ===
      ProgramStatus.Completed
    );
  }, [id]);

  return (
    <div>
      <IntroModule id={id || ""} />
      <StepsModule id={id || ""} />
      {isHistoryData && (
        <>
          <ShowCaseModule />
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
      <MentorsModule
        className="mt-[164px] mb-[100px]"
        title={isHistoryData ? "MENTORS" : "PARTNERS"}
      />
    </div>
  );
}
