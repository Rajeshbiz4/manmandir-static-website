import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";
import footerLogo from "../../assets/manmanir.jpeg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
          
      <div class="footer_section">
         <div class="">
            <div class="footer_location_text">
               <ul style={{ display: 'flex'}}>
                  <li><img src="images/map-icon.png"/><span class="padding_left_10"><a href="#">Shrushti Chowk, Prabhat Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061</a></span></li>
                  <li><img src="images/call-icon.png"/><span class="padding_left_10"><a href="#">Call : +7586656566</a></span></li>
                  <li><img src="images/mail-icon.png"/><span class="padding_left_10"><a href="#">demo@gmail.com</a></span></li>
               </ul>
            </div>
         </div>
      </div>
     
    </>
  );
};

export default Footer;
