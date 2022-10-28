import React,{useState} from "react";
import './submenumaterial.css'
import imgno from '../assets/img/material/img-notemplate.png'
import materialregular from '../assets/img/material/img-hello.png'
import materialpremium from '../assets/img/material/img-word.png'
import imgleave from '../assets/img/material/img-leave.png'
import imgcrdhello from '../assets/img/material/img-crd-hello.png'
import imgbold from '../assets/img/material/img-bold.png'
import './globalconfig'
import deletebin from '../assets/icon/delete.png'
import editable from '../assets/icon/edit.png'

let materialdata = [
    
    {id:0,img:imgno,title:"No Theme",type:""},
    {id:1,img:materialregular,title:"Gratis I",type:"Free"},
    {id:2,img:materialpremium,title:"Gratis II",type:"Free"},
    {id:3,img:imgleave,title:"Leave",type:"Rp. 20000"},
    {id:4,img:imgcrdhello,title:"car Hello",type:"Rp. 25000"},
    {id:5,img:imgbold,title:"Boldi",type:"Rp. 21000"},
]

export function SubMenuTemplate(){
    const [Current, setCurrent] = useState(materialdata[0].id)
    const [listoftemplate,setlistoftemplate] = useState([]);
    const [toogleshowsharedlay , settoogleshowsharedlay] = useState('inactive');
    const [btnshowlist , setbtnshowlist] = useState('inactive');
    const [sizeShape,setSizeShape] = useState(0);
    const [imgpreview,setimgpreview] = useState('0.1');
    const [TextTemplate,setTextTemplate] = useState('0.1');
    const [htext,sethtext] = useState('0.1');
    const [vtext,setvtext] = useState('0.1');
    const [showimgpreview,setshowimgpreview] = useState('hide');
    const [showpositionpreview,setshowposistionpreview] = useState('hide');
    const [showtextpreview,setshowtextpreview] = useState('hide');
    const [texttypeselect,settexttypeselect] = useState('');
    const [itemidselect,setitemidselect] = useState(0);
    const [itemobjectname,setitemobjectname] = useState(0);

    function onClick(v){
        setCurrent(v.id);
        global.templatenumber = v.id
        global.changetemplate = true

        global.templateurut = global.templateurut+1;

        setlistoftemplate([]);

        if(v.id===1){
            setlistoftemplate([...listoftemplate,{
                id:1,
                side:"Top",
                text:"Hello.c" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 1 template 1",
                type:"Text"
            },
            {
                id:2,
                side:"Front",
                text:"Facebook.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 2 template 1",
                type:"Text"
            },
            {
                id:3,
                side:"Right",
                text:"@Company" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 3 template 1",
                type:"Text"
            },
            {
                id:4,
                side:"Left",
                text:"Open Me" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 4 template 1",
                type:"Text"
            },
            {
                id:5,
                side:"Back",
                text:"MyStore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 5 template 1",
                type:"Text"
            }
        ])

        }

        if(v.id===2){
            setlistoftemplate([...listoftemplate,{
                id:1,
                side:"Top",
                text:"Make Your Happy" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Kunstler Script_Regular.json",
                nameobject:"text 1 template 2",
                type:"Text"
            },{
                id:2,
                side:"Right",
                text:"MyStore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Kunstler Script_Regular.json",
                nameobject:"text 2 template 2",
                type:"Text"
            },{
                id:3,
                side:"Front",
                text:"Facebook.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Bauhaus 93_Regular.json",
                nameobject:"text 3 template 2",
                type:"Text"
            },{
                id:4,
                side:"Front",
                text:"icon Facebook" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"facebook icon template 2",
                type:"icon",
                dir:"../img/FacebookIconBlack.png"
            },{
                id:5,
                side:"Left",
                text:"Open Me" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 4 template 2",
                type:"Text"
            },{
                id:6,
                side:"Back",
                text:"@Company" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Kunstler Script_Regular.json",
                nameobject:"text 5 template 2",
                type:"Text"
            },{
                id:7,
                side:"Back",
                text:"Icon Instagram" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"instagram icon template 2",
                type:"icon",
                dir:"../img/black-instagram.png"
            },])
        }  
        
        if(v.id===3){
            setlistoftemplate([...listoftemplate,{
                id:1,
                side:"Top",
                text:"Friendly Box" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 1 template 3",
                type:"Text"
            },{
                id:2,
                side:"Right",
                text:"www.mystore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 2 template 3",
                type:"Text"
            },{
                id:3,
                side:"Front",
                text:"www.mystore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Bauhaus 93_Regular.json",
                nameobject:"text 3 template 3",
                type:"Text"
            },{
                id:4,
                side:"Front",
                text:"icon Facebook" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"facebook icon template 3",
                type:"icon",
                dir:"../img/FacebookIconBlack.png"
            },{
                id:5,
                side:"Front",
                text:"icon Recycle" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"recycle icon template 3",
                type:"icon",
                dir:"../img/recycle.png"
            },{
                id:6,
                side:"Left",
                text:"Open Me" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 4 template 3",
                type:"Text"
            },{
                id:7,
                side:"Back",
                text:"www.mystore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 5 template 3",
                type:"Text"
            },{
                id:8,
                side:"Back",
                text:"Icon Instagram" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"instagram icon template 3",
                type:"icon",
                dir:"../img/black-instagram.png"
            },])
        }    
        
        if(v.id===4){
            setlistoftemplate([...listoftemplate,{
                id:1,
                side:"Top",
                text:"Friendly Box" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 1 template 4",
                type:"Text"
            },{
                id:2,
                side:"Right",
                text:"www.mystore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 4 template 4",
                type:"Text"
            },{
                id:3,
                side:"Left",
                text:"Open Me" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 5 template 4",
                type:"Text"
            }])
        }

        if(v.id===5){
            setlistoftemplate([...listoftemplate,{
                id:1,
                side:"Top",
                text:"Hello There!" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 1 template 5",
                type:"Text"
            },{
                id:2,
                side:"Right",
                text:"nice day" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 2 template 5",
                type:"Text"
            },{
                id:3,
                side:"Front",
                text:"All Is Family" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Bauhaus 93_Regular.json",
                nameobject:"text 3 template 5",
                type:"Text"
            },{
                id:4,
                side:"Front",
                text:"icon ball" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"ball1 icon template 5",
                type:"icon",
                dir:"../img/ball.png"
            },{
                id:5,
                side:"Left",
                text:"Lucky!" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 4 template 5",
                type:"Text"
            },{
                id:6,
                side:"Back",
                text:"www.mystore.com" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:"./Gloucester MT Extra Condensed_Regular.json",
                nameobject:"text 5 template 5",
                type:"Text"
            },{
                id:7,
                side:"Back",
                text:"Icon Ball 1" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"ball2 icon template 5",
                type:"icon",
                dir:"../img/ball.png"
            },{
                id:8,
                side:"Back",
                text:"Icon Ball 2" ,
                htext:global.htext,
                vtext:global.vtext,
                size:global.sizeText,
                addtexttype:1,
                nameobject:"ball3 icon template 5",
                type:"icon",
                dir:"../img/ball.png"
            },])
        }
    }

    function setshowlaylist(){
        if(btnshowlist==='inactive'){
            setbtnshowlist('active');
      
        }else{
            setbtnshowlist('inactive');
        }
    }

    function deleteitemlist(item){
        global.isremovetext = true
        global.removetextname = item.nameobject

        const removelisttrr = [...listoftemplate].filter(listoftemplate => listoftemplate.id !== item.id);
        setlistoftemplate(removelisttrr);

    }

            
    function showsharedlay(){
        if(toogleshowsharedlay==='inactive'){
            settoogleshowsharedlay('active');
      
        }else{
            settoogleshowsharedlay('inactive');
        }
    }

    function edititemtemplate(item){
        if(item.type==="Text"){
            setshowimgpreview("Hide");
            setshowtextpreview("Show");
            setshowposistionpreview("Show");
        }else{
            setshowimgpreview("Show");
            setshowtextpreview("Hide");
            setshowposistionpreview("Hide");
        }
        
        global.facebox = item.side
        settoogleshowsharedlay('active');
        setTextTemplate(item.text);
        setSizeShape(item.size);
        setimgpreview(item.dir);
        settexttypeselect(item.addtexttype);
        setitemidselect(item.id);
        setitemobjectname(item.nameobject);
    }

    function updatetemplate(){
        settoogleshowsharedlay('inactive');
        
        global.isremovetext = true;
        global.removetextname = itemobjectname;

        if(showimgpreview==="Show"){

            global.isimgtemplateupdate = true;
            global.imgtemplatesize = sizeShape;
            global.imgtemplatedir = imgpreview;
            global.imgobjectname = itemobjectname;

            const objectupdate = [...listoftemplate].map((list)=>{
                if(list.id===itemidselect){
                    list.nameobject = itemobjectname
                }
            });

        }else{
            global.istexttemplateupdate = true
            global.texttemplatesize = sizeShape;
            global.texttulisantemplate = TextTemplate;
            global.htexttemplate = htext;
            global.vtexttemplate = vtext;
            global.textdirtemplate = texttypeselect;
            global.texttemplateobjectname = itemobjectname;

            const objectupdate = [...listoftemplate].map((list)=>{
                if(list.id===itemidselect){
                    list.nameobject = itemobjectname
                    list.text = TextTemplate
                }
            });
        }



    }

    const btnmaterial = 'btn-material';

    return <div className="submenu-container">
        <div className="base-lay">
        <p className="title-size"><label className="bold">Choose Template</label></p>
        <p><button className={btnshowlist==="active"?"btn-show-list active":"btn-show-list"} onClick={()=>{setshowlaylist()}}>Show List</button></p>
        {
            materialdata.map((v,i)=>{return <div key={i}><button key={i} onClick={() => onClick(v)} className={btnmaterial+" "+(Current===v.id?"active":"")}><img className="img-template" src={v.img} alt="icon" width={100}/>
            <div className="mo-check-po"></div>
            <label className="template-name">{v.title}</label><br></br>
            <label className={(v.type!=="Free"?"template-price-premium":"template-price")}>{v.type}</label>

            </button><p></p></div>})
        }
        </div>

        
        <div className="boxname-lay">
            <div className={toogleshowsharedlay==='active'?"shared-design-lay active":"shared-design-lay"}>
                <div className="header-purchasereview">
                    <button className="label-shraed-title">Edit Item Template</button>
                    <button className="btn-close-lay-shared"  onClick={()=>{showsharedlay()}}>X</button>
                </div>
                <div className="purchasereview-body">
                    <div className="balance-title">Side : {global.facebox} Face</div>
                    <div className="addpositiontext">{showimgpreview ==="Show"?<img src={imgpreview} width={30}></img>:""}</div>
                    <div className="your-balance">{showimgpreview ==="Hide"?<label>H{": "}</label>:""}{showimgpreview ==="Hide"?<input className="input-number" type={'text'} value={htext} onChange={(e)=>{sethtext(e.target.value)}}></input>:""}{showimgpreview ==="Hide"? <label>V{": "}</label>:""}{showimgpreview ==="Hide"?<input className="input-number" type={'text'} value={vtext} onChange={(e)=>{setvtext(e.target.value)}}></input>:""} Size : <input className="input-number" type={'text'} value={sizeShape} onChange={(e)=>{setSizeShape(e.target.value)}}></input></div>
                    {/* <div className="your-balance">{showimgpreview ==="Hide"?<label>Font{" :"}</label>:""}</div> */}
                    <div className="your-balance">{showimgpreview ==="Hide"?<label>Text{" :"}</label>:""}{showimgpreview ==="Hide"? <input className="input-tulisan" type={'text'} value={TextTemplate} onChange={(e)=>{setTextTemplate(e.target.value)}}></input>:""}</div>
                    <div><button className="captionhv">Zero ex: size 0,1</button></div>
                    <div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{updatetemplate()}}>Update</button></div>
                </div>
            </div>
        </div>

        <div className={btnshowlist==="active"?"list-of-text active":"list-of-text"}>
            <div className="headlist"><button className="head-list-text">Template</button><button className="btnex" onClick={()=>{setshowlaylist()}}>X</button></div>
            <div className="base-lay">
            {
                listoftemplate.map((item)=>{
                    return <div key={item.id}><button className="side-type">- {item.side}</button><button className="text-title">{item.text}</button><button className="btn-icon-resize" onClick={()=>{edititemtemplate(item)}}><img src={editable} width={15}/></button>  <button className="btn-icon-resize" onClick={()=>{deleteitemlist(item)}}><img src={deletebin} width={15}/></button></div>
                })
            }
            </div>
        </div>
    </div>
}