import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from "../../assets/download.jpg";
import "./Carousel.css";
const CarouselPage = () => {
  const products = [
    {
      key: "SAGVAN MANDIR",
      Value:
        "A sacred space made from Sagwan wood, designed for religious or spiritual practices.",
      img: "images/img-6.png",
    },

    {
      key: "SHISAM MANDIR",
      Value:
        "A prayer or meditation area crafted from Sheesham wood, known for its durability and beautiful grain.",
      img: "images/img-4.png",
    },

    {
      key: "SOFA SET",
      Value:
        "A comfortable ensemble of sofas and chairs, perfect for lounging and relaxation in the living room.",
      img: "images/img-6.png",
    },

    {
      key: "BED",
      Value:
        "A cozy furniture piece for sleeping, typically consisting of a mattress on a bed frame.",
      img: "images/img-6.png",
    },

    {
      key: "WARDROBE",
      Value:
        "A tall cabinet with compartments for organized storage of clothes and personal items.",
      img: "images/img-6.png",
    },

    {
      key: "TABLE",
      Value:
        "A flat-surfaced piece of furniture with legs, used for various activities like dining, working, or displaying items.",
      img: "images/img-6.png",
    },
  ];

  return (
    <Carousel>
      {products.map((item) => {
        return (
          <div class="banner_section layout_padding" id="Carousel">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" id="slider">
                <div class="carousel-item active" style={{ marginTop: "40px" }}>
                  <div class="container" id="item_1">
                    <div class="row">
                      <div class="col-md-4 col-sm-4">
                        <h1 class="banner_taital">{item.key}</h1>
                        <p class="banner_text">{item.Value} </p>
                        <div class="btn_main">
                          <div class="contact_bt">
                            <a href="#">View Gallary</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-8 col-sm-8 photo">
                        <div class="image_1" id="photos">
                          <img src={item.img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
export default CarouselPage;
