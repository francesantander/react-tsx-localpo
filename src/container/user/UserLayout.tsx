import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <div id="userLayout">
      <Outlet />
    </div>
  );
};

export default UserLayout;
