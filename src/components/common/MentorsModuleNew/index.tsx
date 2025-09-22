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
  author: string;
  key: string | number;
}

const mentorsList: IMentor[] = [
  {
    key: 1,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 2,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 3,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 4,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 5,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 6,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 7,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
  {
    key: 8,
    name: "Naina Raisinghani",
    image: judges,
    intro: "Senior Product Manager",
    author: "Google DeepMind",
  },
];

export default function MentorsModule(props?: IMentorsModuleProps) {
  const { className, title } = props ?? {};
  return (
    <div
      className={clsx(
        "w-[916px] mx-auto flex flex-col items-center",
        className
      )}
    >
      <div className="text-[18px] leading-[1.36] font-kronaOne text-white">
        {title ?? "MENTORS"}
      </div>
      <div className="w-12 h-1 gradient-bg mt-1"></div>
      <div className="grid grid-cols-4 mt-8 gap-x-[17.3px] gap-y-6">
        {mentorsList.map((item) => {
          return (
            <div
              className="flex flex-col items-center px-8 py-6 rounded-[14.6px] object-cover bg-[rgba(255_255_255_/_0.08)] shadow-[0px_3.44px_8.6px_0px_rgba(0,0,0,0.1)]"
              key={item.key}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[60px] h-[60px] rounded-full"
              />
              <span className="text-white text-[16px] leading-[20.63px] mt-4 truncate">
                {item.name}
              </span>
              <span className="text-[#B3B3B3] text-[14px] leading-[20.63px] mt-[6px]">
                {item.intro}
              </span>
              <span className="text-[#B3B3B3] text-[14px] leading-[20.63px]">
                @{item.author}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
