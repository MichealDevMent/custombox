import React from "react";
import './switch.css'

const Switch = ({rounded = false}) => {
    return <label className="switch">
        <input type="checkbox"/><span className="slider"/>
    </label>
}
export default Switch;