import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>axelleonide@gmailcom</h5>
            <a
              href="mailto:axelleonide@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5>EkambAcademy</h5>
            <a
              href="https://m.me/EkambAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>004571822908</h5>
            <a
              href="https://api.whatsapp.com/send?phone=004571822908"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Subject" required />
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn__primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
