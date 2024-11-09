import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
          {/* Professional Experience Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {/* Experience Item */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-700">
                    IOS ENGINEER
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    Sep, 2022 - Present
                  </p>
                  <p className="text-gray-600 italic">
                    Animaker Inc., Chennai, India
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>
                      Currently working on Animker iOS App. Video Editing
                      Application.
                    </li>
                    <li>
                      Got opportunities to work on MVVM arch and modularization
                      patterns...
                    </li>
                  </ul>
                </div>
              </div>

              {/* Repeat for other experience items */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-700">
                    IOS DEVELOPER
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    Mar, 2021 - Sep, 2022
                  </p>
                  <p className="text-gray-600 italic">
                    Codelogicx Technologies Pvt. Ltd, Kolkata, India
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>
                      Have much stronger experience in building big projects
                      from scratch...
                    </li>
                    <li>Great team learning and managed work with Git.</li>
                  </ul>
                </div>
              </div>

              {/* More items as necessary */}
            </div>
          </div>

          {/* Education Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Education
            </h2>
            <div className="space-y-8">
              {/* Education Item */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-700">
                    JALPAIGURI GOVT. ENGG. COLLEGE
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    2014 - 2018
                  </p>
                  <p className="text-gray-600 italic">Bachelor of Technology</p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Learned basic programming and Data Structure.</li>
                    <li>
                      Learned voice-over, video editing, and posted on
                      YouTube...
                    </li>
                  </ul>
                </div>
              </div>

              {/* More education items */}
              <div className="flex">
                <div className="w-8 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-700">
                    JHAKRA HIGH SCHOOL
                  </h3>
                  <p className="text-sm bg-gray-300 inline-block px-2 py-1 rounded-lg">
                    2007 - 2014
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Annual Sport Cricket</li>
                    <li>Drawing, Throw Ball Competition</li>
                  </ul>
                </div>
              </div>

              {/* Add more items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
