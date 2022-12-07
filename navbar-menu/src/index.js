import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Products from "./routes/Porducts";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import Team from "./routes/Team";
import "./App.css";

const Appl =() => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Appl />,
    children: [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "Reports",
    element: <Reports />,
  },
  {
    path: "team",
    element: <Team />,
  },
]}]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);