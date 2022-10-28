import React ,{useState}  from "react";
import './face.css';
import "./globalconfig";


import img3d from '../assets/icon/box-3d-active.png';
import imgback from '../assets/icon/box-back-active.png';
import imgfront from '../assets/icon/box-front-active.png';
import imgtop from '../assets/icon/box-top-active.png';
import imgbottom from '../assets/icon/box-bottom-active.png';
import imgright from '../assets/icon/box-right-active.png';
import imgleft from '../assets/icon/box-left-active.png';

import img3din from '../assets/icon/box-3d-inactive.png';
import imgbackin from '../assets/icon/box-back-inactive.png';
import imgfrontin from '../assets/icon/box-front-inactive.png';
import imgtopin from '../assets/icon/box-top-inactive.png';
import imgbottomin from '../assets/icon/box-bottom-inactive.png';
import imgrightin from '../assets/icon/box-right-inactive.png';
import imgleftin from '../assets/icon/box-left-inactive.png';

// let value=[
//     {id:1,value:'3dview',img:img3d,imgin:img3d},
//     {id:2,value:'Front',img:imgfront,imgin:imgfront},
//     {id:3,value:'Back',img:imgback,imgin:imgback},
//     {id:4,value:'Top',img:imgtop,imgin:imgtop},
//     {id:5,value:'Bottom',img:imgbottom,imgin:imgbottom},
//     {id:6,value:'Right',img:imgright,imgin:imgright},
//     {id:7,value:'Left',img:imgleft,imgin:imgleft},
// ]


export function Face(props){
    const [valueface,setvalueface] = useState([
        {id:1,value:'3dview',img:img3d,imgin:img3d},
        {id:2,value:'Front',img:imgfront,imgin:imgfront},
        {id:3,value:'Back',img:imgback,imgin:imgback},
        {id:4,value:'Top',img:imgtop,imgin:imgtop},
        {id:5,value:'Bottom',img:imgbottom,imgin:imgbottom},
        {id:6,value:'Right',img:imgright,imgin:imgright},
        {id:7,value:'Left',img:imgleft,imgin:imgleft},
    ]);
    const [Current, setCurrent] = useState(valueface[0].id);

    function onClick(v){
        setCurrent(v.id)
        global.facebox = v.value
        global.doaddtext = false
        global.addtexttype = 0
        // if(v.value==="3dview"){
        //     global.faceboxviewtoogle = "side-view"
        // }else{
        //     global.faceboxviewtoogle = "side-view active"
        //     global.faceboxviewtoogleposition = v.value+" Side"
        // }

    }
    const modeview = 'mode-view-'
    return(
            <div className="box-view-desain">    
                {
                  valueface.map((v,i)=>{return <button key={i} onClick={() => onClick(v)} className={modeview+""+(Current===v.id?"ac":"in")}><img src={(Current===v.id?v.img:v.imgin)} alt="icon"/></button>})
                }
            </div>
    )
}