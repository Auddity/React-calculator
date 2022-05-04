import React, {useState} from 'react';
import './scss/base/App.scss';
import keyData from './components/oppData';
import Display from './components/Display';
import Calc from './components/Calc';

function App() {
  const start = 0;
  const [display, setDisplay] = useState(start);
  let firstNumber;
  let secondNumber;
  let operator;

  const handleKey = e => {
    const targetId = e.target.id;
    for(let obj of keyData) {
      const match = obj.id === +targetId;

      if(match && obj.value === 'clear') {
        clear();
      }

      if(match && typeof(obj.value) === "number") {

      };

      if(match && obj.type === 'operator') {
        calculate(firstNumber, secondNumber)
      }
    }
  }

  const calculate = (firstNumber, secondNumber) => {

    if(keyData.value === 'add') return firstNumber + secondNumber;
    if(keyData.value === 'subtract') return firstNumber - secondNumber;
    if(keyData.value === 'multiply') return firstNumber * secondNumber;
    if(keyData.value === 'divide') return firstNumber / secondNumber;
  }

  const clear = () => {
    setDisplay(start);
  }

  return (
    <main className="App">
      <div className="App-container">
        <Display 
          number={display}
        />
        <Calc 
          number={display} 
          handleKey={handleKey} 
          keyData={keyData}
        />
      </div>
    </main>
  );
}

export default App;
