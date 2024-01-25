import React from "react";
import "../homepage.css";

const Products = () => {
  const url =
    "https://thetimberguy.com/cdn/shop/products/Wooden-Temple-Puja-ghar-mandir-for-home_793a247b-21d1-4f4d-bf02-47e5c333d44e_800x.jpg?v=1631038094";
    const products = [
      { key: "SAGVAN MANDIR", Value : 'A sacred space made from Sagwan wood, designed for religious or spiritual practices.', img: 'images/abcd.jpg'},
   
       {key:"SHISAM MANDIR", Value: "A prayer or meditation area crafted from Sheesham wood, known for its durability and beautiful grain.", img: 'images/abcd.jpg'},
       
       {key:"SOFA SET", Value: "A comfortable ensemble of sofas and chairs, perfect for lounging and relaxation in the living room.", img: 'images/abcd.jpg'},
       
       {key:"BED" , Value: "A cozy furniture piece for sleeping, typically consisting of a mattress on a bed frame.", img: 'images/abcd.jpg'},
       {key:"WARDROBE", Value: "A tall cabinet with compartments for organized storage of clothes and personal items.",img: 'images/abcd.jpg'},
       
       {key:"TABLE", Value: "A flat-surfaced piece of furniture with legs, used for various activities like dining, working, or displaying items.",img: 'images/abcd.jpg'}]
  return (
    <div class="about_section layout_padding" id="products">
         <h1 class="design_taital"> We are dealing with following Products </h1>
      <div class="product-container" >
        
        {products.map((item, index) => {
          return (
            <div class="col-md-4">
            <div class="box_main">
               <p class="chair_text">{item.key}</p>
               <div class="image_3" href="#"><img src={item.img}/></div>
               <p class="chair_text">{item.Value}</p>
               <div class="buy_bt"><a href="/gallary">view more</a></div>
            </div>
         </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
