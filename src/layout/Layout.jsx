import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow w-full flex flex-col items-center bg-darkerpurple max-w-[1280px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
