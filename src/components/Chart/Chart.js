import react from "react";

import ExpenseChart from "./ExpenseChart";

const Chart = (props) => {
  if (props.items.length === 0) {
    return <div></div>;
  } else {
    return <ExpenseChart items={props.items} />;
  }
};

export default Chart;
