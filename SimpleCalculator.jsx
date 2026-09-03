import { useState } from "react";
import "./Project.css";

function Project() {
  const [display, setDisplay] = useState("");

  // Number and operator buttons
  const handleClick = (value) => {
    if (display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  // Clear everything
  const clearDisplay = () => {
    setDisplay("");
  };

  // Backspace
  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  // Positive / Negative
  const toggleSign = () => {
    if (display === "") return;

    if (display.startsWith("-")) {
      setDisplay(display.substring(1));
    } else {
      setDisplay("-" + display);
    }
  };

  // Calculate percentage
  const percentage = () => {
    if (display === "") return;

    try {
      const result = eval(display) / 100;
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  // Calculate result
  const calculate = () => {
    if (display === "") return;

    try {
      const expression = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/");

      const result = eval(expression);

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">

      {/* Calculator Display */}
      <div className="display">
        {display || "0"}
      </div>

      {/* Calculator Buttons */}
      <div className="buttons">

        {/* Row 1 */}
        <button className="function-btn" onClick={clearDisplay}>
          AC
        </button>

        <button className="function-btn" onClick={backspace}>
          ⌫
        </button>

        <button className="function-btn" onClick={toggleSign}>
          +/−
        </button>

        <button
          className="operator-btn"
          onClick={() => handleClick("÷")}
        >
          ÷
        </button>

        {/* Row 2 */}
        <button onClick={() => handleClick("7")}>7</button>

        <button onClick={() => handleClick("8")}>8</button>

        <button onClick={() => handleClick("9")}>9</button>

        <button
          className="operator-btn"
          onClick={() => handleClick("×")}
        >
          ×
        </button>

        {/* Row 3 */}
        <button onClick={() => handleClick("4")}>4</button>

        <button onClick={() => handleClick("5")}>5</button>

        <button onClick={() => handleClick("6")}>6</button>

        <button
          className="operator-btn"
          onClick={() => handleClick("-")}
        >
          −
        </button>

        {/* Row 4 */}
        <button onClick={() => handleClick("1")}>1</button>

        <button onClick={() => handleClick("2")}>2</button>

        <button onClick={() => handleClick("3")}>3</button>

        <button
          className="operator-btn"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        {/* Row 5 */}
        <button onClick={percentage}>%</button>

        <button onClick={() => handleClick("0")}>0</button>

        <button onClick={() => handleClick(".")}>.</button>

        <button className="equal-btn" onClick={calculate}>
          =
        </button>

      </div>
    </div>
  );
}

export default Project;
