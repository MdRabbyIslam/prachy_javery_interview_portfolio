import { Grid } from "@material-ui/core";
import React from "react";
import { skills } from "../Data/Data";
import "./Skill.css";
import SkillList from "./SkillList";

const Skill = () => {
  console.log(skills);
  const expertSkills = skills.filter((ele) => ele.level === "expertise");
  console.log(expertSkills);
  const comfortableSkills = skills.filter((ele) => ele.level === "comfortable");
  const familiarSkills = skills.filter((ele) => ele.level === "familiar");
  return (
    <section className="skills" id="skills">
      <h1 className="heading"> My Skills </h1>
      <div className="triangle-down"></div>
      <Grid container className="skills-list-container">
        <SkillList skills={expertSkills} level="expert"></SkillList>
        <SkillList skills={comfortableSkills} level="comfortable"></SkillList>
        <SkillList skills={familiarSkills} level="familiar"></SkillList>
      </Grid>
    </section>
  );
};

export default Skill;
