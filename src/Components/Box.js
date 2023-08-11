import React, { Component, useState } from "react";
import styles from "./FormComponent.module.css";

const Box = () => {
    const [colors, setColors] = useState([]);
    // const [width, setWidth] = useState([]);
    // const [height, setHeight] = useState([]);
    

    return (
        <>
            <form onSubmit={ (e) => e.preventDefault() }>
                <label htmlFor="color">Color</label>
                <input type="text" id="color"/>
                <label htmlFor="width">Width</label>
                <input type="number" id="width"/>
                <label htmlFor="color">Height</label>
                <input type="number" id="height"/>
                <input value="Add" className="btn" type="button" onClick={(e) => setColors(prevState => [...prevState, e.target.value])} />    
            </form>
            {colors && console.log(colors)}
            
        </>
    )
}

export default Box;