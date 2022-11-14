import React,{useState} from "react";
import './submenubase.css'
import './globalconfig'
import imgtext from '../assets/svg/text.svg'
import imgfont1 from '../assets/img/font/font1.png'
import imgfont2 from '../assets/img/font/font2.png'
import imgfont3 from '../assets/img/font/font3.png'
import imgfont4 from '../assets/img/font/font4.png'

import deletebin from '../assets/icon/delete.png'
import editable from '../assets/icon/edit.png'

let textfont = [
    {id:1,img:imgtext,imging:"",label:"Add Text",catalog:""},
    {id:2,img:imgfont1,imging:"",label:"Dasmin Ant",catalog:""},
    {id:3,img:imgfont2,imging:"",label:"Putress Van",catalog:""},
    {id:4,img:imgfont3,imging:"",label:"Callor Muo",catalog:""},
    {id:5,img:imgfont4,imging:"",label:"Cand Pas",catalog:""},
]

export function SubMenuText(){
    const [Current, setCurrent] = useState(textfont[0].id);
    const [listoftext,setlistoftext] = useState([]);

    const [toogleshowsharedlay , settoogleshowsharedlay] = useState('inactive');
    const [btnshowlist , setbtnshowlist] = useState('inactive');
    const [widtSubText , setwidtSubText] = useState(1);
    const [htext,setHText] = useState(0);
    const [vtext,setVText] = useState(0);
    const [sizeText,setSizeText] = useState(0);
    const [text,setText] = useState('Some Text');

    const [htextSub,setHTextSub] = useState(0);
    const [vtextSub,setVTextSub] = useState(0);
    const [sizeTextSub,setSizeTextSub] = useState(0);
    const [textSub,setTextSub] = useState('');
    const [selectedit,setSelectEdit] = useState([]);
    const [texttypere, setTexttypere] = useState(0);

    const [iseditable,setIsEditable] = useState('Add');

    function setvaluetext(e){
        setText(e.target.value);
        global.tulisanText = e.target.value
    }

    function setSizevaluetext(e){
        setSizeText(e.target.value);
        global.sizeText = e.target.value
    }

    function setvvaluetext(e){
        setVText(e.target.value);
        global.vtext = e.target.value
    }

    function sethvaluetext(e){
        setHText(e.target.value);
        global.htext = e.target.value
    }

    function setvaluetextSub(e){
        setTextSub(e.target.value);
        global.tulisanTextSub = e.target.value
    }

    function setSizevaluetextSub(e){
        setSizeTextSub(e.target.value);
        global.sizeTextSub = e.target.value
    }

    function setvvaluetextSub(e){
        setVTextSub(e.target.value);
        global.vtextSub = e.target.value
    }

    function sethvaluetextSub(e){
        setHTextSub(e.target.value);
        global.htextSub = e.target.value
    }

    function onClick(v){
        setIsEditable('Add');
        setCurrent(v.id);
        global.addtexttype = v.id;
        setTexttypere(v.id);
        setwidtSubText(v.id);
        setText("Some Text");
        global.tulisanText = text;
        addtextdo();
        console.log(v);
        // if(global.facebox!=="3dview"){
        //     if(toogleshowsharedlay==='inactive'){
        //         settoogleshowsharedlay('active');
          
        //     }else{
        //         settoogleshowsharedlay('inactive');
        //     }
        // }

    }

    


    function addtextdo(){
        global.doaddtext = true;
        settoogleshowsharedlay('inactive');
        global.textobjectnameurut = global.textobjectnameurut+1;
        global.textobjectnameurutSub = global.textobjectnameurutSub + 1;

        setlistoftext([...listoftext , {
            id:global.textobjectnameurut,
            side:global.facebox ,
            text:global.tulisanText ,
            htext:global.htext,
            vtext:global.vtext,
            size:global.sizeText,
            textsub:global.tulisanTextSub,
            htextsub:global.htextSub,
            vtextsub:global.vtextSub,
            sizesub:global.sizeTextSub,
            addtexttype:global.addtexttype
        }]);

    }

    function updatetextdo(){
        const typetexts = selectedit.addtexttype;
        var subid = selectedit.id;
        global.removetextnamesub = 'addtextsub'+subid
        global.removetextname = 'addtext'+selectedit.id
        global.isremovetext = true;
        console.log(typetexts);
        global.addtexttype = typetexts
        global.doaddtext = true
        settoogleshowsharedlay('inactive');
        global.textobjectnameurut = global.textobjectnameurut + 1;
        global.textobjectnameurutSub = global.textobjectnameurutSub + 1;

        const updatelist = [...listoftext].map((list)=>{
            if(list.id === selectedit.id){
                list.text = global.tulisanText
                list.id = global.textobjectnameurut
            }
        });

    }
    
    function showsharedlay(){
        if(toogleshowsharedlay==='inactive'){
            settoogleshowsharedlay('active');
      
        }else{
            settoogleshowsharedlay('inactive');
        }
    }

    function setshowlaylist(){
        if(btnshowlist==='inactive'){
            setbtnshowlist('active');
      
        }else{
            setbtnshowlist('inactive');
        }
    }

    function removelisttext(item){
        const removelisttextrr = [...listoftext].filter(listtext => listtext.id !== item.id);
        setlistoftext(removelisttextrr);
        global.removetextnamesub = 'addtextsub'+item.id
        global.isremovetext = true
        global.removetextname = 'addtext'+item.id
    }
    
    function edittabletext(item){
        global.facebox = item.side
        setIsEditable('Edit');
        settoogleshowsharedlay('active');
        setHText(item.htext);
        setVText(item.vtext);
        setText(item.text);
        setSizeText(item.sizeText);

        setHTextSub(item.htextSub);
        setVTextSub(item.vtextSub);
        setTextSub(item.textSub);
        setSizeTextSub(item.sizeTextSub);

        setSelectEdit(item);
        global.facebox = item.side
        
        console.log(item);

    }

    const colorselected = 'colorselected'

    return <div className="submenubase-container">
        <p className="title-size"><label className="bold">Choose Text</label></p>
        <p><button className={btnshowlist==="active"?"btn-show-list active":"btn-show-list"} onClick={()=>{setshowlaylist()}}>Show List</button></p>
        <div className="base-lay">
        {
            textfont.map((v,i)=>{
                return <div  key={i}>
                <button key={i} onClick={() => onClick(v)} className={colorselected+" "+(Current===v.id?"active":"")}>
                    
                    {v.id===1?<img height={20} src={v.img}></img>:""}
                    {v.id!==1?<img height={110} width={110} src={v.img}></img>:""}
                    {v.text}
            </button><br></br>
            <button className="label-btn-color">{v.label}</button>
            </div>
            })
        }
        </div>
        
        <div className="boxname-lay">
            <div className={toogleshowsharedlay==='active'?"shared-design-lay active":"shared-design-lay"}>
                <div className="header-purchasereview">
                    <button className="label-shraed-title">{iseditable} Text</button>
                    <button className="btn-close-lay-shared"  onClick={()=>{showsharedlay()}}>X</button>
                </div>
                <div className="purchasereview-body">
                    <div className="balance-title">Side : {global.facebox} Face</div>
                    <div className="addpositiontext"></div>
                    <div className="balance-title">Position</div>
                    <div className="your-balance">H : <input className="input-number" type={'text'} value={htext} onChange={(e)=>{sethvaluetext(e)}}></input> V : <input className="input-number" type={'text'} value={vtext} onChange={(e)=>{setvvaluetext(e)}}></input> Size : <input className="input-number" type={'text'} value={sizeText} onChange={(e)=>{setSizevaluetext(e)}}></input></div>
                    <div><button className="captionhv">Zero is Center ex: h 0.1 , v 0.1 , size 0,1</button></div>
                    <div className="your-balance">Text </div>
                    <div className="your-balance"><input className="input-tulisan" type={'text'} value={text}  onChange={(e)=>{setvaluetext(e)}}></input></div>
                    <div className={widtSubText>=2?"addtextmore active":"addtextmore"}>
                        <div className="balance-title">Position</div>
                        <div className="your-balance">H : <input className="input-number" type={'text'} value={htextSub} onChange={(e)=>{sethvaluetextSub(e)}}></input> V : <input className="input-number" type={'text'} value={vtextSub} onChange={(e)=>{setvvaluetextSub(e)}}></input> Size : <input className="input-number" type={'text'} value={sizeTextSub} onChange={(e)=>{setSizevaluetextSub(e)}}></input></div>
                        <div><button className="captionhv">Zero is Center ex: h 0.1 , v 0.1 , size 0,1</button></div>
                        <div className="your-balance">Text Sub</div>
                        <div className="your-balance"><input className="input-tulisan" type={'text'} value={textSub}  onChange={(e)=>{setvaluetextSub(e)}}></input></div>
                    </div>
                    {
                        // iseditable==='Add'?<div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{addtextdo()}}>Add</button></div>:<div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{updatetextdo()}}>Update</button></div>
                        iseditable==='Add'?<div className="foot-note-purchasereview"><button className="btn-send-contact" >Add</button></div>:<div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{
                            setText("Some Text"); global.tulisanText = text;updatetextdo()}}>Update</button></div>
                    }
                </div>
            </div>
        </div>

        <div className={btnshowlist==="active"?"list-of-text active":"list-of-text"}>
            <div className="headlist"><button className="head-list-text">List Of Text</button><button className="btnex" onClick={()=>{setshowlaylist()}}>X</button></div>
            <div className="base-lay">
            {
                listoftext.map((item)=>{
                    return <div><button className="side-type">- {item.side}</button><button className="text-title">{item.text}</button><button className="btn-icon-resize" onClick={()=>{edittabletext(item)}}><img src={editable} width={15}/></button>  <button className="btn-icon-resize" onClick={()=>{removelisttext(item)}}><img src={deletebin} width={15}/></button></div>
                })
            }
            </div>
        </div>
    </div>
}