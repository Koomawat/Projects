import React, {useState, useEffect} from 'react'
import CalculatorKey from "./CalculatorKey"

function Calculator() {

	const [prevVal, setPrevVal] = useState(null)
	const [nextVal, setNextVal] = useState("0")
	const [operator, setOperator] = useState(null)
	
	useEffect(() => {}, [operator, nextVal, prevVal])

	const MathOperations = {
		"+": (firstVal, secondVal) => firstVal + secondVal,
		"-": (firstVal, secondVal) => firstVal - secondVal,
		"*": (firstVal, secondVal) => firstVal * secondVal,
		"/": (firstVal, secondVal) => firstVal / secondVal,
		"=": (firstVal, secondVal) => secondVal
	}

	const doOperation = () => {
		let getOp = MathOperations[operator](
			parseFloat(prevVal),
			parseFloat(nextVal)
		)
		setOperator(null)
		setNextVal(String(getOp))
		setPrevVal(null)
	}

	const makeNum = (num) => {
		setNextVal(nextVal === "0" 
		? String(num)
		: nextVal + num)
	}

	const decimal = () => {
		if(!/\./.test(nextVal)){
			setNextVal(nextVal + ".")
		}
	}

	const clear = () => {
		setNextVal("0")
		setPrevVal(0)
	}

	const handleOperation = (val) => {
		if (Number.isInteger(val)) {
		  makeNum(parseInt(val, 10))
		} else if (val in MathOperations) {
		  if (operator === null) {
			setOperator(val);
			setPrevVal(nextVal);
			setNextVal("");
		  }
		  if (operator) {
			setOperator(val);
		  }
		  if (prevVal && operator && nextVal) {
			doOperation();
		  }
		} else if (val === "C") {
		  clear();
		} else if (val === ".") {
		  decimal();
		}
	  };

	return (
		<div className="calculator">
      <div className="calculator-input">
        <div className="result">{nextVal} </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <CalculatorKey keyVal={"C"} onClick={handleOperation} />
		  <p>
			  
			  </p>
        </div>
        <div className="keys-operators">
          <CalculatorKey keyVal={"+"} onClick={handleOperation} />
          <CalculatorKey keyVal={"-"} onClick={handleOperation} />
          <CalculatorKey keyVal={"*"} onClick={handleOperation} />
          <CalculatorKey keyVal={"/"} onClick={handleOperation} />
          <CalculatorKey keyVal={"="} onClick={handleOperation} />
		  <p>
			  
			  </p>
        </div>
        <div className="keys-numbers">
          <CalculatorKey keyVal={9} onClick={handleOperation} />
          <CalculatorKey keyVal={8} onClick={handleOperation} />
          <CalculatorKey keyVal={7} onClick={handleOperation} />
		  <p>

		  </p>
          <CalculatorKey keyVal={6} onClick={handleOperation} />
          <CalculatorKey keyVal={5} onClick={handleOperation} />
          <CalculatorKey keyVal={4} onClick={handleOperation} />
		  <p>
			  
			  </p>
          <CalculatorKey keyVal={3} onClick={handleOperation} />
          <CalculatorKey keyVal={2} onClick={handleOperation} />
          <CalculatorKey keyVal={1} onClick={handleOperation} />
		  <p>
			  
			  </p>
          <CalculatorKey
            className="key-dot"
            keyVal={"."}
            onClick={handleOperation}
          />
          <CalculatorKey
            className="key-zero"
            keyVal={0}
            onClick={handleOperation}
          />
        </div>
      </div>
    </div>
	)
}

export default Calculator
