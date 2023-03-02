import React from "react";
import ProjectsCard from "./Components/ProjectsCard";
import ytClone from "./Components/imgs/yt.png";
import bookify from "./Components/imgs/bookify.png";

function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h2>Projects...</h2>
        <div className="projects-container">
          <ProjectsCard
            name={"YouTube Clone"}
            link={"https://yt-clone.anis.ink/"}
            image={ytClone}
          />
          <ProjectsCard
            name={"Firebase Book Store"}
            link={"https://github.com/AnisShreyan/Bookify-React-Firebase"}
            image={bookify}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
