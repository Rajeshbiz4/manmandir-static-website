import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img from '../../assets/download.jpg';

const CarouselPage = () => {
  return (
    <Carousel>
      <div class="banner_section layout_padding">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">




            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h1 class="banner_taital">Best Design of Furnitur</h1>
                    <p class="banner_text">It is a long established fact that a reader will bedistracted by the readable content of  It is a long established fact that a reader will bedistracted by the readable content of </p>
                    <div class="btn_main">
                      <div class="contact_bt"><a href="#">Contact US</a></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="image_1"><img src="images/img-1.png" /></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="banner_section layout_padding">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">




            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h1 class="banner_taital">Best <br /> Design <br />of Furnitur</h1>
                    <p class="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                    <div class="btn_main">
                      <div class="contact_bt"><a href="#">Contact US</a></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="image_1"><img src="images/img-1.png" /></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="banner_section layout_padding">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">




            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h1 class="banner_taital">Best <br /> Design <br />of Furnitur</h1>
                    <p class="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                    <div class="btn_main">
                      <div class="contact_bt"><a href="#">Contact US</a></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="image_1"><img src="images/img-1.png" /></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default CarouselPage