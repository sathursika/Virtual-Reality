import React from 'react';
import aboutImage from '../assets/about.jpeg';

const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#211F32] text-white">
      <div className="w-full h-12"></div>

      {/* Section 1: Introduction */}
      <div className="flex flex-col md:flex-row items-start w-full px-6 md:px-12 py-12 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section: Headings */}
        <div className="flex flex-col space-y-2 md:mr-12">
          <p className="text-3xl md:text-4xl font-bold">INTRODUCTION</p>
          <p className="text-3xl md:text-4xl font-light">TO HYDRA VR</p>
        </div>

        {/* Right Section: Paragraph */}
        <div className="w-full md:w-[60%] text-base leading-relaxed">
          <p>
            Welcome to Hydra VR, a next-generation virtual reality platform designed to
            provide users with an immersive and interactive experience like no other.
            Whether you're exploring new worlds, enhancing training simulations, or engaging
            in exciting social interactions, Hydra VR offers a versatile and dynamic environment
            tailored to a wide range of interests and industries. Our platform uses cutting-edge
            VR technology to transport you into lifelike virtual environments, combining realistic
            graphics, intuitive controls, and seamless connectivity.
          </p>
        </div>
      </div>

      <div className="w-full h-8"></div>

      {/* Section 2: About Page */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full px-6 md:px-12 py-12 space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Section: Image */}
        <div className="w-full lg:w-[45%] h-[300px] md:h-[400px] bg-neutral-400 overflow-hidden rounded-tl-[100px] rounded-tr-[240px] rounded-bl-[240px] rounded-br-[100px] shadow-lg">
          <img
            src={aboutImage}
            className="w-full h-full object-cover"
            alt="Hydra VR"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-[45%] flex flex-col space-y-6">
          {/* Headings */}
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">ABOUT</p>
            <p className="text-3xl md:text-4xl font-light">HYDRA VR</p>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed">
            Hydra VR is not just about gaming—it's about redefining how we experience
            reality. Our platform empowers users to engage in everything from realistic
            virtual training to virtual tourism, where they can explore some of the world's
            most iconic landmarks without ever leaving their homes. We provide industries like
            education, healthcare, and entertainment with the tools to leverage the power of
            virtual reality, creating customized experiences that solve real-world problems.
            With features like real-time collaboration, adaptive environments, and full-body
            tracking, Hydra VR is designed to keep you connected and immersed in your virtual
            world in a way that's never been done before.
          </p>

          {/* Button */}
          <div className="w-full mt-6">
            <button className="w-[250px] h-12 rounded-[40px] bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-xs font-bold text-[#343045]">
              LET'S GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
