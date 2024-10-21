import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import GuestLayout from "./container/user/GuestLayout";
import Home from "./pages/user/Home";
import FindJob from "./pages/user/FindJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-job",
        element: <FindJob />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
