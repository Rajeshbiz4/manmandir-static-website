import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";
import footerLogo from "../../assets/manmanir.jpeg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div class="footer-content">
        <div className="left">
          <div>
            <img className="footer-logo" src={footerLogo} alt="" height={200} />
          </div>
        </div>
        <div className="right">
          <h3>{t("getintouch")}</h3>

          <ul class="contact">
            <li class="add">{t("footerAddress")}</li>
            <br />
            <br />
            <br />
            <li>{t("mobile")}</li>
            <br />
            <li>manmandir@gmail.com</li>
          </ul>
          {/* <ul class="socials">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          {/* <a href="#">copyright &copy; 2023. All Rights reserved</a>{" "} */}
        </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li>
              <a href="">{t("home")}</a>
            </li>
            <li>
              <a href="">{t("gallary")}</a>
            </li>
            <li>
              <a href="">{t("contact")}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
