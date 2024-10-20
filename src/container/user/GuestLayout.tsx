import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../features/user/home/Home";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const GuestLayout: React.FC = () => {
  return (
    <div id="guestLayout">
      <Navbar />
      <Home />
      <Footer />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
