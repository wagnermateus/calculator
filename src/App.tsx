import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState<string>("");
  const [displaySymbol, setDisplaySymbol] = useState<string>("0");
  const [answer, setAnswer] = useState<string>("0");
  const display = (symbol: string) => {
    const operator = /[÷*+/-]/g;
    if (displaySymbol === "0") {
      setDisplaySymbol("");
    }

    setExpression((prev) => prev + symbol);
    /*if(operator.test(symbol)){
    const operatorSplit = /[÷*+/-]/g;
    const lastElement = expression.split(operatorSplit)[expression.split(operatorSplit).length - 1];

    window.alert(lastElement)  
    }*/

    setDisplaySymbol((prev) =>
      prev.includes("+") ||
      prev.includes("-") ||
      prev.includes("/") ||
      prev.includes("*")
        ? symbol
        : prev + symbol
    );
    if (expression[expression.length - 1] == "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
    if (operator.test(symbol)) {
      const operators = ["-", "+", "/", "*"]
      const expressionSplit = expression.split("");   
      if(expressionSplit[expressionSplit.length - 1].includes("+") || expressionSplit[expressionSplit.length - 1].includes("-")
     || expressionSplit[expressionSplit.length - 1].includes("/") || expressionSplit[expressionSplit.length - 1].includes("*")){

      setExpression(expression.slice(0, -1) + symbol)
     }
      setDisplaySymbol(symbol);
    }
  };
  const clear = () => {
    setAnswer("0");
    setDisplaySymbol("0");
    setExpression("");
  };
  const calculate = () => {
    setExpression((prev) => prev + "=");
    setAnswer(eval(expression));
  };

  const displayDecimal = (event: any) => {
    const operatorSplit = /[÷*+/-]/g;
    const lastElement =
      expression.split(operatorSplit)[
        expression.split(operatorSplit).length - 1
      ];

    if (!lastElement.includes(".")) {
      setExpression(expression + event.target.innerText);
      setDisplaySymbol(displaySymbol + event.target.innerText);
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="displayAll">
          <input className="displayExpression" value={expression} />
          <div className="display" id="display">
            {answer === "0" ? displaySymbol : answer}
          </div>
        </div>
        <div className="buttons">
          <button id="clear" className="wideBtn" onClick={clear}>
            AC
          </button>
          <button id="divide" onClick={() => display("/")}>
            /
          </button>
          <button id="multiply" onClick={() => display("*")}>
            x
          </button>
          <button id="seven" onClick={() => display("7")}>
            7
          </button>
          <button id="eight" onClick={() => display("8")}>
            8
          </button>
          <button id="nine" onClick={() => display("9")}>
            9
          </button>
          <button id="subtract" onClick={() => display("-")}>
            -
          </button>
          <button id="four" onClick={() => display("4")}>
            4
          </button>
          <button id="five" onClick={() => display("5")}>
            5
          </button>
          <button id="six" onClick={() => display("6")}>
            6
          </button>
          <button id="add" onClick={() => display("+")}>
            +
          </button>
          <button id="one" onClick={() => display("1")}>
            1
          </button>
          <button id="two" onClick={() => display("2")}>
            2
          </button>
          <button id="three" onClick={() => display("3")}>
            3
          </button>
          <button
            id="equals"
            value="="
            className="longerBtn"
            onClick={calculate}
          >
            =
          </button>
          <button
            id="zero"
            value="0"
            className="wideBtn"
            onClick={() => display("0")}
          >
            0
          </button>
          <button
            id="decimal"
            value="."
            onClick={(event) => displayDecimal(event)}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
