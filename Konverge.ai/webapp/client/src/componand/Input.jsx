import React, { useState } from "react";
import "./input.css";

function Input() {
  const [age, setAge] = useState();
  const [income, setIncome] = useState();
  const [score, setScore] = useState();

  const handleSumit = (e) => {};

  return (
    <div className="all-page">
      <div className="user-input">
        <h2>Customer Details</h2>
        <form onSubmit={handleSumit}>
          <div className="main-form-container">
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter a Age"
              min="1"
            />
            <input
              type="number"
              onChange={(e) => {
                setIncome(e.target.value);
              }}
              value={income}
              placeholder="Enter the Income"
              min="1"
            />
            <input
              type="number"
              onChange={(e) => {
                setScore(e.target.value);
              }}
              value={score}
              placeholder="Enter the Spanding Score"
              min="1"
              max="100"
            />
            <button type="sumit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
