import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import GuestLayout from "./container/user/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
