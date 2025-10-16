import LogoLoop from "@/components/common/LogoLoop";
import clsx from "clsx";
import sponsors1 from "@/assets/sponsors/1.svg";
import sponsors2 from "@/assets/sponsors/2.svg";
import sponsors3 from "@/assets/sponsors/3.svg";
import sponsors4 from "@/assets/sponsors/4.svg";
import sponsors5 from "@/assets/sponsors/5.svg";

interface IPartnersModuleProps {
  className?: string;
}

const data = {
  Sponsors: [
    { name: "", img: sponsors1 },
    { name: "", img: sponsors2 },
    { name: "", img: sponsors3 },
    { name: "", img: sponsors4 },
    { name: "", img: sponsors5 },
  ],
};

export default function PartnersModule(props?: IPartnersModuleProps) {
  const { className } = props || {};
  return (
    <div className={clsx("flex gap-[48px] w-fit mx-auto", className)}>
      {Object.entries(data).map(([title, items]) => (
        <div
          key={title}
          className="w-[953.76px] flex flex-col items-center pt-[38px] pb-[68px]"
        >
          <h3 className="text-[64px] leading-[1] font-DMSansBold font-bold gradient-text">
            Sponsors
          </h3>
          <LogoLoop
            className="mt-12"
            logos={items.map((item) => {
              return {
                node: (
                  <img
                    key={item.name}
                    className={clsx("w-[200px] h-[50px] object-contain")}
                    src={item.img}
                    alt={item.name}
                  />
                ),
              };
            })}
            speed={20}
            direction="left"
            gap={24}
            pauseOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel={title}
          />
        </div>
      ))}
    </div>
  );
}
