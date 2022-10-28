import React,{useState} from "react";
import './submenubase.css'
import './globalconfig'
import imgempety from '../assets/svg/empty.svg'
import imgcolorpick from '../assets/svg/color-pick.svg'
import imgabstract from '../assets/img/pattern/abstract-photo.png'
import imgblackwhiteboard from '../assets/img/pattern/black-white-board.png'
import imgcandyblack from '../assets/img/pattern/candy-black.png'
import imgcandycolor from '../assets/img/pattern/candy-color.png'
import imgcandywhite from '../assets/img/pattern/candy-white.png'
import imgflowerblack from '../assets/img/pattern/flower-black.png'
import imgflowercolor from '../assets/img/pattern/flower-color.png'
import imgflowerpot from '../assets/img/pattern/flower-pot.png'
import imggrassblack from '../assets/img/pattern/grass-black.png'
import imgpineapple from '../assets/img/pattern/pineapple.png'
import imgtrexblack from '../assets/img/pattern/trex-black.png'
import imgtrexcolor from '../assets/img/pattern/trex-color.png'
import imgtrexs from '../assets/img/pattern/trex-s.png'
import imgyinyan from '../assets/img/pattern/yin-yan.png'

let btnmode = [
    {id:1,text:"Exterior"},
    {id:2,text:"Interior"},
]
let chossecolor = [
    
    {id:1,text:"",label:"No Color"},
    {id:2,text:"Choose Color",label:"Single Color"},
]
let patterncatagory = [
    {id:1,value:"All"},
    {id:2,value:"Animal"},
    {id:3,value:"Checker"},
    {id:4,value:"Cristmas"},
    {id:5,value:"Floral"},
]
let pattern = [
    
    {id:1,img:imgempety,imging:"",label:"No Pattern",catalog:""},
    {id:2,img:imgabstract,imging:"",label:"Abstract",catalog:"Checker"},
    {id:3,img:imgblackwhiteboard,imging:"",label:"Black Board",catalog:"Checker"},
    {id:4,img:imgcandyblack,imging:"",label:"Candy Black",catalog:"Cristmas"},
    {id:5,img:imgcandycolor,imging:"",label:"Candy Color",catalog:"Cristmas"},
    {id:6,img:imgcandywhite,imging:"",label:"Candy White",catalog:"Cristmas"},
    {id:7,img:imgflowerblack,imging:"",label:"Flower Black",catalog:"Floral"},
    {id:8,img:imgflowercolor,imging:"",label:"Flower Color",catalog:"Floral"},
    {id:9,img:imgflowerpot,imging:"",label:"Flower Pot",catalog:"Floral"},
    {id:10,img:imggrassblack,imging:"",label:"Grass Black",catalog:"Floral"},
    {id:11,img:imgpineapple,imging:"",label:"Pineapple",catalog:"Floral"},
    {id:12,img:imgtrexblack,imging:"",label:"Trex Black",catalog:"Animal"},
    {id:13,img:imgtrexcolor,imging:"",label:"Trex Color",catalog:"Animal"},
    {id:14,img:imgtrexs,imging:"",label:"Trex S",catalog:"Animal"},
    {id:15,img:imgyinyan,imging:"",label:"Yin Yan",catalog:"Checker"},
]

export function SubMenuBase(){
    const [Current, setCurrent] = useState(chossecolor[0].id)
    const [Currentmode, setCurrentmode] = useState(btnmode[0].id)
    const [Currentcatalog, setCurrentcatalog] = useState("All")
    const [Currentpattern, setCurrentpattern] = useState(pattern[0].id)

    function onClick(v){
        setCurrent(v.id);
    }
    function onClickpattern(v){
        setCurrentpattern(v.id)
        global.pattern = v.id
        global.changepattern = true
    }
    
    function btnModeOnClick(v){
        setCurrentmode(v.id);
    }

    const colorselected = 'colorselected'
    const boxfacedesain = 'boxface-desain'
    let catalogready = "All"

    return <div className="submenubase-container">
        {/* <p className="title-size"><label className="bold">Choose Base</label> </p> */}
        <div className="base-lay">
        {/* <p>
            {
                btnmode.map((v,i)=>{
                    return <button key={i} onClick={() => btnModeOnClick(v)} className={boxfacedesain+" "+(Currentmode===v.id?"active":"")}>{v.text}</button>})
            }
        </p> */}
        {/* <div className="label-base-color">Color</div>
        {
            chossecolor.map((v,i)=>{
            return <div>
                <button key={i} onClick={() => onClick(v)} className={colorselected+" "+(Current===v.id?"active":"")}>
                    {v.id===1?<img height={20} src={imgempety}></img>:""}
                    {v.id===2?<img height={20} src={imgcolorpick}></img>:""}
                    {v.text}
            </button><br></br>
            <button className="label-btn-color">{v.label}</button>
            </div>
            
            })
        } */}

        <div className="label-base-color">Pattern</div>
        <select className="catalog" onChange={(e)=>{ const selectedcatalog = e.target.value; 
            setCurrentcatalog(selectedcatalog)}}>
            {
                patterncatagory.map((v,i)=>{
                    return <option  key={i} value={v.value}>{v.value}</option>
                })
            }
        </select>
        {
            pattern.map((v,i)=>{
                return <div key={i}>
                    <div className={"pattern"+" "+(Currentcatalog===v.catalog?"active":"" || Currentcatalog==="All"?"active":"")}>
                        <button key={i} onClick={() => onClickpattern(v)} className={colorselected+" "+(Currentpattern===v.id?"active":"")}>
                        {v.id===1?<img height={20} src={imgempety}></img>:""}
                        {v.id!==1?<img height={110} width={110} src={v.img}></img>:""}
                        {v.text}
                        </button><br></br>
                        <button className="label-btn-color">{v.label}</button>
                    </div>
            </div>
            })
        }
        </div>
        

    </div>
}