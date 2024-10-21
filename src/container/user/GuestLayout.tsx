import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const GuestLayout: React.FC = () => {
  return (
    <div id="guestLayout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
