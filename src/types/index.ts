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
  prizeUsd: string;
  startDate: string;
}

export interface IScheduleItem {
  timeRange: string;
  content: string;
}
export interface IScheduleData {
  onlineTime: string;
  onSiteTime: string;
  onSite: IScheduleItem[];
  online: IScheduleItem[];
}
