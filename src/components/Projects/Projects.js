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

  return (
    <section id="projects">
      <div style={{ height: "75px" }}></div>
      <h1 className="heading"> Projects</h1>
      <div className="triangle-down"></div>
      <div className="projects-type">
        <h2 onClick={showingProject} className="project-type-heading">
          {/* <div style={isMarginNeeded ? {marginTop:10} : {}} />  */}

          <span
            className={classNames({
              active: projectGroup.value === "Mern",
            })}
          >
            Mern
          </span>
          <span
            className={classNames({
              active: projectGroup.value === "React",
            })}
          >
            React
          </span>
          <span
            className={classNames({
              active: projectGroup.value === "Html & CSS",
            })}
          >
            Html & CSS
          </span>
          <span
            className={classNames({
              active: projectGroup.value === "JavaScript",
            })}
          >
            JavaScript
          </span>
          <span
            className={classNames({
              active: projectGroup.value === "All",
            })}
          >
            All
          </span>
        </h2>
      </div>
      <div className="projects"></div>
    </section>
  );
};

export default Projects;
<h1 className="heading"> Projects</h1>;
