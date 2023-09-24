import React from "react";
import contatBanner from "../../assets/contat-banner.png";
import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <img src={contatBanner} alt="" height={200} width="100%" />
      <div className="contact-container">
        <h1> {t("contact")}</h1>
        <p>{t("contact-desc")}</p>
      </div>

      <div class="container">
        <input
          className="input-class"
          type="text"
          id="name"
          name="name"
          placeholder={t("c-name")}
          required
        />

        <input
          className="input-class"
          type="email"
          id="email"
          name="email"
          placeholder={t("c-mobile")}
          required
        />
        <input
          className="input-class"
          type="email"
          id="email"
          name="email"
          placeholder={t("c-email")}
          required
        />

        <textarea
          className="input-class"
          id="message"
          name="message"
          rows="4"
          placeholder={t("C-message")}
          required
        ></textarea>

        <button type="submit"> {t("c-submit")}</button>
      </div>
    </div>
  );
};

export default Contact;
