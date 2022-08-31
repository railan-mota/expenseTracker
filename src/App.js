import React, { useState } from "react";

import Container from "./components/UI/Container";
import ExpenseApp from "./components/Expenses/ExpenseApp";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpenses = [
  { id: "e3", title: "Shoes", amount: 120.33, date: new Date(2022, 11, 23) },
  { id: "e4", title: "Screen", amount: 150.33, date: new Date(2022, 11, 15) },
  {
    id: "e1",
    title: "Computer",
    amount: 150.33,
    date: new Date(2021, 11, 15),
  },
  { id: "e2", title: "Phone", amount: 150.33, date: new Date(2020, 11, 15) },
];

const App = () => {
  const [enteredExpenses, setEnteredExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (newExpenseData) => {
    setEnteredExpenses((prevState) => [newExpenseData, ...prevState]);
  };

  return (
    <Container>
      <ExpenseApp>
        <NewExpense onAddExpenseHandler={addExpenseHandler} />
        <Expenses items={enteredExpenses} />
      </ExpenseApp>
    </Container>
  );
};

export default App;
