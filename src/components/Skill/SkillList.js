import { Grid } from "@material-ui/core";
import React from "react";
import "./SkillList.css";

const SkillList = ({ skills, level }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      style={{ margin: "0 auto" }}
      className="skills-container"
    >
      <h2 className="heading2">{level}</h2>
      <div className="triangle-down"></div>
      <ul className="list-container">
        {skills.map((skill) => (
          <li style={{ listStyleType: "none", padding: "10px" }} key={skill.id}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default SkillList;
