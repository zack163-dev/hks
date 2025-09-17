import Twitter from "@/assets/social/twitter.svg";
import Discord from "@/assets/social/discord.svg";
import Telegram from "@/assets/social/telegram.svg";
import Unknown1 from "@/assets/social/unknown1.svg";
import Unknown2 from "@/assets/social/unknown2.svg";

interface ISocialMedia {
  name: string;
  icon: string;
  link?: string;
}

const socialMedia: ISocialMedia[] = [
  {
    name: "Twitter",
    icon: Twitter,
    link: "",
  },
  {
    name: "Discord",
    icon: Discord,
    link: "",
  },
  {
    name: "Telegram",
    icon: Telegram,
    link: "",
  },
  {
    name: "Unknown1",
    icon: Unknown1,
    link: "",
  },
  {
    name: "Unknown2",
    icon: Unknown2,
    link: "",
  },
];

export default function Footer() {
  return (
    <div className="h-[92px] px-[280px] flex items-center justify-between">
      <span className="text-[20px] leading-[28px] font-medium text-[rgba(255_255_255_/_0.8)]">
        Copyright © Neo 2014 - 2025
      </span>
      <div className="flex gap-[55px] items-center">
        <div className="items-center gap-6 flex">
          {socialMedia.slice(0, 2).map((item) => {
            return (
              <img
                className="w-4 h-4 cursor-pointer"
                src={item.icon}
                alt={item.name}
                key={item.name}
              />
            );
          })}
        </div>
        <div className="items-center gap-6 flex">
          {socialMedia.slice(2, 5).map((item) => {
            return (
              <img
                className="w-4 h-4 cursor-pointer"
                src={item.icon}
                alt={item.name}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
