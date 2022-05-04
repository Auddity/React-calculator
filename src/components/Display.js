import React, {useState} from "react";
import '../scss/layout/Display.scss';

const Display = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="Display">
      {number}
    </div>
  )
}

export default Display;