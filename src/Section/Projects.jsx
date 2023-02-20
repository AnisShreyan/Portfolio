import React from "react";
import ProjectsCard from "./Components/ProjectsCard";

function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h2>Projects...</h2>
        <div className="projects-container">
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
