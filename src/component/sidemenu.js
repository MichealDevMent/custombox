import React,{useState} from "react";
import axios from "axios";
import './sidemenu.css';
import { SubMenuSize } from "./submenusize";
import { SubMenuMaterial } from "./submenumaterial";
import { SubMenuBase } from "./submenubase";
import { SubMenuQuantity } from "./submenuquantity";
import { SubMenuText } from "./submenutext";
import { SubMenuReset } from "./submenureset";
import {SubMenuLogo} from './submenulogo'
import logo from '../assets/img/logo.png'
import arrowleft from '../assets/img/material/arrow-left.png'
import YourWallet from './yourwallet'
import Boxname from './customboxname'
import Boxface from './boxface'
import Sizeinfo from './sizeinfobox'

import imgsize from '../assets/icon/heart-active.png';
import imgmaterial from '../assets/icon/star-active.png';
import imgbase from '../assets/icon/palette-active.png';
import imgquantity from '../assets/icon/material-active.png';
import imgtext from '../assets/icon/resources-active.png';
import imgicon from '../assets/icon/flower-bouquet-active.png';
import imgtexts from '../assets/icon/text-active.png';
import imgshape from '../assets/icon/shapes-active.png';

import imgsizein from '../assets/icon/heart.png';
import imgmaterialin from '../assets/icon/star.png';
import imgbasein from '../assets/icon/palette.png';
import imgquantityin from '../assets/icon/material.png';
import imgtextin from '../assets/icon/resources.png';
import imgiconin from '../assets/icon/flower-bouquet.png';
import imgtextsin from '../assets/icon/text-inactive.png';
import imgshapesin from '../assets/icon/shapes-inactive.png';


import Writeicon from '../assets/icon/write.png';
import Writeiconac from '../assets/icon/write-active.png';

import walleticon from '../assets/icon/wallet.png';
import walleticonac from '../assets/icon/wallet-active.png';
import ContactUs from "./contactus";
import ReviewPurchase from "./reviewpurchase";
import { SubMenuImage } from "./submenuimage";
import Eco from "./eco";
import { SubMenuTemplate } from "./submenutemplate";
import { SubMenuShape } from "./submenushape";


let value=[
    {id:11,value:'Logo',img:imgsize,imgin:imgsizein},
    {id:2,value:'Template',img:imgmaterial,imgin:imgmaterialin},
    {id:3,value:'Pattern',img:imgbase,imgin:imgbasein},
    {id:4,value:'Material',img:imgquantity,imgin:imgquantityin},
    // {id:5,value:'Image',img:imgtext,imgin:imgtextin},
    {id:6,value:'Eco',img:imgicon,imgin:imgiconin},
    {id:7,value:'Text',img:imgtexts,imgin:imgtextsin},
    {id:8,value:'Shape',img:imgshape,imgin:imgshapesin},
]

let purchaseprice=[
    {id:1,value:30,perpiece:2000,total:60000},
    {id:2,value:60,perpiece:2100,total:126000},
    {id:3,value:90,perpiece:2200,total:198000},
    {id:4,value:120,perpiece:2300,total:276000},
    {id:5,value:240,perpiece:2400,total:576000},
    {id:6,value:500,perpiece:2500,total:1250000},
    {id:7,value:1000,perpiece:2600,total:2600000},
    {id:8,value:1500,perpiece:2700,total:4050000},
    {id:9,value:2000,perpiece:2800,total:5600000},
    {id:10,value:2500,perpiece:2900,total:7250000},
]

var selectidbefore = 1

export function SideMenu(){
    const [Current, setCurrent] = useState(0)
    const [pricePurchaseData,setPricePurchaseData] = useState()
    const [toogleIconResize,setToggleIconResize] = useState('inactive')
    const [toogleBtnWallet,setToggleBtnWallet] = useState('inactive')
    const [toogleBtncontactus,setToggleBtncontactus] = useState('inactive')
    const [toogleBtnpurchase,setToggleBtnpurchase] = useState('inactive')
    const [togglenavside,setTogllenavside] = useState(global.facebox)
    
    function onClick(v){
        if (selectidbefore === v.id){
            setCurrent(0);
            global.showmenu = 0
        }else{
            setCurrent(v.id);
            global.showmenu = v.id
        }
        selectidbefore = v.id
    }
    function onsetme(){
        if(toogleIconResize==='inactive'){
            setToggleIconResize('active')
            global.showmenu = 1
        }else{
            setToggleIconResize('inactive')
            global.showmenu = 0
        }
    }
    function setToggleBtn(){
        if(toogleBtnWallet==='inactive'){
            setToggleBtnWallet('active')
        }else{
        setToggleBtnWallet('inactive')
        }
    }
    function setToggleBtncontact(){
        if(toogleBtncontactus==='inactive'){
            setToggleBtncontactus('active')
        }else{
            setToggleBtncontactus('inactive')
        }
    }
    function setToggleBtncontacthide(){
        setToggleBtncontactus('inactive')

    }
    function setlaywallethide(){
        setToggleBtnWallet('inactive')
    }
    function setToggleBtnpurchasehide(){
        setToggleBtnpurchase('inactive')

    }
    function settooglebtnpurchase(){
        if(toogleBtnpurchase==='inactive'){
            setToggleBtnpurchase('active')
        }else{
            setToggleBtnpurchase('inactive')
        }
    }
    function getPHP(){
        fetch(global.urlserver+'index.php', {
            method: 'POST',
            headers: {
                accept:'application/json',
                'Content-Type':'application/json',
                
            },
            body: JSON.stringify({
                content: 'test1'
            }),
        }).then(res => res.json()).then (response =>{
            console.log(response);
        });

        // axios.post(global.urlserver+'index.php');
        // console.log();
    }
    const btn = 'btn'
    return(
        <div>
            <Sizeinfo title={global.boxsizetitle}/>
            <div className="project-func">
                
                <Boxname/>
                <Boxface/>
                
            </div>
            <div className="sidemenu">
                <div className="size-selection">
                    <button className="btn-icon-resize"><img src={logo} alt="logo" width={80}/></button>
                    <button className="btn-icon-resize">
                        <div className="box-name-title">Eco mail Box </div><button className="spacenull"></button><button className="btn-icon-resize" onClick={() => onsetme()}><img src={(toogleIconResize==='active'?Writeiconac:Writeicon)} width={15} /></button>
                    </button>
                </div>
                {/* <div className={global.faceboxviewtoogle}>
                    <div className="side-selection">
                        <button className="btn-back-from-side" onClick={()=>{global.faceboxviewtoogle = "side-view";}}><img src={arrowleft} alt="logo" width={30}/></button>
                        <button className="btn-icon-resize">
                            <div className="box-name-title">{global.faceboxviewtoogleposition}</div>25.6 x 19.3 cm 
                        </button>
                    </div>
                </div> */}
                <div className="purchase-lay">
                    <button className="btn-wallet" onClick={()=>{setToggleBtn();getPHP();}}>
                        <img src={(toogleBtnWallet==='active'?walleticonac:walleticon)} width={15}/>
                    </button>
                    <div className={"walletselect"+" "+(toogleBtnWallet==='active'?"active":" ")}>
                        <button className="btn-close-wallet-lay" onClick={()=>{setlaywallethide();}}>X</button>
                        <YourWallet />
                    </div>
                    <select className="catalog" onChange={(e)=>{ const pricePurchaseData = e.target.value; 
                        setPricePurchaseData(pricePurchaseData); global.quantityandprice=pricePurchaseData}}>
                        {
                            purchaseprice.map((v,i)=>{
                                return <option key={i} className="option-price" value={v.value+" "+v.perpiece+"/piece Rp."+(v.total).toLocaleString(undefined, { maximumFractionDigits: 2 })}>{v.value} {(v.perpiece).toLocaleString(undefined, { maximumFractionDigits: 2 })}/piece Rp.{(v.total).toLocaleString(undefined, { maximumFractionDigits: 2 })}</option>
                            })
                        }
                    </select>
                    <button  className="btn-contact-us" onClick={()=>{setToggleBtncontact()}}>Contact us</button>
                    <div className={"contactselect"+" "+(toogleBtncontactus==='active'?"active":" ")}>
                        <button className="close-lay-contact" onClick={()=>{setToggleBtncontacthide()}}>X</button>
                        <ContactUs/>
                    </div>
                    <button className="btn-purchase-us" onClick={()=>{settooglebtnpurchase()}}>Review & Purchase</button>
                    <div className={"btn-review-purchase"+" "+(toogleBtnpurchase==='active'?"active":" ")}>
                        <button className="close-lay-purchase" onClick={()=>{setToggleBtnpurchasehide()}}>X</button>
                        <ReviewPurchase/>
                    </div>
                </div>
                <div className="container">
                {value.map((v,i)=>{return <div key={i} onClick={() => onClick(v)} className={btn+" "+(Current===v.id?"active":"")}><img src={(Current===v.id?v.img:v.imgin)} alt="icon" width={25}/><div>{v.value}</div></div>})}
                
                </div>
            </div>
            <div className={"submenusizeex"+" "+(global.showmenu===1?"active":"")}>         
                <SubMenuSize/>
            </div>
            <div className={"submenumaterial"+" "+(global.showmenu===2?"active":"")}>
                <SubMenuTemplate/>
            </div>
            <div className={"submenubase"+" "+(global.showmenu===3?"active":"")}>
                <SubMenuBase/>
            </div>
            <div className={"submenuquantity"+" "+(global.showmenu===4?"active":"")}>
                <SubMenuMaterial/>
            </div>   
            <div className={"submenutext"+" "+(global.showmenu===5?"active":"")}>
                <SubMenuImage/>
            </div>  
            <div className={"submenureset"+" "+(global.showmenu===11?"active":"")}>
                <SubMenuLogo/> 
            </div>  
            <div className={"submenureset"+" "+(global.showmenu===6?"active":"")}>
                <Eco/>
            </div>  
            <div className={"submenureset"+" "+(global.showmenu===7?"active":"")}>
                <SubMenuText/>
            </div>  
            <div className={"submenureset"+" "+(global.showmenu===8?"active":"")}>
                <SubMenuShape/>
            </div>  
            {
                ()=>{
                    return console.log(global.showmenu);
                }
            }
        </div>

    )
}