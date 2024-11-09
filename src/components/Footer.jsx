import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaFilePdf,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="flex justify-between items-center h-20 px-5 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="w-10 aspect-square rounded-full overflow-hidden">
          <img
            src={"https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"}
            alt="Logo"
          />
        </div>
        <div className="flex justify-around items-center space-x-4 sm:space-x-6">
          <div className="me-5">
            <a href="/" className="text-secondary mr-3">
              Sujan Ghosh
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Medium"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaMedium size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="PDF"
              className="text-gray-600 hover:text-gray-800  animate-tada"
            >
              <FaFilePdf size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
