import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import ProjectList from "../components/ProjectList";
import ProjectDetails from "../components/ProjectDetails";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <Login />,
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      { path: "*", element: <NotFound /> },

      {
        path: "projects",
        element: <ProjectList />,
      },
      {
        path: "projects/detail",
        element: <ProjectDetails />,
      },
    ],
  },
]);
