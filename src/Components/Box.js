import React, { useState } from "react";

const Box = (props) => {
    const [ boxes, setBoxes] = useState([]);
    const [ color, setColor] = useState("");
    
    const onSubmitHandler = (e) => {
      e.preventDefault();
  
      setBoxes(prevBoxes => [...prevBoxes, color]);
    }
  
    return (
        <>
            <form onSubmit={ onSubmitHandler }>
            <div>
                <label htmlFor="firstName">Color</label>
                <input 
                type="text" 
                name="color"
                onChange={ (e) => setColor(e.target.value) }
                />
            </div>
            <button>Add</button>
            </form>
            { console.log(boxes) }
            {
                boxes.length > 0 && 
                boxes.map((color, index) => {
                    {console.log(index, color)}
                    return (<div key={index} style={{ 
                        display: "inline-block",
                        margin: "10px",
                        height: "50px", 
                        width: "50px", 
                        backgroundColor: color
                        }}>
                    </div>
                    );
                })
            }
            
        </>

    )
  }
  
  export default Box;