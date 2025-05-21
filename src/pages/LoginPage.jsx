import React, { useState } from "react";

const LoginPage = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="relative w-full md:w-1/2 h-[30vh] md:h-screen bg-[url('./assets/bg.jpg')] bg-center bg-cover flex items-center justify-center p-8">
        <div className="uppercase font-bold text-3xl md:text-4xl text-white flex flex-col items-center tracking-[8px] md:tracking-[12px]">
          <span>NEW</span>
          <span>FAST</span>
          <span>STRONG</span>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 min-h-[70vh] md:h-screen flex items-center p-4 md:p-8 text-white"
        style={{
          background:
            "linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)",
        }}
      >
        <div className="w-full max-w-[400px] mx-auto md:mx-24 space-y-6">
          <div className="mb-8">
            <h1 className="font-semibold text-2xl md:text-3xl">Nice to see you</h1>
            <p className="text-[#A0AEC0] text-sm">
              Enter your email and password to sign in
            </p>
          </div>

          {/* Form */}

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>

              <div className="border-gradient rounded-[20px]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full rounded-[18px] p-4 outline-none text-[#A0AEC0] placeholder-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className=" text-sm">
                Password
              </label>

              <div className="border-gradient rounded-[20px]">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className="w-full rounded-[18px] p-4 outline-none  text-[#A0AEC0] placeholder-gray-300"
                />
              </div>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex items-center space-x-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  onClick={() => setIsTrue(!isTrue)}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div
                  className={`w-[36px] h-[18px] ${
                    isTrue ? "bg-blue-600" : "bg-gray-500"
                  } rounded-full peer-focus:outline-none peer peer-checked:after:translate-x-[17px] after:content-[''] after:absolute after:top-[2.5px] after:left-[2.5px] after:bg-white after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all`}
                ></div>
              </label>
              <span className="text-white text-sm">Remember me</span>
            </div>
            <p className="uppercase text-sm text-[#A0AEC0] font-normal">
              <span className="text-[#0075FF]">Agree</span> with all rules
            </p>
          </div>

          <button className="w-full mt-5 h-[45px] bg-[#0075FF] rounded-[18px] uppercase text-[10px] cursor-pointer hover:opacity-90 transition-colors">
            Sign in
          </button>

          <p className="text-center text-[#A0AEC0] text-sm">Don't have an account? <a className="text-bold text-white" href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;