import clsx from "clsx";
import { tracksData } from "@/config";
interface ITracksModuleProps {
  className?: string;
  id: string | number;
}

export default function TracksModule(props?: ITracksModuleProps) {
  const { className, id } = props || {};
  const track = tracksData.find((track) => track.id === id);
  if (!track) return null;
  return (
    <div className={clsx("w-[922px] mx-auto flex flex-col gap-12", className)}>
      <h2 className="text-white text-[32px] leading-[1] font-DMSansBold font-bold">
        TRACKS
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {track.data.map((track) => {
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
