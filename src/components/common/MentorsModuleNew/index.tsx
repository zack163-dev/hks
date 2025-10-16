import clsx from "clsx";
import judges from "@/assets/judges.png";

interface IMentorsModuleProps {
  className?: string;
  title?: string;
}

interface IMentor {
  name: string;
  image: string;
  intro: string;
  key: string | number;
}

const mentorsList: IMentor[] = [
  {
    key: 1,
    name: "Yuxi Li",
    image: judges,
    intro: "PhD in Computer Science at University of Alberta",
  },
  {
    key: 2,
    name: "Kumar Shridhar",
    image: judges,
    intro: "PHD @ ETH Zürich in Machine Learning",
  },
  {
    key: 3,
    name: "Sabina",
    image: judges,
    intro: "Professor in University of California Berkeley, Amazon Scholar",
  },
  {
    key: 4,
    name: "Kumar Shridhar",
    image: judges,
    intro: "Master of International Policy @ Stanford FSI",
  },
];

export default function MentorsModule(props?: IMentorsModuleProps) {
  const { className, title } = props ?? {};
  return (
    <div
      className={clsx(
        "w-[1152px] mx-auto flex flex-col items-center",
        className
      )}
    >
      <div className="text-[64px] leading-[1] font-DMSansBold font-bold gradient-text">
        {title ?? "MENTORS"}
      </div>
      <div className="grid grid-cols-4 mt-12 gap-6">
        {mentorsList.map((item) => {
          return (
            <div className="gradient-bg-2 p-[1px] rounded-[10px]">
              <div className="bg-black rounded-[10px]">
                <div
                  className="flex flex-col h-[291px] gap-4 items-center text-center p-8 rounded-[10px] bg-gradient-to-b from-[rgba(70,70,70,0.5)] via-[rgba(70,70,70,0.3)] to-[rgba(70,70,70,0.2)] shadow-[inset_0_0_10px_0_rgba(0,0,0,0.25)] backdrop-blur-[14.7px]"
                  key={item.key}
                >
                  <div className="w-[100px] h-[100px] rounded-full bg-[#7C7C7C]" />
                  <span className="text-[#D9D9D9] leading-[1] text-[24px] font-DMSansBold font-bold truncate">
                    {item.name}
                  </span>
                  <span className="text-[#D9D9D9] text-[16px] leading-[1.3] font-DMSansMedium font-medium line-clamp-3">
                    {item.intro}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
