import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Project 1", description: "Description of project 1" },
    { name: "Project 2", description: "Description of project 2" },
  ];

  return (
    <section id="projects" className="py-10 bg-primary text-gray-800 ">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-secondary mb-4 text-center">
          Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="p-5 bg-primary shadow-sh-1 rounded-lg">
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
