import clsx from "clsx";

interface IMentorsModuleProps {
  className?: string;
  title?: string;
}

interface IMentor {
  name: string;
  image: string;
}

const mentorsList: IMentor[] = [
  {
    name: "Mentor 1",
    image: "",
  },
  {
    name: "Mentor 2",
    image: "",
  },
  {
    name: "Mentor 3",
    image: "",
  },
  {
    name: "Mentor 4",
    image: "",
  },
  {
    name: "Mentor 5",
    image: "",
  },
  {
    name: "Mentor 6",
    image: "",
  },
];

export default function MentorsModule(props?: IMentorsModuleProps) {
  const { className, title } = props ?? {};
  return (
    <div
      className={clsx("w-fit mx-auto flex flex-col items-center", className)}
    >
      <div className="text-[18px] leading-[1.36] font-kronaOne text-white">
        {title ?? "MENTORS"}
      </div>
      <div className="w-12 h-1 gradient-bg mt-1"></div>
      <div className="flex mt-8 gap-8">
        {mentorsList.map((_, index) => {
          return (
            <div className="flex items-center gap-8">
              <div
                className="rounded-full bg-[#7C7C7C] w-8 h-8"
                key={index}
              ></div>
              {index !== mentorsList.length - 1 && (
                <div className="w-[1px] h-7 bg-[#7C7C7C]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
