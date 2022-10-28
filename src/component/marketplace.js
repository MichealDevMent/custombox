import React,{useState} from "react";
import './marketplace.css';
import './globalconfig'
import img3d from '../assets/icon/marketplace.png';
let type=[
    {id:1,text:'Account',value:'Bambang BBRSoft'}
]

let material=[
    {id:1,text:'Money',value:'2.000.000,-'}
]

let quantity=[
    {id:1,text:'Level',value:23}
]

let unitprice=[
    {id:1,text:'Price Per Unit',value:35000}
]
let timeestimasi=[
    {id:1,text:'Bought ',value:"Hammer level 2"}
]

let subtotal=[
    {id:1,text:'Subtotal ',value:1050000}
]

let buttoggle=[
    {id:1,text:"Show"}
]
var togglemode ="Show"


export function Marketplace(){
    const [Current, setCurrent] = useState(type[0].id)
    const [quaCurrent,setQuaCurrent] = useState(global.qua)
    const [toogle,settoggle] = useState(buttoggle.id)

    function onClick(v){
        setCurrent(v.id)
    }
    const btn = 'btn'
    function onClickbtntoogle(v){
        if (v.text === "Show"){
            settoggle("Hide")
            v.text ="Hide"
            togglemode ="Hide"
        }else{
            settoggle("Show")
            v.text ="Show"
            togglemode ="Show"

        }
    }
    return(
        <div>
             {
                buttoggle.map((v,i)=>{return <button key={i} onClick={() => onClickbtntoogle(v)} className={"btn-market-toggle"+" "+(toogle===v.id?"active":"")}><img src={img3d} alt="icon" width={30}/>{v.text}</button>})
            }
            <div className={"lay-market"+" "+(togglemode==="Show"?"display":"")}>
                <h3 className="label-market">MarketPlace</h3>
            
        </div>
        </div>
        
    )
}