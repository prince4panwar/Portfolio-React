import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Menu } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    const aboutImage = document.querySelector(".about__img");
    const skills = document.querySelectorAll(".skill-image");

    if (isDarkMode) {
      aboutImage.style.border = "";
      skills.forEach((skill) => {
        skill.style.border = "";
      });
    } else {
      aboutImage.style.border = "1px solid white";
      aboutImage.style.borderRadius = "5px";
      skills.forEach((skill) => {
        skill.style.border = "1px solid white";
      });
    }

    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className={`l-header ${isDarkMode ? "dark-mode" : ""}`}>
      <nav className="nav bd-grid">
        <div>
          <a href="/" className="nav__logo">
            Portfolio
          </a>
        </div>

        <div className="bulb-icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun /> : <Moon />}
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeSection === "skills" ? "active" : ""
                }`}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                className={`nav__link ${
                  activeSection === "work" ? "active" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
