import React from "react";
import '../scss/components/Keys.scss';


const Keys = ({handleKey, keyData}) => {

  const populateKey = keyData.map(obj => {
    return <p
            key={obj.id}
            id={obj.id}
            data-id={obj.type}
            className="key">
            {obj.text}
          </p>
  })

  return (
    <div 
      className="Keys"
      onClick={handleKey}
      >
      {populateKey}
    </div>
  )
}

export default Keys;