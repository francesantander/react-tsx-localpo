import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import GuestLayout from "./container/user/GuestLayout";
import Home from "./pages/user/Home";
import FindJob from "./pages/user/FindJob";
import PostAJob from "./pages/user/PostAJob";
import AboutUs from "./pages/user/AboutUs";
import ContactUs from "./pages/user/ContactUs";

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
      {
        path: "/post-job",
        element: <PostAJob />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
