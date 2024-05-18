import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Footer from "../pages/footer";

const AppLayout = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
