import React, {useState} from 'react';
import './scss/base/App.scss';
import keyData from './components/oppData';
import Display from './components/Display';
import Calc from './components/Calc';

let firstNumber, 
  secondNumber,
  operator, 
  prevKey;
  
  function App() {
  
  const [display, setDisplay] = useState(0);
  
  const findMatch = (targetId) => {
    for(let obj of keyData) {
      if(obj.id === +targetId) return obj;
    }
  }
    
  const handleKeyed = e => {
    const targetId = e.target.id;
    
    let match = findMatch(targetId);

    if(match.type === 'operator') {
      firstNumber = display;
      operator = match.value;
      prevKey = match.type;
    }
    
    if(match.type === 'equal') {
      secondNumber = display;
      setDisplay(calculate(firstNumber, secondNumber, operator));
    }

    if(match.type === 'number') {
      setDisplay(prevState => {
        console.log(prevState);
        return prevState === 0 || (prevKey === 'operator' && prevState === firstNumber) ? match.value : `${prevState}${match.value}`
      })
    }
    
    if(match.type === 'clear') {
      setDisplay(0);
      firstNumber = undefined;
      secondNumber = undefined;
      operator = undefined;
      prevKey = undefined;
    }
  }
  
  const calculate = (firstNumber, secondNumber, operator) => {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if(operator === 'add') return firstNumber + secondNumber;
    if(operator === 'subtract') return firstNumber - secondNumber;
    if(operator === 'multiply') return firstNumber * secondNumber;
    if(operator === 'divide') return firstNumber / secondNumber;
  }

  return (
    <main className="App">
      <div className="App-container">
        <Display 
          number={display}
        />
        <Calc 
          handleKey={handleKeyed} 
          keyData={keyData}
        />
      </div>
    </main>
  );
}

export default App;
