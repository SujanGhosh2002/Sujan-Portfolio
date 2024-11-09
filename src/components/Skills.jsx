import React from "react";
import {
  FaApple,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaJava,
  FaReact,
} from "react-icons/fa";
// import { IoLogoAndroid } from "react-icons/io";
const Skills = () => {
  const skills = [
    { icon: "{ }", name: "DSA" },
    // { icon: <FaApple size={30} />, name: "iOS App Development" },
    // { icon: <IoLogoAndroid size={30} />, name: "Android App Development" },
    { icon: <FaJsSquare size={30} />, name: "JavaScript" },
    { icon: <FaReact size={30} />, name: "React-Native" },
    { icon: <FaReact size={30} />, name: "React" },
    { icon: "{ }", name: "Objective C" },
    { icon: <FaJava size={30} />, name: "Java" },
    { icon: <FaHtml5 size={30} />, name: "HTML" },
    { icon: <FaCss3 size={30} />, name: "CSS" },
  ];

  return (
    <div className=" py-12 px-4 text-center max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        THINGS I KNOW
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Skills are all about practice. I love to work with JavaScript, but at
        the earliest time, I worked on Obj-C, but due to the market demand, I
        have switched to JavaScript language. Based on the creating and
        maintaining projects I have built, I am writing down my skills below.
      </p>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-6 w-max px-4 py-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col aspect-square items-center justify-center bg-[primary] rounded-lg shadow-sh-2 p-6 transition-shadow duration-300 min-w-[150px]"
            >
              <div className="text-gray-700 mb-2 animate-fada">
                {skill.icon}
              </div>
              <p className="text-gray-800 font-medium text-center text-balance">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
