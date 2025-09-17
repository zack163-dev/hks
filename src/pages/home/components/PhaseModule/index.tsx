import clsx from "clsx";
import flag from "@/assets/flag.svg";
import spoon1 from "@/assets/spoon-1.svg";
import spoon2 from "@/assets/spoon-2.svg";
import spoon3 from "@/assets/spoon-3.svg";

interface IPhaseModuleProps {
  className?: string;
}

interface IPhaseData {
  labelImg: string;
  title: string;
  description: string;
}

const dataList: IPhaseData[] = [
  {
    labelImg: spoon1,
    title: "Registration",
    description: "Sign up to secure your spot and receive event details.",
  },
  {
    labelImg: spoon2,
    title: "On-Site work Shop",
    description:
      "Join hands-on sessions led by experts to build skills and prepare for the hackathon.",
  },
  {
    labelImg: spoon3,
    title: "On-Site hackathon",
    description:
      "Collaborate with your team, turn ideas into prototypes, and compete for prizes.",
  },
];

export default function PhaseModule(props?: IPhaseModuleProps) {
  const { className } = props || {};
  return (
    <div
      className={clsx("w-fit mx-auto flex flex-col items-center", className)}
    >
      <div className="flex items-center gap-2">
        <img src={flag} alt="phase" className="w-8 h-8" />
        <span className="gradient-text text-[24px] leading-[1.36] font-kronaOne">
          PHASE
        </span>
      </div>
      <div className="grid grid-col gap-[56px] mt-6">
        {dataList.map((item, index) => {
          return (
            <div className="flex gap-8 items-center" key={index}>
              <img src={item.labelImg} alt={item.title} />
              <div className="flex flex-col gap-1">
                <span className="text-white text-[18px] leading-[1.36] font-kronaOne">
                  {item.title}
                </span>
                <span className="text-[#B3B3B3] text-[14px] leading-[1.36]">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
