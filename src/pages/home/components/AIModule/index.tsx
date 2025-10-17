import clsx from "clsx";

interface IAIModuleProps {
  className?: string;
}

export default function AIModule(props: IAIModuleProps) {
  const { className } = props;
  return (
    <div
      className={clsx(
        "flex flex-col gap-[48px] mx-auto text-center w-fit items-center",
        className
      )}
    >
      <h3 className="w-[500px] text-[64px] leading-[76px] font-DMSansBold font-bold gradient-text">
        Build the Future of AI Agent
      </h3>
      <h4 className="w-[612px] text-[16px] leading-[1.3] text-[#D9D9D9]">
        Explore how AI Agents collaborate, compete, and connect across open
        networks—powered by SpoonOS at the Scoop AI Hackathon.
      </h4>
    </div>
  );
}
