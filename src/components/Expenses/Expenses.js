import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter
        items={filterExpenses}
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filterExpenses} />
    </div>
  );
};

export default Expenses;
