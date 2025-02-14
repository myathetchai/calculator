import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  async function handleCalculate(operation) {
    const params = new URLSearchParams({
      num1: num1 || 0,
      num2: num2 || 0,
    });

    try {
      // sending POST request
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
      console.log("result from backend:", result);
    } catch (error) {
      // handle errors clearly
      console.error("Error during API call to calculator backend:", error);
      alert(
        "An error occurred while performing the calculation. Please try again."
      );
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">CALCULATOR</h1>

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
          </button>
        </div>

        <div className="result">
          <span style={{ fontFamily: "Saira" }}>Result: </span>
          <span style={{ fontWeight: "bold" }}>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
