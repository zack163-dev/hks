import type {
  IEventDetail,
  IRouteMap,
  IScheduleData,
  ITrackData,
} from "@/types";
import russiaFood from "@/assets/food/russia.png";
import russiaFlag from "@/assets/country/russia.png";
import indiaFood from "@/assets/food/india.png";
import indiaFlag from "@/assets/country/india.png";
import ukFood from "@/assets/food/uk.png";
import ukFlag from "@/assets/country/uk.png";
import usFood from "@/assets/food/us.png";
import usFlag from "@/assets/country/us.png";
import chinaFood from "@/assets/food/china.png";
import chinaFlag from "@/assets/country/china.png";
import japanFood from "@/assets/food/japan.png";
import japanFlag from "@/assets/country/japan.png";
import koreaFood from "@/assets/food/korea.png";
import koreaFlag from "@/assets/country/korea.png";
import vietnamFood from "@/assets/food/vietnam.png";
import vietnamFlag from "@/assets/country/vietnam.png";

export const startDate = "OCT 2025";
export const prize = "100,000";
export const docUrl = "https://xspoonai.github.io/";

export const routeMap: IRouteMap[] = [
  {
    id: 1,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 2,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 3,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 4,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: "russia",
    country: "Russia",
    countryImg: russiaFlag,
    status: 1,
    img: russiaFood,
    top: 259,
    left: 415,
  },
  {
    id: 6,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 7,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 8,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: "vietnam",
    country: "Vietnam",
    countryImg: vietnamFlag,
    status: 0,
    img: vietnamFood,
    top: 301,
    left: 522,
  },
  {
    id: 10,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 11,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 12,
    country: "Japan",
    countryImg: japanFlag,
    status: 0,
    img: japanFood,
    top: 335,
    left: 705,
  },
  {
    id: 13,
    country: "",
    status: -1,
    img: "",
    top: 378,
    left: 707,
  },
  {
    id: 14,
    country: "",
    status: -1,
    img: "",
    top: 387.5,
    left: 759,
  },
  {
    id: 15,
    country: "",
    status: -1,
    img: "",
    top: 406,
    left: 731,
  },
  {
    id: 16,
    country: "",
    status: -1,
    img: "",
    top: 424,
    left: 703,
  },
  {
    id: 17,
    country: "Korea",
    countryImg: koreaFlag,
    status: 0,
    img: koreaFood,
    top: 408,
    left: 767,
  },
  {
    id: 18,
    country: "",
    status: -1,
    img: "",
    top: 443,
    left: 805,
  },
  {
    id: 19,
    country: "",
    status: -1,
    img: "",
    top: 461,
    left: 778,
  },
  {
    id: 20,
    country: "",
    status: -1,
    img: "",
    top: 471,
    left: 829,
  },
  {
    id: 21,
    country: "United States",
    countryImg: usFlag,
    status: 0,
    img: usFood,
    top: 443,
    left: 948,
  },
  {
    id: 22,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 23,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 24,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 25,
    country: "India",
    countryImg: indiaFlag,
    status: 0,
    img: indiaFood,
    top: 387,
    left: 1090,
  },
  {
    id: 26,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 27,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 28,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 29,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 30,
    country: "China",
    countryImg: chinaFlag,
    status: 0,
    img: chinaFood,
    top: 316,
    left: 1141,
  },
  {
    id: 31,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 32,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 33,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 34,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 35,
    country: "United Kingdom",
    countryImg: ukFlag,
    status: 0,
    img: ukFood,
    top: 282,
    left: 966,
  },
  {
    id: 36,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
  {
    id: 37,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
  },
];

export const eventDetails: IEventDetail[] = [
  {
    id: "russia",
    title: "Russia",
    description:
      "Join the premier technology competition Compete, innovate, and win",
    prizeUsd: "7,000",
    startDate: "Oct 2025",
  },
];

export const scheduleData: {
  id: string;
  data: IScheduleData;
}[] = [
  {
    id: "russia",
    data: {
      onlineTime: "2025.10.20-11.20",
      onSiteTime: "2025.11.23",
      typeformUrl: "https://form.typeform.com/to/DsCvOuP4",
      lumaUrl: "https://luma.com/5b10kb7g",
      onSite: [
        {
          timeRange: "09:00-10:00",
          content: "Registration and Breakfast with Networking.",
        },
        {
          timeRange: "10:00-10:15",
          content: "Opening Speech: Why Neo, SpoonOS, why AI agents.",
        },
        {
          timeRange: "10:15-13:00",
          content:
            "Hackathon-Finalizing projects and last minute consulting sessions with SpoonOS experts.",
        },
        {
          timeRange: "13:00-14:00",
          content: "Lunch Break.",
        },
        {
          timeRange: "14:00-14:30",
          content: "Panel Discussion 1 - Emerging trends in AI agents.",
        },
        {
          timeRange: "14:30-15:00",
          content:
            "Panel Discussion 2 - How to use agent frameworks to build AI + Web3 products.",
        },
        {
          timeRange: "15:00-18:00",
          content:
            "Demo Time. Each team will have 5 minutes to present their project, followed by a 3-minute Q&A session.",
        },
        {
          timeRange: "18:00-19:00",
          content: "Winner Announcement Ceremony and networking drinks.",
        },
      ],
      online: [],
    },
  },
];

export const tracksData: {
  id: string | number;
  data: ITrackData[];
}[] = [
  {
    id: "russia",
    data: [
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
    ],
  },
];
