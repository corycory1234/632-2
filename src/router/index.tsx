import { createBrowserRouter, Navigate } from "react-router";
import Layout from "@/Layout/Layout";
import HomePage from "@/pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children: [
        { 
          index: true,
          element: <Navigate to="home" replace/>
        },
        {
          path: "home",
          element: <HomePage/>
        }
      ]
    }
  ],

  {
    basename: "/632-2/", // GitHub 自動部屬, 要對齊 repo 英文名稱
  }
);

export default router;