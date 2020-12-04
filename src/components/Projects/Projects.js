import "./Projects.css";
import React, { useState } from "react";
import classNames from "classnames";

const Projects = () => {
  const [projectGroup, setProjectGroup] = useState({
    value: "",
  });

  const showingProject = (e) => {
    const projectGroupName = e.target.textContent;
    setProjectGroup({ value: projectGroupName });
  };
  console.log(projectGroup.value);
  const groupNames = ["Mern", "React", "Html & CSS", "JavaScript", "All"];

  return (
    <section id="projects">
      <div style={{ height: "75px" }}></div>
      <h1 className="heading"> Projects</h1>
      <div className="triangle-down"></div>
      <div className="projects-type">
        <h2 onClick={showingProject} className="project-type-heading">
          {groupNames.map((group) => (
            <span
              className={classNames({
                active: projectGroup.value === group,
              })}
              key={groupNames.indexOf(group)}
            >
              {group}
            </span>
          ))}
        </h2>
        <h2>Here will I add my projects</h2>
      </div>
      <div className="projects"></div>
    </section>
  );
};

export default Projects;
<h1 className="heading"> Projects</h1>;
