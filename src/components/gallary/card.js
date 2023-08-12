import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import "./home.css";
import myimg from "../../assets/abc.png";

const Card = () => {
  return (
    <figure class="snip1527 hover">
      <div class="image">
        <img src={myimg} alt="pr-sample24" />
      </div>
      <figcaption>
        <div class="date">
          <span class="day">3.5</span>
          <span class="month">KG</span>
        </div>
        <h3>Sagwan mandir</h3>
        <p>15" x 9" x 21'' Burma Teakwood Temple (Natural Polish)</p>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
};

export default Card;
