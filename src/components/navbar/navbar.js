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
         
      <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
               <a class="logo" href="index.html"><img src="images/logo.png" alt="" /></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="design.html">Products</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="design.html">Gallary</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
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
