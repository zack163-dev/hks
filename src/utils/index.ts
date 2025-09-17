import type { IScheduleData } from "@/types";

export const normalizeToDate = (ts: number) => {
  const d = new Date(ts);
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    0,
    0,
    0,
    0
  ).getTime();
};

export const monthShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateRange = (data?: IScheduleData[]) => {
  if (!data) return "-";
  const dates = data
    .flatMap((d) => d.dayData.map((item) => normalizeToDate(item.date)))
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort((a, b) => a - b);
  if (dates.length === 0) return "";
  const first = new Date(dates[0]);
  const last = new Date(dates[dates.length - 1]);
  const sameYear = first.getFullYear() === last.getFullYear();
  const sameMonth = sameYear && first.getMonth() === last.getMonth();
  if (dates.length === 1) {
    return `${monthShort[first.getMonth()]} ${first.getDate()}, ${first.getFullYear()}`;
  }
  if (sameMonth) {
    return `${monthShort[first.getMonth()]} ${first.getDate()}-${last.getDate()}, ${first.getFullYear()}`;
  }
  if (sameYear) {
    return `${monthShort[first.getMonth()]} ${first.getDate()} - ${monthShort[last.getMonth()]} ${last.getDate()}, ${first.getFullYear()}`;
  }
  return `${monthShort[first.getMonth()]} ${first.getDate()}, ${first.getFullYear()} - ${monthShort[last.getMonth()]} ${last.getDate()}, ${last.getFullYear()}`;
};

export const createTimestamp = (
  year: number,
  monthIndex: number,
  day: number,
  hour: number,
  minute: number
) => {
  // monthIndex: 0-based (Feb = 1)
  return new Date(year, monthIndex, day, hour, minute, 0, 0).getTime();
};
