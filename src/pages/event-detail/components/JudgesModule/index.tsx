import clsx from "clsx";
// import judges from "@/assets/judges.png";
import judgesRight from "@/assets/judges-right.png";
interface IJudgesModuleProps {
  className?: string;
}

// interface IJudges {
//   id: number;
//   name: string;
//   desc: string;
//   avatar: string;
// }

// const data: IJudges[] = [
//   {
//     id: 1,
//     avatar: judges,
//     name: "Yuxi Li",
//     desc: "PhD in Computer Science at University of Alberta.",
//   },
//   {
//     id: 2,
//     avatar: judges,
//     name: "Yuxi Li",
//     desc: "PhD in Computer Science at University of Alberta.",
//   },
//   {
//     id: 3,
//     avatar: judges,
//     name: "Yuxi Li",
//     desc: "PhD in Computer Science at University of Alberta.",
//   },
//   {
//     id: 4,
//     avatar: judges,
//     name: "Yuxi Li",
//     desc: "PhD in Computer Science at University of Alberta.",
//   },
//   {
//     id: 5,
//     avatar: judges,
//     name: "Yuxi Li",
//     desc: "PhD in Computer Science at University of Alberta.",
//   },
// ];

export default function JudgesModule(props?: IJudgesModuleProps) {
  const { className } = props || {};
  return (
    <div
      className={clsx(
        "pb-[452px] relative border-b border-transparent [border-image:linear-gradient(90deg,rgba(47,135,81,0)_0%,#1D5432_50%,rgba(65,186,111,0)_100%)_1]",
        className
      )}
    >
      <img
        src={judgesRight}
        className="absolute bottom-0 right-0 w-[398.7px] h-auto"
      />
      <div className="w-[920px] mx-auto rounded-[15px] px-[230px] h-[264px] text-center flex items-center justify-center text-[#D9D9D9] text-[32px] leading-[1.3] bg-[url('@/assets/judges-bg.png')] bg-cover bg-center">
        Judges, Partners, and Sponsors - To Be Announced
      </div>
      {/* <div className="flex flex-col gap-12 w-[918.36px] mx-auto">
        <h3 className="text-[32px] leading-[1] font-DMSansBold font-bold text-white">
          JUDGES
        </h3>
        <div className="grid grid-cols-5 gap-7">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="h-[162px] rounded-[10px] bg-[#1F3725]"></div>
                <span className="mt-6 text-[16px] leading-[1] font-DMSansBold font-bold text-[#D9D9D9] truncate">
                  {item.name}
                </span>
                <span className="text-[12px] leading-[1.3] font-DMSansMedium font-medium text-[#848484] line-clamp-2">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
