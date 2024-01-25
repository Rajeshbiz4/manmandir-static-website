import React, { useState } from "react";
import "./filter.css";
import { filterOptions } from "../../constants";

const FilterComponent = ({ onFilter }) => {
  // const filterOptions = ["SAGVAN", "SHISAM"];
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onFilter(selectedValue);
  };

  
  return (
    <div className="flex-container">
      {filterOptions.map((item) => {
        return (
          <label className="radio-button">
            <input
              type="radio"
              value={item}
              checked={selectedOption === item}
              onChange={handleOptionChange}
            />
            &nbsp;&nbsp;{item}
          </label>
        );
      })}
    </div>
  );
};

export default FilterComponent;
