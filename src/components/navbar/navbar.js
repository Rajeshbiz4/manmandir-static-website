import { NavLink } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switch";

const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const { t } = useTranslation();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <LanguageSwitcher />
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <i class="fa fa-home" aria-hidden="true"></i>&nbsp;
              {t("manmandir")}
              {/* <i className="fa fa-code"></i> */}
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("home")}
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/gallary"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("gallary")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("contact")}
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Login
                </NavLink>
              </li> */}
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
