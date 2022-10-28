import React,{Component, useState} from "react";
import './submenusize.css'
import './globalconfig'
import Sizeinfo from './sizeinfobox'

let sizedata = [
    {id:1,text:"9.2 x 9.2 x 5 cm",type:"F23"},
    {id:2,text:"11.8 x 14 x 8 cm",type:"F22"},
    {id:3,text:"20.7 x 15.6 x 9.1 cm",type:"F20"},
    {id:4,text:"23.1 x 14 x 8 cm",type:"F19"},
    {id:5,text:"24.5 x 19.4 x 2.2 cm",type:"M3"},
]



export function SubMenuSize(){
    const [Current, setCurrent] = useState(sizedata[0].id)
    const [sizetitleseleted, setsizetitleseleted] = useState('F23 - 9.2 x 9.2 x 5 cm')
    function onClick(v){
        setCurrent(v.id);
        setsizetitleseleted(v.type +" - "+v.text);
        global.boxsizetitle = v.type +" - "+v.text;
        global.changesize = true
    }
    const sizeselected = 'sizeselected'
    return <div className="submenu-container">
        {/* <Sizeinfo title={global.boxsizetitle}/> */}
        {/* <div className="showtiitlesize">{global.boxsizetitle }</div> */}
        <p className="title-size"><label className="bold">Choose Size</label> <label className="sx">(P X L X T)</label> </p>
        {
            sizedata.map((v,i)=>{return <div key={i} onClick={() => {onClick(v);}} className={sizeselected+" "+(Current===v.id?"active":"")}><b>{v.type}</b> - {v.text} 
            {Current===v.id?(Current===1?<div className={"mo-check-pos"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg>
            </div>:""):""}
            {Current===v.id?(Current===2?<div className={"mo-check-pos2"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg>
            </div>:""):""}
            {Current===v.id?(Current===3?<div className={"mo-check-pos3"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg>
            </div>:""):""}
            {Current===v.id?(Current===4?<div className={"mo-check-pos4"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg>
            </div>:""):""}
            {Current===v.id?(Current===5?<div className={"mo-check-pos5"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg>
            </div>:""):""}

            </div>})
        }
    </div>
}