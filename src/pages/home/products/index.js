import React from "react";
import "../homepage.css";

const Products = () => {
  const url =
    "https://thetimberguy.com/cdn/shop/products/Wooden-Temple-Puja-ghar-mandir-for-home_793a247b-21d1-4f4d-bf02-47e5c333d44e_800x.jpg?v=1631038094";
  const products = [
    "SAGVAN MANDIR",
    "SHISAM MANDIR",
    "SOFA SET",
    "BED",
    "WARDROP",
    "TABLE"
  ];
  return (
    <div>
      <div className="section-Heading">OUR PRODUCTS</div>
      <div class="product-container">
        {products.map((item, index) => {
          return (
            <div class="item" key={index}>
              <img src={url} alt="" height={200} width={200} />
              <div className="product-name">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
