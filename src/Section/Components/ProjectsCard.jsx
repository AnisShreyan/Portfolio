import React from 'react'
import ytClone from "./imgs/yt.png"

function ProjectsCard() {
  return (
    <>
    <a href="https://yt-clone.anis.ink/" target='_blank'>
    <div className="projects-cards">
        <img src={ytClone} />
        <h3>YouTube Clone</h3>
    </div>
    </a>
    </>
  )
}

export default ProjectsCard;