import React from "react";
import contatBanner from "../../assets/contat-banner.png";
import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div class="contact_section layout_padding" id="contact">
        <div style={{ width : "90%",   margin: '0 auto'}}>
          <div class="contact_section_2">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mail_section_1">
                  <h1 class="contact_taital">Contact Us</h1>
                  <input
                    type="text"
                    class="mail_text"
                    id="input"
                    placeholder="Name"
                    name="text"
                  />
                  <input
                    type="text"
                    class="mail_text"
                    id="input"
                    placeholder="Email"
                    name="text"
                  />
                  <input
                    type="text"
                    class="mail_text"
                    id="input"
                    placeholder="Phone Number"
                    name="text"
                  />
                  <textarea
                    class="massage-bt"
                    placeholder="Massage"
                    rows="5"
                    id="comment"
                    name="Massage"></textarea>
                  <div class="send_bt">
                    <a href="#">SEND</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="map_main">
                  <div class="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Shrushti Chowk, Prabhat Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061"
                      width="600"
                      height="360"
                      frameborder="0"
                      style={{ border: 0, width: "100%" }}
                      allowfullscreen=""></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
