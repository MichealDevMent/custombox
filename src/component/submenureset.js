import React,{useState} from "react";
import './submenureset.css'
import './globalconfig'


export function SubMenuReset(){
    const sizeselected = 'sizeselected'
    return <div className="submenureset-container">
        <p className="title-size"><label className="bold">Reset all will permanently discard unsaved changes to dimensions, material, quantity, artwork, text, and color.</label> </p>
        <p>
            <button className="reset-btn">Reset All</button>
        </p>
    </div>
}