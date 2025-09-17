import LogoLoop from "@/components/common/LogoLoop";
import TitleWithLine from "@/components/common/TitleWithLine";
import clsx from "clsx";

interface IPartnersModuleProps {
  className?: string;
}

const data = {
  Sponsors: [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
  Partners: [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
};

export default function PartnersModule(props?: IPartnersModuleProps) {
  const { className } = props || {};
  return (
    <div className={clsx("flex gap-[48px] w-fit mx-auto", className)}>
      {Object.entries(data).map(([title, items]) => (
        <div
          key={title}
          className="w-[434px] bg-[#152021] rounded-[14.6px] p-12 flex flex-col items-center"
        >
          <TitleWithLine title={title} />
          <LogoLoop
            className="mt-9"
            logos={items.map((_, i) => {
              return {
                node: (
                  <div
                    key={i}
                    className={clsx(
                      "w-[42px] h-[42px] rounded-full bg-[#D9D9D9]"
                    )}
                  />
                ),
              };
            })}
            speed={5}
            direction="left"
            logoHeight={42}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#152021"
            ariaLabel={title}
          />
        </div>
      ))}
    </div>
  );
}
