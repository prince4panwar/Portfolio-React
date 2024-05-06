import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer" data-scroll-section>
      <div>
        <p className="footer__title">It's great to have you here</p>
        <p className="footer__title">Thank you for visiting!</p>
        <p className="footer__title">I'd love to connect.</p>
      </div>
      <div className="footer__social">
        <a href="/" className="footer__icon">
          <Facebook />
        </a>
        <a href="/" className="footer__icon">
          <i></i>
          <Instagram />
        </a>
        <a href="https://twitter.com/prince4panwar" className="footer__icon">
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/princepanwar4/"
          className="footer__icon"
        >
          <Linkedin />
        </a>
        <a href="https://github.com/prince4panwar" className="footer__icon">
          <Github />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
