import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center bg-primary py-10 px-4 md:px-0">
      <h2 className="text-3xl font-semibold text-secondary mb-4  text-center">
        ABOUT ME
      </h2>
      {/* <div className="flex flex-col md:flex-row bg-primary rounded-lg shadow-sh-2 p-6 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex w-1/3 aspect-square rounded-full justify-center items-center md:justify-start">
          <img
            src="https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full md:w-40 md:h-40 mb-4 md:mb-0"
          />
        </div>
        <div className="md:ml-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-800">
            React-Native Developer
          </h3>

          <div className="flex flex-col md:flex-row mt-2 md:space-x-8 text-sm text-gray-600">
            <div>
              <p>
                <strong>Email:</strong> ghoshsujon420@gmail.com
              </p>
              <p>
                <strong>Currently At:</strong> ApDux.
              </p>
              <p>
                <strong>City:</strong> Kolkata
              </p>
              <p>
                <strong>Location:</strong> West Bengal, India
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>
                <strong>Birthdate:</strong> 13th Dis, 2002
              </p>
              <p>
                <strong>Last Degree:</strong> BSc
              </p>
              <p>
                <strong>Current Project:</strong> Selfheand
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-4 text-justify">
            I am from a small village. I am an average student in my class and
            very enthusiastic about technology, curious about how technology is
            growing much faster. I practised a lot, and now those practices help
            me a lot to grow up in my career, and now my habit has changed to
            Eat-Drink-sleep-Programming.
          </p>
        </div>
      </div> */}
      <p className="text-center text-gray-600 mb-12 max-w-2xl">
        I am an React-Native Developer. I have spent one years in the IT
        industry and continuously upgrading my skill as much as I can with my
        dedication, hard work, and valuable time. I have worked on some projects
        on React-Native. Nowadays, I am working on Web Development with React js
        Framework.
      </p>

      <div className="flex flex-col md:flex-row bg-primary rounded-lg shadow-sh-2 p-6 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex w-full md:w-[30%] aspect-square rounded-full justify-center items-center">
          <img
            src="https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"
            alt="Profile"
            className="aspect-square rounded-full w-60 mb-4 md:mb-0 p-6 shadow-sh-3"
          />
        </div>
        <div className="md:ml-6 flex flex-col justify-center gap-4y w-full md:w-[70%]">
          <h3 className="text-xl font-semibold text-secondary">
            React-Native Developer
          </h3>

          <div className="flex flex-col md:flex-row mt-2 md:space-x-8 text-sm text-gray-600">
            <div>
              <p>
                <strong>Email:</strong> ghoshsujon420@gmail.com
              </p>
              <p>
                <strong>Currently At:</strong> ApDux.
              </p>
              <p>
                <strong>City:</strong> Kolkata
              </p>
              <p>
                <strong>Location:</strong> West Bengal, India
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>
                <strong>Birthdate:</strong> 13th Dis, 2002
              </p>
              <p>
                <strong>Last Degree:</strong> BSc
              </p>
              <p>
                <strong>Current Project:</strong> Selfheand
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-4 text-justify">
            I am from a small village. I am an average student in my class and
            very enthusiastic about technology, curious about how technology is
            growing much faster. I practised a lot, and now those practices help
            me a lot to grow up in my career, and now my habit has changed to
            Eat-Drink-sleep-Programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
