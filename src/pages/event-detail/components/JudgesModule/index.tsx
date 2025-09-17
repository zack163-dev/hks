import TitleWithLine from "@/components/common/TitleWithLine";
import clsx from "clsx";
import judges from "@/assets/judges.png";

interface IJudgesModuleProps {
  className?: string;
}

interface IJudges {
  id: number;
  name: string;
  desc: string;
  avatar: string;
}

const data: IJudges[] = [
  {
    id: 1,
    avatar: judges,
    name: "Sarah Chen",
    desc: "CTO, TechFlow",
  },
  {
    id: 2,
    avatar: judges,
    name: "Sarah Chen",
    desc: "CTO, TechFlow",
  },
  {
    id: 3,
    avatar: judges,
    name: "Sarah Chen",
    desc: "CTO, TechFlow",
  },
  {
    id: 4,
    avatar: judges,
    name: "Sarah Chen",
    desc: "CTO, TechFlow",
  },
];

export default function JudgesModule(props?: IJudgesModuleProps) {
  const { className } = props || {};
  return (
    <div
      className={clsx(
        "w-fit mx-auto justify-center flex flex-col items-center",
        className
      )}
    >
      <TitleWithLine title="Judges & Mentors" />
      <div className="flex items-center gap-[116px] mt-[80px]">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <img
                src={item.avatar}
                alt=""
                className="w-[86px] h-[86px] rounded-full"
              />
              <span className="mt-2 text-[18px] leading-[20.63px] text-white">
                {item.name}
              </span>
              <span className="text-[14px] leading-[20.63px] text-[#B3B3B3]">
                {item.desc}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
