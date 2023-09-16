import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto mb-5 max-[400px]:mb-20">
        <Navbar />
        {children}
        <Footer />
        <BottomNav />
      </div>
    </React.Fragment>
  );
};

export default Layout;
