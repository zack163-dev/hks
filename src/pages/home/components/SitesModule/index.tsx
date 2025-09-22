import locationIcon from "@/assets/location.svg";
import sitesMap from "@/assets/sites-map.png";
import mask1 from "@/assets/shadow1.png";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { routeMap } from "@/config";
import { ProgramStatus, type IRouteMap } from "@/types";

interface ISitesModuleProps {
  className?: string;
}

interface Site {
  name: string;
  logo: string;
}

const sites: Site[] = [
  {
    name: "South Korea",
    logo: "🇰🇷",
  },
  {
    name: "Japan",
    logo: "🇯🇵",
  },
  {
    name: "India",
    logo: "🇮🇳",
  },
  {
    name: "China",
    logo: "🇨🇳",
  },
  {
    name: "Russia",
    logo: "🇷🇺",
  },
  {
    name: "United Kingdom",
    logo: "🇬🇧",
  },
  {
    name: "West/east coast in US",
    logo: "🇺🇸",
  },
];

export default function SitesModule(props: ISitesModuleProps) {
  const { className } = props;
  const nav = useNavigate();

  const getStatusText = (item: IRouteMap) => {
    switch (item.status) {
      case ProgramStatus.NotStarted:
        return "COMING SOON";
      case ProgramStatus.InProgress:
        return "ONGOING";
      case ProgramStatus.Completed:
        return "COMPLETED";
      default:
        return "";
    }
  };

  const handleClick = (id: number | string) => () => {
    console.log(id);
    nav(`/event-detail/${id}`);
  };

  return (
    <div className={clsx("relative", className)}>
      <img
        src={mask1}
        alt=""
        className="w-[1501px] h-[633px] left-[23px] -bottom-[199px] absolute"
      />
      <img
        src={sitesMap}
        alt="sitesMap"
        className="w-full object-cover bg-no-repeat"
      />
      {routeMap
        .filter((i) => i.status !== ProgramStatus.NotExits)
        .map((item, index) => {
          const foodLeft = item.left - (80 - 50) / 2;
          const foodTop = item.top - 80 + 22 / 2;
          return (
            <div key={index} onClick={handleClick(item.id)}>
              {item.img && (
                <div
                  className="cursor-pointer hover:animate-float-up-down absolute z-10"
                  style={{
                    left: `${foodLeft}px`,
                    top: `${foodTop - 16}px`,
                  }}
                >
                  <div
                    className={clsx(
                      "mx-auto text-[12px] w-fit text-center leading-[1.36] text-black font-kronaOne px-4 py-2 rounded-[24px] z-5",
                      styles.countryLabel
                    )}
                  >
                    <div className={clsx(styles.shadow, styles.shadow1)}></div>
                    <div className={clsx(styles.shadow, styles.shadow2)}></div>
                    <div className={clsx(styles.shadow, styles.shadow3)}></div>
                    <div className={clsx(styles.shadow, styles.shadow4)}></div>
                    <div className={clsx(styles.shadow, styles.shadow5)}></div>
                    {getStatusText(item)}
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="h-[80px] z-10 -mt-4 relative"
                  />
                </div>
              )}
              <img
                src={item.countryImg}
                alt=""
                style={{
                  left: `${item.left}px`,
                  top: `${item.top}px`,
                }}
                className="w-[50px] h-[22px] rounded-[5.5px] -skew-x-[46deg] absolute origin-center rotate-[10.5deg] z-0"
              />
            </div>
          );
        })}
      <div className="flex items-center gap-2 justify-center mt-[81px]">
        <img src={locationIcon} alt="" className="w-8 h-8" />
        <span className="gradient-text text-[24px] leading-[1.36] font-kronaOne">
          Hackathon Sites
        </span>
      </div>
      <div className="mt-6 mx-auto w-[531px] space-y-3">
        <div className="flex justify-between text-[18px] leading-[20.63px] text-white">
          {sites.slice(0, 4).map((site, index) => {
            return (
              <div className="flex gap-2 items-center" key={index}>
                <span>{site.logo}</span>
                <span>{site.name}</span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-[18px] leading-[20.63px] text-white">
          {sites.slice(4, 7).map((site, index) => {
            return (
              <div className="flex gap-2 items-center" key={index}>
                <span>{site.logo}</span>
                <span>{site.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
