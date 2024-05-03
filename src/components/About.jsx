import React from "react";
import AboutPic from "../images/profile-img/about.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={AboutPic} alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">I'm Prince Panwar</h2>
          <p className="about__text">
            Hi there 👋, I'm Prince Panwar, a highly skilled full stack
            developer with a wide range of expertise in web development and
            programming. I have a strong foundation in essential web
            technologies such as HTML, CSS, and JavaScript. I have built a
            reputation for delivering innovative and functional web solutions. I
            have created various projects.
          </p>
          <p>
            I have also won two trophies 🏆 in debugging competitions, securing
            3rd and 2nd positions respectively. These achievements have
            instilled in me a sense of discipline and perseverance, which I
            bring to every project I work on. I am excited to bring my skills
            and experience to a new role and contribute to a team of developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
