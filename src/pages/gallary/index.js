
import React, { useEffect, useState } from "react";
import "./home.css";
import Card from "../../components/card/card";
import FilterComponent from "../../components/Filter";
import data from "./data";
import { filterOptions } from "../../constants";

const Gallary = () => {
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
        {result && result.length ? (
          result?.map((item) => {
            return <Card {...item} />;
          })
        ) : (
          <span className="no-data">
            Currenlty there is no any image available!!! Wait will uploading
            soon ...
          </span>
        )}
      </div>
    </>
  );
};

export default Gallary;
