import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-[#211e2e] flex flex-col items-center py-10">
      <div
        className="w-full max-w-7xl mx-auto relative p-10 rounded-[100px] shadow-md"
        style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.5)" }}
      >
        <p className="text-3xl sm:text-4xl font-bold text-white text-center">JOIN HYDRA</p>
        <p className="text-xl sm:text-2xl font-light text-white text-center mb-8">
          Let’s Build Your VR Experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              className="w-full h-16 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              className="w-full h-16 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="Phone Number"
            />
          </div>

          {/* Subject */}
          <div className="relative col-span-2">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="Subject"
            />
          </div>

          {/* Message */}
          <div className="relative col-span-2">
            <textarea
              className="w-full h-52 rounded-[40px] border-2 border-white px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ease-in-out duration-300 hover:border-purple-400"
              placeholder="Tell Us Something..."
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button className="w-[214px] h-12 rounded-[40px] bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-xs font-bold text-[#343045] transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#b0a1c8]">
              SEND TO HYDRA
            </button>
          </div>
        </div>

        {/* SVG Divider */}
        <svg
          width={414}
          height={2}
          viewBox="0 0 414 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[50%] transform -translate-x-[50%] top-[calc(100%-10rem)]"
        >
          <path d="M0 1H414" stroke="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#343045" />
              <stop offset="0.348958" stopColor="#C0B7E8" />
              <stop offset="0.6875" stopColor="#8176AF" />
              <stop offset={1} stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
