import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeadPage from "../pages/HeadPage";
import ContentPage from "../pages/ContentPage";


const router = createBrowserRouter([
  { path: "/", element: <HeadPage /> },
  { path: "/:placeId", element: <ContentPage /> },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
