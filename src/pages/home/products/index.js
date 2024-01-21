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
    <div >
         <h1 class="design_taital" style={{paddingTop : '100px'}}> We are dealing with following Products </h1>
      <div class="product-container">
        
        {products.map((item, index) => {
          return (
            <div class="col-md-4">
            <div class="box_main">
               <p class="chair_text">Chair 01</p>
               <div class="image_3" href="#"><img src="images/img-3.png" /></div>
               <p class="chair_text">Price $100</p>
               <div class="buy_bt"><a href="#">Buy Now</a></div>
            </div>
         </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
