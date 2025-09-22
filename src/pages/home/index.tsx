import MentorsModuleNew from "../../components/common/MentorsModuleNew";
import PartnersModule from "@/components/common/PartnersModule";
import PhaseModule from "./components/PhaseModule";
import PrizeModule from "./components/PrizeModule";
import RegisterModule from "./components/RegisterModule";
import SitesModule from "./components/SitesModule";

export default function HomePage() {
  return (
    <div>
      <RegisterModule className="mt-[43px]" />
      <SitesModule />
      <PrizeModule className="mt-[95px]" />
      <PartnersModule className="mt-[137px]" />
      <PhaseModule className="mt-[110px]" />
      <MentorsModuleNew className="mt-[133px] mb-[101px]" />
    </div>
  );
}
