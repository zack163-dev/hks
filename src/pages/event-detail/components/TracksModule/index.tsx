import clsx from "clsx";
import profile from "@/assets/profile.svg";

interface ITracksModuleProps {
  className?: string;
}

interface ITrackData {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  partners: number;
}

const tracksData: ITrackData[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Conduct multi-dimensional blockchain address investigationsrecognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 12,
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    description:
      "Conduct multi-dimensional blockchain address investigationsrecognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 6,
  },
];
export default function TracksModule(props?: ITracksModuleProps) {
  const { className } = props || {};
  return (
    <div className={clsx("w-[958px] mx-auto", className)}>
      <h2 className="gradient-text text-[24px] leading-[1.36] font-kronaOne">
        TRACKS
      </h2>
      <div className="mt-9 grid grid-cols-3 gap-x-8 gap-y-8">
        {tracksData.map((track) => {
          return (
            <div
              className="bg-[rgba(255_255_255_/_0.08)] shadow-[0px_3.44px_8.6px_0px_rgba(0,0,0,0.1)] px-6 py-4 rounded-[14.61px]"
              key={track.id}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[18px] leading-[20.63px] font-medium text-white truncate">
                  {track.title}
                </span>
                <div className="items-center flex gap-1">
                  <img src={profile} alt="" className="w-3 h-3" />
                  <span className="text-[12px] leading-[20.63px] text-[#B3B3B3]">
                    {track.partners}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex gap-1 items-center">
                {track.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[11px] leading-[16px] p-1 rounded-[6px] bg-[#373737] text-white"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 text-[12px] leading-4 text-[#7C7C7C] line-clamp-4">
                {track.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
