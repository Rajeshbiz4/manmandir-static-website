import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div class="footer_section">
        <div class="">
          <div class="footer_location_text" id="footer_sec">
            <ul style={{ display: "flex" }} id="footer_ui">
              <li>
                <img src="images/map-icon.png" />
                <span class="padding_left_10">
                  <a href="#">
                    Mahalaxni Furniture Shrushti Chowk, Prabhat Nagar, Pimple Gurav,
                    Pimpri-Chinchwad, Maharashtra 411061
                  </a>
                </span>
              </li>
              <li>
                <img src="images/call-icon.png" />
                <span class="padding_left_10">
                  <a href="#">Call : +91 9921970831</a>
                </span>
              </li>
              <li>
                <img src="images/mail-icon.png" />
                <span class="padding_left_10">
                  <a href="#">dattaSul28@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
