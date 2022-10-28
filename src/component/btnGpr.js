import React,{useState} from "react";
import "./btnGps.css";
import './globalconfig'

import imgsize from '../assets/icon/size-active.png';
import imgmaterial from '../assets/icon/material-active.png';
import imgbase from '../assets/icon/base-active.png';
import imgquantity from '../assets/icon/Quantity-active.png';
import imgreset from '../assets/icon/reset-active.png';
import imgtext from '../assets/icon/text-active.png';

import imgsizein from '../assets/icon/size-inactive.png';
import imgmaterialin from '../assets/icon/material-inactive.png';
import imgbasein from '../assets/icon/base-inactive.png';
import imgquantityin from '../assets/icon/Quantity-inactive.png';
import imgresetin from '../assets/icon/reset-inactive.png';
import imgtextin from '../assets/icon/text-inactive.png';



let value=[
    {id:1,value:'Size',img:imgsize,imgin:imgsizein},
    {id:2,value:'Material',img:imgmaterial,imgin:imgmaterialin},
    {id:3,value:'Base',img:imgbase,imgin:imgbasein},
    {id:4,value:'Quantity',img:imgquantity,imgin:imgquantityin},
    {id:5,value:'Text',img:imgtext,imgin:imgtextin},
    {id:6,value:'Reset All',img:imgreset,imgin:imgresetin},
]
var selectidbefore = 1

export default function BtnGpr(props){
    const [Current, setCurrent] = useState(value[0].id)
    
    function onClick(v){
        if (selectidbefore === v.id){
            setCurrent(0);
            global.showmenu = 0
        }else{
            setCurrent(v.id);
            global.showmenu = v.id
        }
        selectidbefore = v.id
        
        //console.log(global.showmenu)

    }
    const btn = 'btn'
    return <div className="container">
        {value.map((v,i)=>{return <div key={i} onClick={() => onClick(v)} className={btn+" "+(Current===v.id?"active":"")}><img src={(Current===v.id?v.img:v.imgin)} alt="icon"/>{v.value}</div>})}
        
    </div>
    
}