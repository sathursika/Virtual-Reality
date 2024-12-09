import React from 'react';
import aboutImage from '../assets/about.jpeg';
import aboutImage1 from '../assets/about1.png';
import aboutImage2 from '../assets/about2.png';
import aboutImage3 from '../assets/about3.png';

const WhyPage = () => {
  const cards = [
    {
      title: "SIMULATION",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: aboutImage,
    },
    {
      title: "EDUCATION",
      description: "Transforming the way education is delivered through immersive virtual reality experiences tailored to learning.",
      image: aboutImage1,
    },
    {
      title: "SELF-CARE",
      description: "Experience unparalleled entertainment with Hydra VR, blending reality with virtual adventures.",
      image: aboutImage2,
    },
    {
      title: "OUTDOOR",
      description: "Innovative VR solutions for healthcare, aiding in therapy and immersive medical training.",
      image: aboutImage3,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#211F32] text-white">
      <div className="w-full h-16"></div>

      {/* Section 1: Why Build with Hydra */}
      <div className="flex flex-col md:flex-row items-start w-full px-6 md:px-12 py-12 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section: Headings */}
        <div className="flex flex-col space-y-2 md:mr-12">
          <p className="text-3xl md:text-4xl font-bold">WHY BUILD</p>
          <p className="text-3xl md:text-4xl font-light">WITH HYDRA</p>
        </div>

        {/* Right Section: Paragraph */}
        <div className="w-full md:w-[60%] text-base leading-relaxed" >
          <p>
            Hydra VR offers an unparalleled virtual reality experience that merges cutting-edge technology
            with immersive environments. From gaming to education, Hydra VR transforms the way you
            interact with digital spaces. Discover the ultimate blend of innovation and convenience
            with our versatile solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Section 2: Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12 py-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[310px] lg:w-[300px] xl:w-[310px] h-[460px] bg-[#2C2A3A] rounded-[40px] p-6 flex flex-col items-center"
          >
            {/* Card Image */}
            <div className="w-[190.92px] h-[190.92px] mb-4">
              <img
                src={card.image}
                className="w-full h-full object-cover rounded-[40px]"
                alt={card.title}
              />
            </div>
            {/* Card Title */}
            <p className="text-2xl font-bold text-center text-white mb-4">{card.title}</p>
            {/* Card Description */}
            <p className="text-xs text-center text-white mb-6">
              {card.description}
            </p>
            {/* Card Button */}
            <div className="w-[154px] h-12 rounded-[40px] bg-gradient-to-r from-[#8176af] to-[#c0b7e8] flex items-center justify-center">
              <p className="text-xs font-bold text-[#343045]">TRY IT NOW</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPage;
