import clsx from "clsx";

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
    title: "Onchain Workflows & Autonomous Execution",
    description:
      "Conduct multi-dimensional blockchain address investigationsrecognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 2,
    title: "Social Simulations & Gaming Layers",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 3,
    title: "Agent-Hosting Infrastructure & Security",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 156,
  },
  {
    id: 4,
    title: "DeFi / NFT / Governance Intelligence",
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.Rug pull blacklist verification; Celebrity wallet recognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 12,
  },
  {
    id: 5,
    title: "BioTech",
    description:
      "Conduct multi-dimensional blockchain address investigationsrecognition.",
    tags: ["Blockchain", "Dex", "Governance"],
    partners: 6,
  },
];
export default function TracksModule(props?: ITracksModuleProps) {
  const { className } = props || {};
  return (
    <div className={clsx("w-[922px] mx-auto flex flex-col gap-12", className)}>
      <h2 className="text-white text-[32px] leading-[1] font-DMSansBold font-bold">
        TRACKS
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {tracksData.map((track) => {
          return (
            <div className="rounded-[10px] h-[180.5px] px-10 text-[20px] leading-[1.3] font-DMSansMedium font-medium text-[#AEAEAE] flex items-center justify-center bg-[url('@/assets/track-bg.png')] bg-no-repeat bg-cover bg-center text-center">
              {track.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
