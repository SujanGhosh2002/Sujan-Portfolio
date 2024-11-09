import React from "react";

const Education = () => {
  return (
    <div id="education" className="bg-primary p-6">
      <h2 className="text-3xl font-semibold text-secondary mb-4  text-center">
        Education and Experience
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10  text-center">
        Here is my information about my education and work experiences.
      </p>
      <div className="bg-primary p-10 rounded-lg shadow-sh-1 max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between  space-y-8 md:space-y-0 md:space-x-12 lg:space-y-0 lg:space-x-52">
          {/* Professional Experience Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Professional Experience
            </h2>
            <div className="">
              {/* Experience Item */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 aspect-square border-ternary bg-gray-300 border-2 rounded-full"></div>
                  <div className="w-0.5 h-full bg-ternary"></div>
                </div>
                <div className="ml-4 mb-5">
                  <h3 className="text-xl font-bold text-ternary">
                    React-Native Developer
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    Oct, 2024 - Present
                  </p>
                  <p className="text-gray-600 italic">ApDux, Kolkata, India</p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Currently working on React-Native App.</li>
                    <li>Got opportunities to work</li>
                  </ul>
                </div>
              </div>

              {/* Experience Items */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 aspect-square border-ternary bg-gray-300 border-2 rounded-full"></div>
                  <div className="w-0.5 h-full bg-ternary"></div>
                </div>
                <div className="ml-4 mb-5">
                  <h3 className="text-xl font-bold text-ternary">
                    React-Native Developer
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    Sep, 2024 - Oct, 2024
                  </p>
                  <p className="text-gray-600 italic">
                    Sicu-aura, Kolkata, India
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>building some page from scratch...</li>
                    <li>Great team learning and managed work with Git.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Education
            </h2>
            <div className="">
              {/*BSc Education Item */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 aspect-square border-ternary bg-gray-300 border-2 rounded-full"></div>
                  <div className="w-0.5 h-full bg-ternary"></div>
                </div>
                <div className="ml-4 mb-5">
                  <h3 className="text-xl font-bold text-ternary">
                    MIDNAPORE COLLEGE (AUTONOMOUS)
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    2021 - 2024
                  </p>
                  <p className="text-gray-600 italic">Bachelor of Science</p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Learned basic programming and Data Structure.</li>
                    <li>Web-Development</li>
                  </ul>
                </div>
              </div>

              {/* HS Education Items */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 aspect-square border-ternary bg-gray-300 border-2 rounded-full"></div>
                  <div className="w-0.5 h-full bg-ternary"></div>
                </div>
                <div className="ml-4 mb-5">
                  <h3 className="text-xl font-bold text-ternary">
                    JARA HIGH SCHOOL
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    200* - 2021
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Annual Sport Cricket</li>
                    <li>Badminton</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
