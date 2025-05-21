import Navbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LoginLayout;
