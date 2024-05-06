import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form
          action="mailto:princepanwar420420@gmail.com"
          method="post"
          className="contact__form"
        >
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="mail" placeholder="Email" className="contact__input" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="0"
            rows="10"
            className="contact__input"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="contact__button button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
