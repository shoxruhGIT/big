import Footer from "@/components/landing/LandingFooter";
import Header from "@/components/landing/LandingNavbar";
import BigDataStatus from "@/ui/landing/big-data-status";
import Characteristic from "@/ui/landing/characteristics";
import ControlPanel from "@/ui/landing/control-panel";
import CTA from "@/ui/landing/cta";
import Hero from "@/ui/landing/hero";
import ServerFeatures from "@/ui/landing/server-features";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white font-[Syne] text-black min-h-screen">
      <Header />
      <Hero />
      {/* <ServerFeatures /> */}
      <ControlPanel />
      <BigDataStatus />
      <Characteristic />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
