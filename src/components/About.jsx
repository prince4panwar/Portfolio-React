import React from "react";
import AboutPic from "../images/profile-img/coding.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div class="about__container bd-grid">
        <div class="about__img">
          <img src={AboutPic} alt="" />
        </div>

        <div>
          <p class="about__text">
            Hi👋, My name is <b>Prince Panwar</b>. I'm a{" "}
            <b>front-end web developer</b> with 1 year of experience in building
            web applications. I work mainly with <b>React.js</b> and{" "}
            <b>TypeScript</b> to create responsive and user-friendly
            applications.
          </p>
          <p>
            As my core expertise lies in React, where I focus on writing
            scalable, maintainable, and type-safe code.
          </p>
          <br />
          <p>
            Alongside React, I use <b>Jest</b> for unit testing, helping catch
            bugs early and ensuring components work as intended.
          </p>
          <br />
          <p>
            Being part of a small team has given me the chance to handle
            different responsibilities, improve problem-solving, and deliver
            applications that work in real use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
