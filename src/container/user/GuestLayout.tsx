import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../features/user/home/Home";
import Navbar from "../../features/user/home/components/Navbar";

const GuestLayout: React.FC = () => {
  return (
    <div id="guestLayout">
      <Navbar />
      <Home />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
