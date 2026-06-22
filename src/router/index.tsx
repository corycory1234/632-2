import { createBrowserRouter, Navigate } from "react-router"
import HomePage from "@/pages/Home"
import SearchResultsPage from "@/pages/SearchResults"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="home" replace />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "search",
      element: <SearchResultsPage />,
    },
  ],
  {
    basename: "/632-2/", // GitHub 自動部署, 要對齊 repo 英文名稱
  }
)

export default router
