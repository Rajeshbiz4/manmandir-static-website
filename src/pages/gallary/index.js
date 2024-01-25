
import React, { useEffect, useState } from "react";
import "./home.css";
import FilterComponent from "../../components/Filter";
import data from "./data";
import { filterOptions } from "../../constants";

const Gallary = () => {
  const [filter, setFilter] = useState(filterOptions[0]);
  const [result, setResult] = useState();
  useEffect(() => {
    setResult(data.filter((item) => item.type === filter));
  }, [filter]);

  return (
    <>
    <div style={{ height: '100px'}}></div>
      <FilterComponent onFilter={setFilter} />
      
        {result && result.length ? (
          <div class="flex-container">
          {result?.map((item) => {
            return (<div class="col-md-4">
            <div class="box_main">
               <p class="chair_text">{item.title}</p>
               <div class="image_3" href="#"><img src={item.url} alt=""/></div>
               <p class="chair_text">{item.desc}</p>
               {/* <div class="buy_bt"><a href="/gallary">view more</a></div> */}
            </div>
         </div>)
          })}
          </div>) : (
          <div className="no-data" style={{ height: '50vh'}}>
            Currenlty there is no any image available!!! Wait will uploading
            soon ...
          </div>
        )}
    
    </>
  );
};

export default Gallary;
