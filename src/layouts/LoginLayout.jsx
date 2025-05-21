import Navbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LoginLayout;
