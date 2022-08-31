import React from "react";
import "./ExpenseApp.css";

const ExpenseApp = (props) => {
  const classes = "expense-app " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default ExpenseApp;
