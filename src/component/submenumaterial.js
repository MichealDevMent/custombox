import React,{useState} from "react";
import './submenumaterial.css'
import materialregular from '../assets/img/material/corugated.png'
import materialpremium from '../assets/img/material/premium-white.png'
import bluemusty from '../assets/img/material/blue musty.png'
import './globalconfig'

let materialdata = [
    
    {id:1,img:materialregular,title:"Corugated Kraft"},
    {id:2,img:materialpremium,title:"Premium White"},
]

export function SubMenuMaterial(){
    const [Current, setCurrent] = useState(materialdata[0].id)
    function onClick(v){
        setCurrent(v.id);
        global.material = v.id
        global.materialname = v.title
    }
    const btnmaterial = 'btn-material'
    return <div className="submenu-container">
        <p className="title-size"><label className="bold">Choose Material</label> </p>
        {
            materialdata.map((v,i)=>{return <div key={i}><button key={i} onClick={() => onClick(v)} className={btnmaterial+" "+(Current===v.id?"active":"")}><img src={v.img} alt="icon"/>
            <div className="mo-check-po">{(Current===v.id?
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#789DFA"/>
            </svg>
            :"")}</div>

            </button><p className="label-material">{v.title}</p></div>})
        }
    </div>
}