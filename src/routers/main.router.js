import { lazy } from "react";
const Albums = lazy(() => import("../views/Albums/albums.router"));
export const MainRouter = [
  {
    path: "/albums/*",
    name: "albums",
    component: Albums,
  },
];
