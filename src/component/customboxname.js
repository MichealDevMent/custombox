import React, { useState } from "react";
import './customboxname.css'
import saveicon from '../assets/icon/save.png';
import saveiconac from '../assets/icon/save-active.png';
import menugurger from '../assets/icon/menu-burger.png';
import menugurgerac from '../assets/icon/menu-burger-active.png';
import iconshared from '../assets/icon/share.png';
import iconrefresh from '../assets/icon/refresh.png';
import iconbook from '../assets/icon/open-book.png';
import iconpreview from '../assets/icon/preview.png';
import cloundimg from '../assets/img/material/cloud-img.png';

export default function Boxname(){
    const [boxname , setBoxname] = useState(global.boxname);
    const [layMoreShow,setLayMoreShow] = useState('hide');
    const [toglleBtnSave , setToggleBtnSave] = useState('inactive');
    const [toglleBtnMore , setToggleBtnMore] = useState('inactive');
    const [toogleshowsharedlay , settoogleshowsharedlay] = useState('inactive');
    const [provideEmail,setprovideEmail] = useState('');
    const [savingprogress,setSavePrograss] = useState('hide');
    function setLay(){
        if(layMoreShow==="hide"){
            setLayMoreShow('show');
        }else{
            setLayMoreShow('hide');
        }
        
    }
    function showsharedlay(){
        if(toogleshowsharedlay==='inactive'){
            settoogleshowsharedlay('active');
      
        }else{
            settoogleshowsharedlay('inactive');
   

        }
    }
    function reloadall(){
        window.location.reload(true);
    }

    return <div className="boxname-lay">
        <input className="boxname-input" type={'text'} value={boxname} onChange={(e)=>{setBoxname(e.target.value);global.boxname=e.target.value}}></input>
        <button className="btn-save-project" onClick={()=>{setSavePrograss('show');setInterval(() => {setSavePrograss('hide');}, 4000);}}><img src={(toglleBtnSave==='active'?saveiconac:saveicon)} width={15}/> Save Project</button>
        <button className="btn-save-project" onClick={()=>{setLay()}}><img src={(toglleBtnMore==='active'?menugurgerac:menugurger)} width={15}/> More</button>
        <div className={"lay-more"+" "+(layMoreShow==="show"?"active":"")}>
            <div className="more-selection" onClick={()=>{showsharedlay()}}><img src={iconshared} width={20}></img> Share</div>
            <div className="more-selection" onClick={()=>{reloadall()}}><img src={iconrefresh} width={20}></img> Start Again</div>
            <div className="more-selection"><img src={iconbook} width={20}></img> Guidelines</div>
            <div className="more-selection"><img src={iconpreview} width={20}></img> How To Use the Editor</div>
        </div>
        <div className={savingprogress==="show"?"alert-progress active":"alert-progress"}>
            Saving Data...
            <img src={cloundimg} width={70}></img>
        </div>

        <div className={toogleshowsharedlay==='active'?"shared-design-lay active":"shared-design-lay"}>
            <div className="header-purchasereview">
                <button className="label-shraed-title">Share design</button>
                <button className="btn-close-lay-shared"  onClick={()=>{showsharedlay()}}>X</button>
            </div>
            <div className="purchasereview-body">
                <div className="balance-title">Copy link</div>
                <div >Copy the link below and share with a friend. Everyone who has the link will be able to view the design, copy and edit it by themselves.</div>
                <div >https://custombox.com/editor/product/design/1704452</div>
                <div>
                </div>
                <div className="your-balance">Send e-mail</div>
                <div>
                Provide e-mail address of a friend and we will send them e-mail containing a link to your box.
                </div>
                <div className="your-balance"><input className="your-email" type={'text'} value={provideEmail} onChange={(e)=>{setprovideEmail(e.target.value)}}></input></div>
                <div className="foot-note-purchasereview"><button className="btn-send-contact">Send</button></div>
            </div>
        </div>
    </div>
}