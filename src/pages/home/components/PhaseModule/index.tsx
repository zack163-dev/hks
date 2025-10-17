import clsx from "clsx";
import spoon from "@/assets/spoon.svg";

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
    labelImg: spoon,
    title: "Registration",
    description: "Sign up to secure your spot and receive event details.",
  },
  {
    labelImg: spoon,
    title: "On-Site work Shop",
    description:
      "Join hands-on sessions led by experts to build skills and prepare for the hackathon.",
  },
  {
    labelImg: spoon,
    title: "On-Site hackathon",
    description:
      "Collaborate with your team, turn ideas into prototypes, and compete for prizes.",
  },
];

export default function PhaseModule(props?: IPhaseModuleProps) {
  const { className } = props || {};
  return (
    <div
      className={clsx(
        "w-fit mx-auto flex flex-col gap-[48px] items-center",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="gradient-text text-[64px] leading-[1] font-DMSansBold font-bold">
          Phase
        </span>
      </div>
      <div className="grid grid-col gap-8">
        {dataList.map((item, index) => {
          return (
            <div className="flex gap-8 items-start text-[#D9D9D9]" key={index}>
              <div className="flex items-center gap-[10px] w-[67px]">
                <img
                  src={item.labelImg}
                  alt={item.title}
                  className="w-[38px] h-auto"
                />
                <span className="text-[32px] font-DMSansBold font-bold leading-[1]">
                  {index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[32px] leading-[1] font-DMSansBold font-bold">
                  {item.title}
                </span>
                <p className="text-[16px] leading-[1.3] font-DMSansMedium font-medium w-[430px]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
