import React from "react";
import "../homepage.css";
import d from "../../../assets/download.png";

const Branches = () => {
  const products = ["PIMPLE GURAV", "SANGVI", "ALANDI", "BHOSARI"];
  return (
    <div>
        <h1 class="design_taital" style={{paddingTop : '100px'}}> We are servicing from following Locations </h1>
      <div class="product-container">
        {products.map((item, index) => {
          return (
            <div class="col-md-4">
            <div class="box_main">
               <div class="image_3" href="#"><img src="images/img-3.png" /></div>
               <p class="chair_text">Price $100</p>
            </div>
         </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branches;
