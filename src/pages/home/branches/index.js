import React from "react";
import "../homepage.css";
import d from "../../../assets/download.png";

const Branches = () => {
  const products = [
    {key: "PIMPLE GURAV", contact: "SURAJ SIR", Mobile: "9503907131" ,address: "Pimple Saudagar Road, Pimple Gurav, Pune - 411061 (Near Sudarshan Nagar,Shrushti Chowk)", img:'images/branch.png'},
    {key: "SANGVI", contact: "DHANAGI WAWARE", Mobile: "9503907131" ,address: "Pimple Saudagar Road, Pimple Gurav, Pune - 411061 (Near Sudarshan Nagar,Shrushti Chowk)",img:'images/branch.png' },
    {key: "ALANDI", contact: "SWAPNIL KALE", Mobile: "9503907131" ,address: "Pimple Saudagar Road, Pimple Gurav, Pune - 411061 (Near Sudarshan Nagar,Shrushti Chowk)", img:'images/branch.png'},
    {key: "BHOSARI", contact: "NILESH SUL", Mobile: "9503907131" ,address: "Pimple Saudagar Road, Pimple Gurav, Pune - 411061 (Near Sudarshan Nagar,Shrushti Chowk)",img:'images/branch.png' }
  ]
  return (
    <div>
        <h1 class="design_taital" > We are servicing from following Locations </h1>
      <div class="product-container">
        {products.map((item, index) => {
          return (
            <div class="col-md-4">
            <div class="box_main">
            <p class="chair_text">{item.key}</p>
               <div class="image_3" href="#"><img src={item.img} /></div>
               <p class="chair_text"><b>Contact:</b>{item.contact}</p>
               <p class="chair_text">{item.Mobile}</p>
               <p class="chair_text"><b>Address:</b> {item.address}</p>
            </div>
         </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branches;
