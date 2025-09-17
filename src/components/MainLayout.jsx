import React from "react";
import Sidebar from "./Sidebar";
import { UserProvider } from "../context/UserContext";

const MainLayout = ({ children }) => {
  return (
    <UserProvider>
      <Sidebar />
      <div className="ml-64">{children}</div>
    </UserProvider>
  );
};

export default MainLayout;
