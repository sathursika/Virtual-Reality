import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#211F32] text-white py-10 px-5">
      {/* Footer Content Wrapper */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-400">How To</a></li>
            <li><a href="#" className="hover:text-gray-400">Join Hydra</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">F.A.Q</a></li>
            <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-400">Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Licenses</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Socialize with Hydra</h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Join Our Community</h3>
          <div className="flex justify-center sm:justify-start">
            <button className="w-[214px] h-12 rounded-[40px] bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-xs font-bold text-[#343045]">
              SEND TO HYDRA
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>© 2023 HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
