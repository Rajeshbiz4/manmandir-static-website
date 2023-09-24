import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";
import PostsList from "./postList";
import { useTranslation } from "react-i18next";
import MapComponent from "../../components/map-component";
import "./homepage.css";
import Products from "./products";
import Branches from "./branches";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  console.log("t", t("welcome"));
  const url =
    "https://thetimberguy.com/cdn/shop/products/Wooden-Temple-Puja-ghar-mandir-for-home_793a247b-21d1-4f4d-bf02-47e5c333d44e_800x.jpg?v=1631038094";
  return (
    <div>
      <div className="header-container" style={{ display: "flex" }}>
        <div className="section-left">
          <img src={url} alt="pr-sample24" style={{ height: "450px" }} />
        </div>
        <div className="section-right">
          **Welcome to ManMandir: Your One-Stop Destination for Divine Bliss and
          Home Furnishings**
        </div>
      </div>

      <div className="header-container">
        <div className="text-container">
          At ManMandir, we believe in the seamless integration of spiritual
          sanctity and tasteful living. As a renowned wholesaler and retailer,
          we offer a diverse range of products, catering to both the spiritual
          and aesthetic needs of our cherished customers. Our offerings
          encompass exquisite God temple wholesale options and a wide selection
          of furniture that can transform your living spaces.
          <br />
          <br />
          <br />
          **Our Divine Collection:**
          <br /> <br /> **1. God Temples:** <br />- *Wholesale:* ManMandir is
          your trusted partner for sourcing beautiful and meticulously crafted
          God temples in bulk. Whether you're an entrepreneur looking to start
          your own temple supply business or a devotee searching for the perfect
          temple for your home, our wholesale collection has something for
          everyone. - *Retail:* Explore our retail section to discover a
          stunning array of God temples that are perfect for personal worship or
          enhancing the ambiance of your sacred spaces. From traditional to
          contemporary designs, we offer an extensive selection to cater to your
          unique preferences.
          <br /> <br />
          **2. Furniture:** <br />- At ManMandir, we understand the importance
          of creating harmonious living spaces. Our furniture collection boasts
          a wide variety of pieces, from classic to modern, designed to elevate
          the aesthetics and functionality of your home. Whether it's elegant
          wooden furniture for your living room, stylish dining sets, or
          comfortable bedroom furniture, we have it all.
          <br />
          <br />
          <br />
          **Why Choose ManMandir:** - **Quality Assurance:** We are committed to
          delivering top-notch products that meet the highest standards of
          quality and craftsmanship. - **Variety:** Our extensive range of
          products ensures that you find something that aligns perfectly with
          your taste and requirements. - **Competitive Pricing:** We offer
          competitive prices for our wholesale and retail products, making them
          accessible to a wide range of customers. - **Customer Satisfaction:**
          Your satisfaction is our priority. We strive to provide exceptional
          service and support at every step of your shopping journey. -
          **Experience:** With decades of experience in the industry, ManMandir
          is a name you can trust.
        </div>
        <div className="text-container"></div>
      </div>
      <Products />
      <Branches />
    </div>
  );
};

export default Home;
