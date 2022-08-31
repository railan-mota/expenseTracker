import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="no-expenses">
        <p>No expenses found.</p>
      </div>
    );
  }

  return (
    <ul className="expense-lsit">
      {props.items
        .sort((a, b) => a.date - b.date)
        .map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
    </ul>
  );
};

export default ExpenseList;
