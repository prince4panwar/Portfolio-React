import React from "react";
import workData from "./workobj"; // Import workData array

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>

      <div className="work__container bd-grid">
        {workData.map((project) => (
          <a key={project.id} href={project.link} className="work__img">
            <img src={project.imageSrc} alt={project.title} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
