import React from 'react'
// import ytClone from "./imgs/yt.png"

function ProjectsCard(props) {
  return (
    <>
    <a href={props.link} target='_blank'>
    <div className="projects-cards">
        <img src={props.image} />
        <h3>{props.name}</h3>
    </div>
    </a>
    </>
  )
}

export default ProjectsCard;