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
      <IntroModule id={id || ""} />
      <StepsModule id={id || ""} className="mt-[61px]" />
      {isHistoryData && (
        <>
          <ShowCaseModule className="mt-[82px]" />
          <VideosModule className="mt-[135px]" />
          <PartnersModule className="mt-[184px]" />
          <MentorsModuleNew
            className="mt-[164px] mb-[100px]"
            title={"MENTORS"}
          />
        </>
      )}
      {!isHistoryData && (
        <>
          <ScheduleModule className="mt-[134px]" id={id || ""} />
          <TracksModule className="mt-[140px]" id={id || ""} />
          <JudgesModule className="mt-[160px] mb-[83px]" />
        </>
      )}
    </div>
  );
}
