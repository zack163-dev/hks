import React from "react";

const HomePage = React.lazy(() => import("@/pages/home"));
const EventDetailPage = React.lazy(() => import("@/pages/event-detail"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found"));

export interface Route {
  path: string;
  element: React.ComponentType;
  label?: string;
  protected?: boolean;
}

export const ROUTES = {
  HOME: "/",
  DETAIL: "/event-detail/:id",
} as const;

export const routes: Route[] = [
  {
    path: ROUTES.HOME,
    element: HomePage,
    label: "Home",
  },
  {
    path: ROUTES.DETAIL,
    element: EventDetailPage,
    label: "Detail",
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
