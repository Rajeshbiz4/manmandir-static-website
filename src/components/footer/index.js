import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import "./footer.css";
import footerLogo from "../../assets/manmanir.jpeg";

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <div className="left">
          <div>
            <img className="footer-logo" src={footerLogo} alt="" height={200} />
          </div>
        </div>
        <div className="right">
          <h3>GET IN TOUCH</h3>

          <ul class="contact">
            <li class="add">
              Office no. 101, First floor, Silver point building, Katraj -
              Kondhwa Rd, near Vishwa gym, Katraj Pune - 411046
            </li>
            <br />
            <br />
            <br />
            <li>+91 XXXXXXXXXX</li>
            <br />
            <li>manmandir@gmail.com</li>
          </ul>
          <ul class="socials">
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
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          <a href="#">copyright &copy; 2023. All Rights reserved</a>{" "}
        </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallary</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
