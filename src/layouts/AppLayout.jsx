import AsideBar from "@/components/Sidebar";
import ScreenNavbar from "@/components/MainNavbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-[url('./assets/bg2.jpg')] bg-cover bg-center -z-20" />

      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl -z-10" />

      <AsideBar />
      <main className="p-2 md:ml-60 flex-1">
        <ScreenNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
