import React,{useState} from "react";
import IconInfo from '../assets/icon/information-button.png'
import IconInfodefauld from '../assets/icon/upload-file-image.png'
import './submenulogo.css'

let btniconface =[
    {id:1,text:"Front",active:"aktive"},
    {id:2,text:"Back",active:"aktive"},
    {id:3,text:"Left",active:"aktive"},
    {id:4,text:"Right",active:"aktive"},
    {id:5,text:"Top",active:"aktive"},
    {id:6,text:"Bottom",active:"aktive"},
]
let haveuploadicon =false
export function SubMenuImage (){
    const [logos , setLogos] = useState(IconInfodefauld);
    function onClickac(v){
        if(v.active==="aktive"){
            v.active=""
            console.log(v.active)
        }else{
            v.active="aktive"
            console.log(v.active)
        }
    }
    function uploadlogofunc(e){
        setLogos(URL.createObjectURL(e.target.files[0]))
        haveuploadicon = true
        global.doaddlogo = true
        global.addlogo = URL.createObjectURL(e.target.files[0])
    }
    function removeicon(){
        setLogos(IconInfodefauld)
        haveuploadicon = false
    }
    return<div className="submenu-container">
            <p className="title-size"><label className="bold">Upload your Image</label> </p>
            <div className="counter-upload">
                <img className="img-upload-show" src={logos} alt="Add logo" />
                <input type={'file'} onChange={(e)=>{uploadlogofunc(e)}}/>
            </div>

            <div></div>
            <div>
                {/* <button className={"btn-new-upload-logo"+" "+(haveuploadicon===true?"active":"")}>Upload New Logo</button> */}
                <button className={"btn-remove-logo"+" "+(haveuploadicon===true?"active":"")} onClick={()=> removeicon()}>Remove Logo</button>
            </div>
            {/* <div className="gogo">
                <div className="placement-icon">Placement :</div>
                {
                    btniconface.map((v,i)=>{ return <button key={i} onClick={() => onClickac(v)} className={"btn-align-icon"+" "+(v.active==="aktive"?"active":"")}>{v.text}</button>})
                }
            </div> */}
            <div className="gogo"></div>
            <div>
                <button className="label-info-must-icon">
                    <img src={IconInfo} alt="info" width={20}/>
                </button>
                <button className="label-info-must">PNG, JPEG, SVG supported. Max 5 MB. Max file dimensions 7000x7000 px.</button>
             
            </div>
            
        </div>
}