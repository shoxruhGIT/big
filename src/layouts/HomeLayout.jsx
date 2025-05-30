import React from "react";

import Navbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import FooterNav from "@/components/FooterNav";

const HomeLayout = () => {
  return (
    <div className="w-full h-screen">
      {/* <Navbar /> */}
      <FooterNav />
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
