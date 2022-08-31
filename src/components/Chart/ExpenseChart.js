import React from "react";

import ChartItem from "./ChartItem";

import "./ExpenseChart.css";

const ExpenseChart = (props) => {
  const data = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Fev",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const item of props.items) {
    const itemMonth = item.date.getMonth();
    data[itemMonth].value += item.amount;
  }

  console.log(data);

  const amountNum = data.map((a) => a.value);
  console.log(amountNum);
  const totalMaxixum = amountNum.reduce((a, b) => a + b);
  console.log(totalMaxixum);

  return (
    <div className="chart">
      {data.map((data) => {
        return (
          <ChartItem
            label={data.label}
            key={data.label}
            maxValue={totalMaxixum}
            value={data.value}
          />
        );
      })}
    </div>
  );
};

export default ExpenseChart;
