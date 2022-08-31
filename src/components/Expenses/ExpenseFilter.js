import React from "react";

import Chart from "../Chart/Chart";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  console.log(props.items.length);

  return (
    <div>
      <div className="filter">
        <span>Filter By Year</span>
        <select
          value={props.selected}
          name="year"
          id="year"
          onChange={changeYearHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <Chart items={props.items} />
    </div>
  );
};

export default ExpenseFilter;
