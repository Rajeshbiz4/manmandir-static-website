import React from "react";
import contatBanner from "../../assets/contat-banner.png";
import ContactUsMap from "../../components/contat-us-mpa";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <img src={contatBanner} alt="" height={200} width="100%" />
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p>
          Contact us through the form below and wait for us to get back to you.
        </p>
      </div>

      <div class="container">
        <input
          className="input-class"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className="input-class"
          type="email"
          id="email"
          name="email"
          placeholder="Mobile"
          required
        />
        <input
          className="input-class"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          className="input-class"
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </div>
      {/* <ContactUsMap /> */}
    </div>
  );
};

export default Contact;
