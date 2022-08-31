import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const isEditingHandler = (event) => {
    event.preventDefault();

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setIsEditing((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  if (!isEditing) {
    return (
      <div className="expense-form-toggler">
        <button onClick={isEditingHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form-field">
        <label>Title</label>
        <input
          type="text"
          required
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="expense-form-field">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          required
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expense-form-field">
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
          required
        />
      </div>
      <div className="expense-form-action">
        <button type="button" onClick={isEditingHandler}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
