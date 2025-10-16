import Twitter from "@/assets/social/twitter.svg";
import Discord from "@/assets/social/discord.svg";
import Youtube from "@/assets/social/youtube.svg";

interface ISocialMedia {
  name: string;
  icon: string;
  link?: string;
}

const links = [
  {
    title: "Documentation",
    items: [
      {
        name: "Getting Started",
        href: "https://xspoonai.github.io/docs/getting-started/quick-start/",
      },
      {
        name: "Installation",
        href: "https://xspoonai.github.io/docs/getting-started/installation/",
      },
      {
        name: "Configuration",
        href: "https://xspoonai.github.io/docs/getting-started/configuration/",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        name: "GitHub",
        href: "https://github.com/XSpoonAi",
      },
      {
        name: "Discord",
        href: "",
      },
      {
        name: "Issues",
        href: "https://github.com/XSpoonAi/spoon-core/issues",
      },
    ],
  },
  {
    title: "More",
    items: [
      {
        name: "SpoonOS",
        href: "",
      },
      {
        name: "Examples",
        href: "https://xspoonai.github.io/docs/examples/intent-graph-demo/",
      },
      {
        name: "Blog",
        href: "https://x.com/SpoonOS_ai/articles",
      },
    ],
  },
];

const socialMedia: ISocialMedia[] = [
  {
    name: "Discord",
    icon: Discord,
    link: "https://t.co/CecmH1lyjF",
  },
  {
    name: "Youtube",
    icon: Youtube,
    link: "https://www.youtube.com/@SpoonOS_ai",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "",
  },
];

export default function Footer() {
  return (
    <div
      className="
    mx-auto w-[1440px]"
    >
      <div className="mx-[80px] text-[#D9D9D9] mb-[92px] rounded-[10px] bg-[rgba(8_35_18_/_0.5)] py-8 pb-10 px-[325px] border-[#2F8E53] border-[1px] border-solid">
        <div className="flex justify-between">
          {links.map((module, index) => {
            return (
              <div className="flex flex-col gap-2" key={index}>
                <span className="text-[16px] leading-[2] font-bold font-DMSansBold">
                  {module.title}
                </span>
                <div className="flex flex-col gap-2 mt-2">
                  {module.items.map((item, i) => {
                    return (
                      <span
                        key={i}
                        className="text-[16px] leading-[2] cursor-pointer hover:text-white"
                        onClick={() => {
                          if (item.href) {
                            window.open(item.href, "_blank");
                          }
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-10 text-[#D9D9D9]">
          <span className="text-[16px] leading-[2]">
            Copyright © 2025 SpoonAI. Built with SpoonOS.
          </span>
          <div className="items-center gap-10 flex">
            {socialMedia.map((item) => {
              return (
                <img
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                  className="w-5 h-5 cursor-pointer"
                  src={item.icon}
                  alt={item.name}
                  key={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
