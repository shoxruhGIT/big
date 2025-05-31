import Navbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";
import bg from "../assets/bg.jpg";

const LoginLayout = () => {
  return (
    <div
      className="w-full h-screen flex flex-col"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg}), linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize:
          window.innerWidth >= 768
            ? "50% 100%, 50% 100%"
            : "100% 50%, 100% 50%",
        backgroundPosition:
          window.innerWidth >= 768 ? "left, right" : "top, bottom",
      }}
    >
      <Navbar />
      <main className="flex-1 flex justify-center items-center overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LoginLayout;
