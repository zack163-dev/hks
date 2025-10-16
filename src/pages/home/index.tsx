import MentorsModuleNew from "../../components/common/MentorsModuleNew";
import PartnersModule from "@/components/common/PartnersModule";
import PhaseModule from "./components/PhaseModule";
import PrizeModule from "./components/PrizeModule";
import RegisterModule from "./components/RegisterModule";
import SitesModule from "./components/SitesModule";
import AIModule from "./components/AIModule";
import CandoModule from "./components/CandoModule";
import WorkingModule from "./components/WorkingModule";

export default function HomePage() {
  return (
    <div>
      <RegisterModule className="mt-[80px]" />
      <SitesModule className="mt-[72px]" />
      <AIModule className="mt-[178px]" />
      <CandoModule className="mt-[164px]" />
      <PrizeModule className="mt-[144px]" />
      <WorkingModule className="mt-[160px]" />
      <PartnersModule className="mt-[144px]" />
      <PhaseModule className="mt-[138px]" />
      <MentorsModuleNew className="mt-[160px] mb-[320px]" />
    </div>
  );
}
