import React from "react";
import { useTranslation } from "react-i18next";
import "./homepage.css";
import Products from "./products";
import Branches from "./branches";
import CarouselPage from '../../components/carosal';
import About from '../about';
import Contact from "../contact";
import Footer from "../../components/footer";

const Home = () => {
  const { t } = useTranslation();
  console.log("t", t("welcome"));
  const url =
    "https://thetimberguy.com/cdn/shop/products/Wooden-Temple-Puja-ghar-mandir-for-home_793a247b-21d1-4f4d-bf02-47e5c333d44e_800x.jpg?v=1631038094";
  return (
    <div>
     
      <CarouselPage />
      <About />
      <Products />
      <Branches />
      <Contact />
    
    
   
     
    </div>
  );
};

export default Home;
