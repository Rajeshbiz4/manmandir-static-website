// src/components/LanguageSwitcher.js

import React from "react";
import { useTranslation } from "react-i18next";
import "./language-switch.css";
import { languages } from "../../constants";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-container">
      {languages.map((item) => (
        <a className="language-item" onClick={() => changeLanguage(item.key)}>
          {item.value}
        </a>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
