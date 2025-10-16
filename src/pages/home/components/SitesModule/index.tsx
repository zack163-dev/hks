import locationIcon from "@/assets/location.svg";
import sitesMap from "@/assets/sites-map.png";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { routeMap } from "@/config";
import { ProgramStatus, type IRouteMap } from "@/types";
import spoonLogo from "@/assets/spoon.svg";
import { useMemo } from "react";

interface ISitesModuleProps {
  className?: string;
}

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

  const sites = useMemo(() => {
    const inprogress = routeMap.filter(
      (i) => i.status === ProgramStatus.InProgress
    );
    const completed = routeMap.filter(
      (i) => i.status === ProgramStatus.Completed
    );
    const other = routeMap.filter(
      (i) =>
        i.status !== ProgramStatus.InProgress &&
        i.status !== ProgramStatus.Completed &&
        i.status !== ProgramStatus.NotExits
    );
    return [...inprogress, ...completed, ...other];
  }, []);

  const handleClick = (id: number | string) => {
    nav(`/event-detail/${id}`);
  };

  const isInteractive = (status: number) => {
    return (
      status === ProgramStatus.InProgress || status === ProgramStatus.Completed
    );
  };

  return (
    <div className={clsx(className)}>
      <div className="relative px-[80.39px] mx-auto w-[1440px]">
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
              <div
                key={index}
                onClick={() => {
                  if (
                    item.status === ProgramStatus.InProgress ||
                    item.status === ProgramStatus.Completed
                  ) {
                    handleClick(item.id);
                  }
                }}
              >
                {item.img && (
                  <div
                    className="cursor-pointer hover:animate-float-up-down absolute z-10"
                    style={{
                      left: `${foodLeft}px`,
                      top: `${foodTop - 16}px`,
                    }}
                  >
                    {/* Fixed height container for label to maintain consistent positioning */}
                    <div className="h-[32px] flex items-center justify-center">
                      {(item.status === ProgramStatus.InProgress ||
                        item.status === ProgramStatus.Completed) && (
                        <div
                          className={clsx(
                            "mx-auto text-[12px] w-fit text-center leading-[1.36] font-kronaOne px-4 py-2 rounded-[24px] z-5",
                            item.status === ProgramStatus.Completed
                              ? "text-[#6e6e6e]"
                              : "text-black",
                            styles.countryLabel
                          )}
                        >
                          <div
                            className={clsx(styles.shadow, styles.shadow1)}
                          ></div>
                          <div
                            className={clsx(styles.shadow, styles.shadow2)}
                          ></div>
                          <div
                            className={clsx(styles.shadow, styles.shadow3)}
                          ></div>
                          <div
                            className={clsx(styles.shadow, styles.shadow4)}
                          ></div>
                          <div
                            className={clsx(styles.shadow, styles.shadow5)}
                          ></div>
                          {getStatusText(item)}
                        </div>
                      )}
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
      </div>
      <div className="flex items-center gap-5 justify-center mt-[43.7px]">
        <img src={locationIcon} alt="" className="w-[34px] h-[44px]" />
        <span className="gradient-text text-[64px] leading-[1] font-DMSansBold font-bold">
          Hackathon Sites
        </span>
      </div>
      <div className="mt-[48px] text-[24px] leading-[1.3] text-center text-[#D9D9D9]">
        Discover regional hubs of innovation shaping the future of AI.
      </div>
      <div
        className="pl-[244px] mt-10 overflow-x-auto"
        id="sites-cards-container"
      >
        <div className="space-x-5 flex flex-nowrap w-full">
          {sites.map((site, index) => {
            return (
              <div
                className={clsx(
                  "w-[305px] h-[400px] rounded-[10px] p-[1px] gradient-bg-2 flex-shrink-0",
                  isInteractive(site.status)
                    ? "cursor-pointer group"
                    : "cursor-not-allowed"
                )}
                key={index}
              >
                <div className="w-full h-full bg-black rounded-[10px]">
                  <div
                    onClick={() => {
                      if (isInteractive(site.status)) {
                        nav(`/event-detail/${site.id}`);
                      }
                    }}
                    className={clsx(
                      "relative w-full h-full rounded-[10px] bg-gradient-to-b from-[#46464680] via-[#4646464D] to-[#46464633] [box-shadow:0px_7px_20px_0px_rgba(88,255,152,0.2)_inset,0px_0px_10px_0px_rgba(0,0,0,0.25)_inset] backdrop-blur-[14.7px] px-[30px] pt-[30px]",
                      isInteractive(site.status)
                        ? "group-hover:text-white hover:shadow-[inset_0px_0px_20px_5px_rgba(88,255,152,0.5)]"
                        : ""
                    )}
                  >
                    <div
                      className={clsx(
                        "text-[32px] leading-[1] font-bold font-DMSansBold text-[#D9D9D9]",
                        isInteractive(site.status)
                          ? "group-hover:text-white"
                          : ""
                      )}
                    >
                      {site.country}
                    </div>
                    <div className="flex mt-2 gap-2 items-center">
                      <span
                        className={clsx(
                          "text-[24px] leading-[1] text-[#BEBEBE]",
                          isInteractive(site.status)
                            ? "group-hover:text-white"
                            : ""
                        )}
                      >
                        Explore
                      </span>
                      <img
                        src={spoonLogo}
                        alt=""
                        className="h-[6.42px] w-[28.14px]"
                      />
                    </div>
                    <img
                      src={site.img}
                      alt=""
                      className="w-[230px] h-[230px] absolute bottom-0 right-0 object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
