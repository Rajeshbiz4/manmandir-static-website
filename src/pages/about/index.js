import React from "react";

const About = () => {
  return (
    <>
      <div class="about_section layout_padding" id="about">
        <div class="container">
          <div class="about_section_2">
            <div class="row">
              <div class="col-md-6" id="about">
                <div class="image_2">
                  <img src="images/abcd.jpg" />
                </div>
              </div>
              <div class="col-md-6" id="about">
                <h1 class="about_taital">About Us</h1>
                <p class="about_text">
                  {" "}
                  At ManMandir, we believe in the seamless integration of
                  spiritual sanctity and tasteful living. As a renowned
                  wholesaler and retailer, we offer a diverse range of products,
                  catering to both the spiritual and aesthetic needs of our
                  cherished customers. Our offerings encompass exquisite God
                  temple wholesale options and a wide selection of furniture
                  that can transform your living spaces.
                </p>
                <div class="readmore_bt">
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="col-md-6" id="about">
                <h1 class="about_taital">GOD TEMPLE</h1>
                <p class="about_text">
                  {" "}
                  A sales shop offering a divine selection of religious and
                  spiritual items, providing a sacred space for customers to
                  find meaningful and inspirational products for their spiritual
                  journeys."
                </p>
                <div class="readmore_bt">
                  <a href="/gallary">VIEW GALLARY</a>
                </div>
              </div>

              <div class="col-md-6" id="about">
                <h1 class="about_taital">HOME FURNITURE</h1>
                <p class="about_text">
                  {" "}
                  A one-stop destination for stylish and functional furniture
                  solutions, offering a curated collection to enhance the
                  comfort and aesthetic of your living space. Discover a range
                  of sofas, beds, wardrobes, tables, and more to transform your
                  home into a cozy and personalized haven."
                </p>
                <div class="readmore_bt">
                  <a href="/gallary">VIEW GALLARY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
