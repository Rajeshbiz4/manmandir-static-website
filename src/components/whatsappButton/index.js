import React from "react";
import "./whatsappButton.css";
import wpicon from "../../assets/whatsapp-11.png";

const WhatsAppButton = () => {
  const phoneNumber = "+91 9921970831"; // Replace with the desired phone number
  const customMessage = "Hello, I am enquiring about furniture.";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${customMessage}`;

  return (
    <div class="whatsapp-sticky">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={wpicon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
