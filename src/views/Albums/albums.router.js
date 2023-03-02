import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Photos from "./components/Photos";
const Albums = lazy(() => import("./index"));
const Photos = lazy(() => import("./components/Photos"));

const Router = () => (
  <Routes>
    <Route path="/" element={<Albums />} />
    <Route path=":id" element={<Photos />} />
  </Routes>
);


export default Router;