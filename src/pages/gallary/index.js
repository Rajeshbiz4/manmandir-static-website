import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./home.css";
import Card from "../../components/card/card";
import FilterComponent from "../../components/Filter";
import data from "./data";

const Gallary = () => {
  const filterOptions = ["SAGVAN", "SHISAM"];
  const [filter, setFilter] = useState(filterOptions[0]);
  const [result, setResult] = useState();
  useEffect(() => {
    console.log("filter", filter);
    setResult(data.filter((item) => item.type === filter));
  }, [filter]);

  return (
    <>
      <FilterComponent onFilter={setFilter} />
      <div class="flex-container">
        {result?.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </>
  );
};

export default Gallary;
