import React,{useState} from "react";
import './boxface.css';
import { Face } from "./face";

let value =[
    {id:1,mode:'Exterior'},
    {id:2,mode:'Interior'},
]

export default function Boxface(props){
    const [Current, setCurrent] = useState(value[0].id)
    function onClick(v){
        setCurrent(v.id)
    }
    const boxfacedesain = 'boxface-desain-'
    return(
        <div>
            {/* <div className="box-face-desain">       
                <span>Add Design</span>
                {
                  value.map((v,i)=>{return <button key={i} onClick={() => onClick(v)} className={boxfacedesain+""+(Current===v.id?"ex":"in")}>{v.mode}</button>})
                }
            </div> */}
            <Face/>
        </div>
        
    )
}