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

const Hero = () => {
  return (
    <section className="flex  items-center py-10 pt-28  px-4">
      <div className="flex flex-row items-center justify-around text-gray-600 rounded-lg shadow-sh-1 p-8  gap-5 space-y-4 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto  md:space-y-0 md:space-x-8 md:p-12">
        <div className="flex flex-col gap-5">
          {/* Text Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold">Sujan Ghosh</h1>

            {/* Job Title */}
            <p className="text-lg text-gray-500">
              I’m{" "}
              <span className="text-ternary">an React Native Developer</span>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/SujanGhosh2002"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/sujan-ghosh-b02203235/"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="#"
              aria-label="Medium"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaMedium size={28} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-800 animate-tada"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              aria-label="PDF"
              className="text-gray-600 hover:text-gray-800  animate-tada"
            >
              <FaFilePdf size={28} />
            </a>
          </div>
        </div>
        <div className="w-250 aspect-square rounded-3xl shadow-sh-1 overflow-hidden">
          <img
            src={"https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"}
            alt="Logo"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
