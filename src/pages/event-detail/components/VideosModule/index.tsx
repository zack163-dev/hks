import clsx from "clsx";
import testVideo from "@/assets/video/test.mp4";

interface IVideosModuleProps {
  className?: string;
}

interface IMedias {
  id: number | string;
  type: "video" | "article";
  mediaUrl?: string;
  title?: string;
  author?: string;
  tags?: string[];
  description?: string;
}

const medias: IMedias[] = [
  {
    id: 1,
    type: "video",
    mediaUrl: testVideo,
  },
  {
    id: 2,
    type: "article",
    title: "AI-Powered Urban Energy",
    author: "Eric88",
    tags: ["Blockchain", "Dex", "Governance"],
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 3,
    type: "video",
    mediaUrl: testVideo,
  },
  {
    id: 4,
    type: "article",
    title: "AI-Powered Urban Energy",
    author: "Eric88",
    tags: ["Blockchain", "Dex", "Governance"],
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 5,
    type: "article",
    title: "AI-Powered Urban Energy",
    author: "Eric88",
    tags: ["Blockchain", "Dex", "Governance"],
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 6,
    type: "video",
    mediaUrl: testVideo,
  },
  {
    id: 7,
    type: "article",
    title: "AI-Powered Urban Energy",
    author: "Eric88",
    tags: ["Blockchain", "Dex", "Governance"],
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.",
  },
  {
    id: 8,
    type: "video",
    mediaUrl: testVideo,
  },
  {
    id: 9,
    type: "article",
    title: "AI-Powered Urban Energy",
    author: "Eric88",
    tags: ["Blockchain", "Dex", "Governance"],
    description:
      "Conduct multi-dimensional blockchain address investigations: Smart Money identification; Token holdings analysis; Rug pull blacklist verification; Celebrity wallet recognition.",
  },
];

export default function VideosModule(props?: IVideosModuleProps) {
  const { className } = props || {};
  return (
    <div className={clsx("w-[1024px] mx-auto", className)}>
      <h3 className="text-[24px] leading-[1.36] font-kronaOne gradient-text">
        Videos & Articles
      </h3>
      <div className="mt-9 grid grid-cols-3 gap-8">
        {medias.map((media) => {
          return media.type === "video" ? (
            <video
              key={media.id}
              src={media.mediaUrl}
              className="h-[180px] rounded-[14.61px]"
              controls
            ></video>
          ) : (
            <div className="h-[180px] rounded-[14.61px] px-6 py-4 bg-[#171717]">
              <h4 className="truncate text-[16px] leading-[20.63px] font-medium text-white">
                {media.title}
              </h4>
              <div className="text-[12px] leading-[20.63px] text-[#7C7C7C]">
                @{media.author}
              </div>
              <div className="mt-1 flex items-center gap-1">
                {media.tags?.map((tag, index) => {
                  return (
                    <div
                      className="text-[11px] leading-[16px] text-white p-1 rounded-[6px] bg-[#373737]"
                      key={index}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 text-[12px] leading-[16px] text-[#7C7C7C] line-clamp-4">
                {media.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
