export interface IRouteMap {
  id: number | string;
  country: string;
  countryImg?: string;
  status: number;
  img: string;
  top: number;
  left: number;
}

export const ProgramStatus = {
  NotExits: -1,
  NotStarted: 0,
  InProgress: 1,
  Completed: 2,
};

export interface IEventDetail {
  id: number | string;
  title: string;
  description: string;
  totalPrizeUsd: number;
  prizeToken: string;
}

export interface IDayData {
  date: number;
  startTime: number;
  endTime: number;
  content: string;
  subContent?: string;
}

export interface IScheduleData {
  dayData: IDayData[];
}
