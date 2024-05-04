import React from "react";
import skillsData from "./skillobj"; // Import the skills data array

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="skill-boxes">
        {skillsData.map((skill) => (
          <div className="skill-image" key={skill.id}>
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
