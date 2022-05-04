import React from "react";
import '../scss/components/Keys.scss';


const Keys = () => {
  const symbols = ["AC", "±", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

  const symbol = symbols.map(symbol => <p className="key" key={symbol}>{symbol}</p>)

  return (
    <div className="Keys">
      {symbol}
    </div>
  )
}

export default Keys;