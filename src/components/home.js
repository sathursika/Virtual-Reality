import React, { useState } from "react";
import "../index.css"; // Ensure Tailwind is configured
import homeImage from "../assets/about.png"; // Import the home image

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-gray-800 md:px-6 lg:px-8">
        <div className="text-2xl font-bold text-purple-400">HYDRA</div>
        {/* Centered Navigation Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex justify-center space-x-6 flex-grow`} style={{ marginLeft: '150px' }}
        >
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#technologies">Technologies</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#how-to">How To</a>
          </li>
        </ul>
        {/* Right Side Buttons */}
        <div className="hidden md:flex space-x-4">
          <div className="flex items-center justify-center w-36 h-12 rounded-full border-2 border-white">
            <p className="text-xs font-bold text-white">CONTACT US</p>
          </div>
          <div className="flex items-center justify-center w-36 h-12 rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8]">
            <p className="text-xs font-bold text-[#343045]">JOIN HYDRA</p>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
            />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        {/* Left Text Section */}
        <div className="space-y-6 max-w-lg md:ml-12 lg:ml-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Dive Into The Depths Of <span className="text-purple-400">Virtual Reality</span>
          </h1>
          <p className="text-gray-400">
            Hydra VR offers a versatile and dynamic environment
            tailored to a wide range of interests and industries. Our platform uses cutting-edge
            VR technology to transport you into lifelike virtual environments, combining realistic
            graphics, intuitive controls, and seamless connectivity.
          </p>
          <div>
            <div className="flex items-center justify-between w-52 h-12 rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] px-4">
              <p className="text-xs font-bold text-[#343045]" style={{ marginLeft: "30px" }}>BUILD YOUR WORLD</p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M16 12H8M16 12L12 16M16 12L12 8"
                  stroke="#C0B7E8"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-md mx-auto mt-8 md:mt-0">
          <div
            className="w-[300px] md:w-[400px] h-[320px] md:h-[410px] rounded-tl-[80px] md:rounded-tl-[100px] rounded-tr-[80px] md:rounded-tr-[100px] rounded-bl-[160px] md:rounded-bl-[240px] rounded-br-[80px] md:rounded-br-[100px] bg-neutral-400 shadow-md"
          />
          <img
            src={homeImage}
            alt="Virtual Reality"
            className="absolute inset-0 w-full h-full object-cover rounded-tl-[80px] md:rounded-tl-[100px] rounded-bl-[160px] md:rounded-bl-[200px]"
          />
        </div>
      </section>

      {/* Footer */}
      <div className="flex flex-col items-center bg-gradient-to-r from-purple-900 via-black to-purple-900 p-6 rounded-[90px] shadow-lg w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center gap-3 max-w-sm text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c3.75 0 6.75 3.105 6.75 6.931 0 3.252-2.25 7.707-6.75 12.32C7.5 16.888 5.25 12.433 5.25 9.181c0-3.826 3-6.931 6.75-6.931z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">Union St, Seattle, WA 98101, United States</p>
              <p className="text-lg font-bold">Pay Us a Visit</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center gap-3 max-w-sm text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0-1.242 1.008-2.25 2.25-2.25h15c1.242 0 2.25 1.008 2.25 2.25v10.5c0 1.242-1.008 2.25-2.25 2.25H4.5c-1.242 0-2.25-1.008-2.25-2.25V6.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75h7.5M8.25 12.75h7.5M10.5 15.75h3"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">(110) 1111-1010</p>
              <p className="text-lg font-bold">Give Us a Call</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center gap-3 max-w-sm text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-8.25 5.25m-3 0L2.25 6.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">Info@HydraVR.com</p>
              <p className="text-lg font-bold">Send Us an Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
