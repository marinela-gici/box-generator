import React, { useState } from "react";

const Box = (props) => {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(50); 
    const [height, setHeight] = useState(50); 
    
    const onSubmitHandler = (e) => {
      e.preventDefault();
  
      setBoxes(prevBoxes => [...prevBoxes, {color: color, width: width, height: height}]);
    }
  
    return (
        <>
            <form onSubmit={ onSubmitHandler }>
            <div>
                <label htmlFor="color">Color</label>
                <input 
                type="text" 
                id="color"
                onChange={ (e) => setColor(e.target.value) }
                />
                <label htmlFor="width">Width</label>
                <input 
                type="number" 
                min="10"
                id="width"
                onChange={ (e) => setWidth(e.target.value) }
                />
                <label htmlFor="height">Height</label>
                <input 
                type="number" 
                min="10"
                id="height"
                onChange={ (e) => setHeight(e.target.value) }
                />
            </div>
            <button>Add</button>
            </form>
            {
                boxes.length > 0 && 
                boxes.map((box, index) => {
                    return (<div key={index} style={{ 
                        display: "inline-block",
                        margin: "10px",
                        height: box.height + "px", 
                        width: box.width + "px", 
                        backgroundColor: box.color
                        }}>
                    </div>
                    );
                })
            }
            
        </>

    )
  }
  
  export default Box;