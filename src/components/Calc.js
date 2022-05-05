import React from 'react';
import '../scss/layout/Calc.scss';
import Keys from './Keys';

const Calc = ({handleKey, keyData}) => {

  return (
    <div 
      className="Calc"
      >
      <Keys 
        handleKey={handleKey}
        keyData={keyData}
      />
    </div>
  )
}

export default Calc;