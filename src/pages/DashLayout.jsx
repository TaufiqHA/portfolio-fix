import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto mt-40 ">{children}</div>
    </React.Fragment>
  );
};

export default DashLayout;
