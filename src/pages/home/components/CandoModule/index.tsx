import clsx from "clsx";
import doIcon1 from "@/assets/cando/1.svg";
import doIcon2 from "@/assets/cando/2.svg";
import doIcon3 from "@/assets/cando/3.svg";

interface ICandoModuleProps {
  className?: string;
}

const doList: { icon: string; text: string }[] = [
  {
    icon: doIcon1,
    text: "Prototype multi-agent systems in hours, not weeks.",
  },
  {
    icon: doIcon2,
    text: "Blend Agents+ Blockchain, Agents+ AI Infra, and beyond.",
  },
  {
    icon: doIcon3,
    text: "Turn bold concepts into production-ready demos.",
  },
];

export default function CandoModule(props: ICandoModuleProps) {
  const { className } = props;
  return (
    <div className={clsx("flex flex-col gap-[48px] mx-auto", className)}>
      <h3 className="text-[64px] leading-[1] font-DMSansBold font-bold gradient-text text-center">
        What You Can Do
      </h3>
      <div className="grid grid-cols-3 gap-5 w-[955px] mx-auto">
        {doList.map((item, index) => {
          return (
            <div key={index} className="gradient-bg-2 rounded-[10px] p-[1px]">
              <div className="w-full h-full bg-black rounded-[10px]">
                <div className="rounded-[10px] p-[39px] pb-[72px] flex-shrink-0 cursor-pointer bg-gradient-to-b from-[rgba(37,111,65,0.5)] to-[rgba(2,4,2,0.5)] backdrop-blur-[10px]">
                  <img src={item.icon} alt="" className="w-8 h-8" />
                  <h4 className="text-[24px] leading-[1.3] text-[#D9D9D9] mt-4 tracking-normal">
                    {item.text}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[16px] leading-[1.3] text-[#D9D9D9] text-center">
        <p>This is more than a hackathon,</p>
        <p>it’s a chance to spark the next wave of the internet.</p>
        <p>Join us. Scoop the future.</p>
      </div>
    </div>
  );
}
