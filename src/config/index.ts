import type { IEventDetail, IRouteMap, IScheduleData } from "@/types";
import hamburger from "@/assets/food/us-hamburger.png";
import usImg from "@/assets/country/us.png";
import fries from "@/assets/food/uk-fries.png";
import ukImg from "@/assets/country/uk.png";
import { createTimestamp } from "@/utils";

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
    id: "us",
    country: "United States",
    countryImg: usImg,
    status: 2,
    img: hamburger,
    top: 275,
    left: 408,
  },
  {
    id: 5,
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
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
    id: "uk",
    country: "U.K.",
    countryImg: ukImg,
    status: 1,
    img: fries,
    top: 339,
    left: 505,
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
    country: "",
    status: -1,
    img: "",
    top: 368,
    left: 656,
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
    country: "",
    status: -1,
    img: "",
    top: 434,
    left: 754,
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
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
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
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
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
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
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
    country: "",
    status: -1,
    img: "",
    top: 0,
    left: 0,
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
    id: "us",
    title: "United States",
    description:
      "Join the premier technology competition Compete, innovate, and win",
    totalPrizeUsd: 100000,
    prizeToken: "GAS",
  },
  {
    id: "uk",
    title: "United States",
    description:
      "Join the premier technology competition Compete, innovate, and win",
    totalPrizeUsd: 100000,
    prizeToken: "GAS",
  },
];

export const scheduleData: {
  id: string;
  data: IScheduleData[];
}[] = [
  {
    id: "us",
    data: [
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 9, 0), // 2025-2-4 上午9:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 10, 0), // 2025-2-4 上午10:00 的时间戳
            content: "Event Registration OPENS!",
            subContent: "",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 10, 0), // 2025-2-4 上午10:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 11, 0), // 2025-2-4 上午11:00 的时间戳
            content: "Event Registration OPENS!",
            subContent: "Welcome & Introduction",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 11, 0), // 2025-2-4 上午11:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 12, 0), // 2025-2-4 上午12:00 的时间戳
            content: "Talks & Panels",
            subContent:
              "Sign up to secure your spot and receive event details.",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 12, 0), // 2025-2-4 上午12:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 14, 0), // 2025-2-4 上午14:00 的时间戳
            content: "Lunch Break",
            subContent:
              "Sign up to secure your spot and receive event details.",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 14, 0), // 2025-2-4 下午14:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 17, 0), // 2025-2-4 下午17:00 的时间戳
            content: "Talks & Panels",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 17, 0), // 2025-2-4 下午17:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 18, 0), // 2025-2-4 下午18:00 的时间戳
            content: "Happy Hour",
          },
        ],
      },
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 5, 0, 0),
            startTime: createTimestamp(2025, 1, 5, 9, 0),
            endTime: createTimestamp(2025, 1, 5, 10, 0),
            content: "Event Registration OPENS!",
            subContent: "",
          },
          {
            date: createTimestamp(2025, 1, 5, 0, 0),
            startTime: createTimestamp(2025, 1, 5, 10, 0),
            endTime: createTimestamp(2025, 1, 5, 11, 0),
            content: "Event Registration OPENS!",
            subContent: "Welcome & Introduction",
          },
        ],
      },
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 6, 0, 0),
            startTime: createTimestamp(2025, 1, 6, 9, 0),
            endTime: createTimestamp(2025, 1, 6, 10, 0),
            content: "Event Registration OPENS!",
            subContent: "",
          },
        ],
      },
    ],
  },
  {
    id: "uk",
    data: [
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 9, 0), // 2025-2-4 上午9:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 10, 0), // 2025-2-4 上午10:00 的时间戳
            content: "Event Registration OPENS!",
            subContent: "",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 10, 0), // 2025-2-4 上午10:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 11, 0), // 2025-2-4 上午11:00 的时间戳
            content: "Event Registration OPENS!",
            subContent: "Welcome & Introduction",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 11, 0), // 2025-2-4 上午11:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 12, 0), // 2025-2-4 上午12:00 的时间戳
            content: "Talks & Panels",
            subContent:
              "Sign up to secure your spot and receive event details.",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 12, 0), // 2025-2-4 上午12:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 14, 0), // 2025-2-4 上午14:00 的时间戳
            content: "Lunch Break",
            subContent:
              "Sign up to secure your spot and receive event details.",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 14, 0), // 2025-2-4 下午14:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 17, 0), // 2025-2-4 下午17:00 的时间戳
            content: "Talks & Panels",
          },
          {
            date: createTimestamp(2025, 1, 4, 0, 0), // 2025-2-4 的时间戳
            startTime: createTimestamp(2025, 1, 4, 17, 0), // 2025-2-4 下午17:00 的时间戳
            endTime: createTimestamp(2025, 1, 4, 18, 0), // 2025-2-4 下午18:00 的时间戳
            content: "Happy Hour",
          },
        ],
      },
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 5, 0, 0),
            startTime: createTimestamp(2025, 1, 5, 9, 0),
            endTime: createTimestamp(2025, 1, 5, 10, 0),
            content: "Event Registration OPENS!",
            subContent: "",
          },
          {
            date: createTimestamp(2025, 1, 5, 0, 0),
            startTime: createTimestamp(2025, 1, 5, 10, 0),
            endTime: createTimestamp(2025, 1, 5, 11, 0),
            content: "Event Registration OPENS!",
            subContent: "Welcome & Introduction",
          },
        ],
      },
      {
        dayData: [
          {
            date: createTimestamp(2025, 1, 6, 0, 0),
            startTime: createTimestamp(2025, 1, 6, 9, 0),
            endTime: createTimestamp(2025, 1, 6, 10, 0),
            content: "Event Registration OPENS!",
            subContent: "",
          },
        ],
      },
    ],
  },
];
