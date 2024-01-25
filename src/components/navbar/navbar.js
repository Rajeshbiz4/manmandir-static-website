import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import "./navbar.css";
import im from './images.png';

const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const { t } = useTranslation();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className="header_section">
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container" id="navbar-head">

            <a class="navbar-brand logo" href="/#">
         
              ManMandir
            </a>
            

                       
            <span
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}>
              <span className="navbar-toggler-icon">
              <img src={im} alt="" />
              </span>
            </span> 

            <div
              className={`collapse navbar-collapse ${click ? "show" : ""}`}
              id="navbarSupportedContent">
              <ul className="navbar-nav navbar-list"  onClick={handleClick}>
                <li class="nav-item" >
                  <a class="nav-link" href="/#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#products">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gallary">
                    Gallary
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
