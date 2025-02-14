import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  async function handleCalculate(operation) {
    const params = new URLSearchParams({
      num1: num1 || 0,
      num2: num2 || 0,
    });

    const response = await fetch(`http://localhost:5001/${operation}`, {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await response.json();
    const result = data.result;
    setResult(result);

    console.log("result from backend: ", result);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Calculator</h1>

        <div className="section">
          <label htmlFor="num1">First number:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>
        <div className="section">
          <label htmlFor="num2">Second number:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <div className="button-container">
          <button id="add" onClick={() => handleCalculate("add")}>
            Add
          </button>
          <button id="subtract" onClick={() => handleCalculate("subtract")}>
            Subtract
          </button>{" "}
        </div>

        <div className="result">
          <text style={{ fontFamily: "Saira" }}>Result: </text>
          <text style={{ fontWeight: "bold" }}>{result} </text>
        </div>
      </div>
    </div>
  );
}

export default App;
