import React from "react";
import "../homepage.css";
import d from "../../../assets/download.png";

const Branches = () => {
  const products = ["PIMPLE GURAV", "SANGVI", "ALANDI", "BHOSARI"];
  return (
    <div>
      <div className="section-Heading">OUR BRANCHES</div>
      <div class="product-container">
        {products.map((item, index) => {
          return (
            <div class="item" key={index}>
              <img src={d} alt="" height={200} width={200} />
              <div className="product-name">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branches;
