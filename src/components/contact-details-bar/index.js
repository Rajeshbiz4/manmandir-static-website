import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import React from "react";
import "./bar-style.css";

const ContactDetailBar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav
        style={{ height: "30px" }}
        className="navbar redmi"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container">
          <div className="item">
            <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;+91-9503907131
          </div>
          <div className="item">
            <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
            &nbsp;manmandir@gmail.com
          </div>
          <div className="item">
            <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Pimple
            Gurav
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContactDetailBar;
