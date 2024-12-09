import React from "react";
import bg from '../assets/bg.jpg';
import l1 from '../assets/hydra-tech1-1.png';
import l2 from '../assets/hydra-tech2-1.png';
import l3 from '../assets/hydra-tech3-1.png';
import l4 from '../assets/hydra-tech4-1.png';

const TechnologiesPage = () => {
  return (
    <div className="w-full bg-[#211e2e] flex flex-col items-center py-16">
      {/* Image with Text Overlay */}
      <div className="relative w-full max-w-[1278px] h-[303px] rounded-[160px] overflow-hidden shadow-md">
        {/* Background Image with Blur */}
        <img
          src={bg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
        />

        {/* Dark Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="relative text-3xl sm:text-4xl font-bold text-white">
            TECHNOLOGIES &amp; HARDWARE
          </p>
          <p className="relative text-lg sm:text-2xl font-light text-white mt-2">
            USED BY HYDRA VR.
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12 px-6">
        <img
          src={l1}
          alt="Tech Logo 1"
          className="w-[174px] h-[174px] opacity-40 sm:w-[200px] sm:h-[200px]"
        />
        <img
          src={l2}
          alt="Tech Logo 2"
          className="w-[252px] h-[252px] opacity-40 sm:w-[200px] sm:h-[200px]"
        />
        <img
          src={l3}
          alt="Tech Logo 3"
          className="w-[263px] h-[263px] opacity-40 sm:w-[220px] sm:h-[220px]"
        />
        <img
          src={l4}
          alt="Tech Logo 4"
          className="w-[282px] h-[282px] opacity-40 sm:w-[230px] sm:h-[230px]"
        />
      </div>
    </div>
  );
};

export default TechnologiesPage;
