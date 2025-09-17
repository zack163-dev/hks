import clsx from "clsx";
import text1 from "@/assets/steps/text-1.svg";
import text2 from "@/assets/steps/text-2.svg";
import text3 from "@/assets/steps/text-3.svg";
import arrowDown from "@/assets/arrow-down.svg";
import { useMemo } from "react";
import { routeMap } from "@/config";
import { ProgramStatus } from "@/types";

interface IStepsModuleProps {
  className?: string;
  id: string;
}

interface ISteps {
  id: number;
  title: string;
  img: string;
}

const steps: ISteps[] = [
  {
    id: 1,
    title: "Step1",
    img: text1,
  },
  {
    id: 2,
    title: "Step2",
    img: text2,
  },
  {
    id: 3,
    title: "Step3",
    img: text3,
  },
];

export default function StepsModule(props?: IStepsModuleProps) {
  const { className, id } = props || {};

  const currentRoute = useMemo(() => {
    return routeMap.find((item) => item.id === id);
  }, [id]);

  if (currentRoute?.status === ProgramStatus.Completed) {
    return (
      <div className="flex justify-center items-center gap-1 flex-col">
        <span className="text-white text-[20px] leading-[20.63px]">
          Event Date
        </span>
        <span className="text-[#B3B3B3] text-[16px] leading-[20.63px]">
          April 20-22, 2025
        </span>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex items-center gap-[128px] justify-center",
        className
      )}
    >
      {steps.map((step) => {
        return (
          <div key={step.id} className="flex flex-col items-center gap-4">
            <img src={step.img} alt={step.title} className="h-[26px]" />
            <div className="flex items-center gap-1">
              <span className="text-[#B3B3B3] text-[20px] leading-[20.63px]">
                {step.title}
              </span>
              <img src={arrowDown} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
