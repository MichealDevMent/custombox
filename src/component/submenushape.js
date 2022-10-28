import React,{useState} from "react";
import './submenubase.css'
import './globalconfig'
import abstract from '../assets/img/material/abstract.png'
import abstract1 from '../assets/img/material/abstract1.png'
import abstract2 from '../assets/img/material/abstract2.png'
import abstract3 from '../assets/img/material/abstract3.png'
import bookmark from '../assets/img/material/bookmark.png'
import circle from '../assets/img/material/circle.png'
import diamondsymbol from '../assets/img/material/diamond-symbol.png'
import fire from '../assets/img/material/fire.png'
import heart from '../assets/img/material/heart.png'
import hexagon from '../assets/img/material/hexagon.png'
import hexagon1 from '../assets/img/material/hexagon1.png'
import minusbigsymbol from '../assets/img/material/minus-big-symbol.png'
import mozy from '../assets/img/material/mozy.png'
import pill from '../assets/img/material/pill.png'
import play from '../assets/img/material/play.png'
import rhombus from '../assets/img/material/rhombus.png'
import rhombus1 from '../assets/img/material/rhombus1.png'
import ribbonblackshape from '../assets/img/material/ribbon-black-shape.png'
import ring from '../assets/img/material/ring.png'
import square from '../assets/img/material/square.png'
import square1 from '../assets/img/material/square1.png'
import star from '../assets/img/material/star.png'
import deletebin from '../assets/icon/delete.png'
import editable from '../assets/icon/edit.png'

let textfont = [
    
    {id:1,img:abstract,dir:"../img/abstract.png",label:"",catalog:""},
    {id:2,img:abstract1,dir:"../img/abstract1.png",label:"",catalog:""},
    {id:3,img:abstract2,dir:"../img/abstract2.png",label:"",catalog:""},
    {id:4,img:abstract3,dir:"../img/abstract3.png",label:"",catalog:""},
    {id:5,img:bookmark,dir:"../img/bookmark.png",label:"",catalog:""},
    {id:6,img:circle,dir:"../img/circle.png",label:"",catalog:""},
    {id:7,img:diamondsymbol,dir:"../img/diamondsymbol.png",label:"",catalog:""},
    {id:8,img:fire,dir:"../img/fire.png",label:"",catalog:""},
    {id:9,img:heart,dir:"../img/heart.png",label:"",catalog:""},
    {id:10,img:hexagon,dir:"../img/hexagon.png",label:"",catalog:""},
    {id:11,img:hexagon1,dir:"../img/hexagon1.png",label:"",catalog:""},
    {id:12,img:minusbigsymbol,dir:"../img/minusbigsymbol.png",label:"",catalog:""},
    {id:13,img:mozy,dir:"../img/mozy.png",label:"",catalog:""},
    {id:14,img:pill,dir:"../img/pill.png",label:"",catalog:""},
    {id:15,img:play,dir:"../img/play.png",label:"",catalog:""},
    {id:16,img:rhombus,dir:"../img/rhombus.png",label:"",catalog:""},
    {id:17,img:rhombus1,dir:"../img/rhombus1.png",label:"",catalog:""},
    {id:18,img:ribbonblackshape,dir:"../img/ribbonblackshape.png",label:"",catalog:""},
    {id:19,img:ring,dir:"../img/ring.png",label:"",catalog:""},
    {id:20,img:square,dir:"../img/square.png",label:"",catalog:""},
    {id:21,img:square1,dir:"../img/square1.png",label:"",catalog:""},
    {id:22,img:star,dir:"../img/star.png",label:"",catalog:""},
]

export function SubMenuShape(){
    const [Current, setCurrent] = useState(textfont[0].id)
    const [btnshowlist , setbtnshowlist] = useState('inactive');
    const [listofshape,setlistofshape] = useState([]);
    const [toogleshowsharedlay , settoogleshowsharedlay] = useState('inactive');
    const [sizeShape,setSizeShape] = useState(0);
    const [imgpreview,setimgpreview] = useState('');
    const [shapetoremove,setshpaetoremove] = useState('');
    const [shapeid,setshapeid] = useState(0);
    const [shapedir,setshapedir] = useState('');
    
    function onClick(v){
        if(global.facebox!=="3dview"){
            setCurrent(v.id);
            global.doaddshape = true
            global.addshapeno = v.id
            global.shapesize = 0.5
            global.addshapedir = v.dir
            global.listshapeurut =global.listshapeurut+1;
    
            setlistofshape([...listofshape ,{
                id:global.listshapeurut,
                shape:v.id,
                side:global.facebox,
                text:v.dir,
                obejctname:"shape"+global.listshapeurut,
                size:global.shapesize
            }]);
        }
       
    }

    function setshowlaylist(){
        if(btnshowlist==='inactive'){
            setbtnshowlist('active');
      
        }else{
            setbtnshowlist('inactive');
        }
    }

    function deleteshape(item){
        global.isremoveshap = true
        global.removeshapename = item.obejctname

        const removeshape = [...listofshape].filter(listshape => listshape.id !== item.id);
        setlistofshape(removeshape);


    }
        
    function showsharedlay(){
        if(toogleshowsharedlay==='inactive'){
            settoogleshowsharedlay('active');
      
        }else{
            settoogleshowsharedlay('inactive');
        }
    }

    function editshape(item){
        global.facebox = item.side
        settoogleshowsharedlay('active');
        setimgpreview(item.text);
        setSizeShape(item.size);
        setshpaetoremove(item.obejctname);
        setshapeid(item.id);
        setshapedir(item.text);
    }

    function updateshape(){
        global.isremoveshap = true;
        global.removeshapename = shapetoremove;

        // const remove = [...listofshape].filter(listofshape => listofshape.obejctname !== shapetoremove);
        // setlistofshape(remove);

        settoogleshowsharedlay('inactive');

        global.doaddshape = true;
        global.addshapeno = shapeid;
        global.shapesize = sizeShape;
        global.addshapedir = shapedir;
        global.listshapeurut = shapeid;

        // setlistofshape([...listofshape ,{
        //     id:global.listshapeurut,
        //     shape:shapeid,
        //     side:global.facebox,
        //     text:shapedir,
        //     obejctname:"shape"+global.listshapeurut,
        //     size:global.shapesize
        // }]);

        // const updatelist = [...listofshape].map((list)=>{
        //     if(list.id === shapeid){
        //       //  list.id = global.listshapeurut;
        //     }
        // });
          
    }

    const colorselected = 'colorselected';

    return <div className="submenubase-container">
        <p className="title-size"><label className="bold">Choose Shape</label> </p>
        <p><button className={btnshowlist==="active"?"btn-show-list active":"btn-show-list"} onClick={()=>{setshowlaylist()}}>Show List</button></p>
        <div className="base-lay">
        {
            textfont.map((v,i)=>{
                return <div key={i}>
                <button key={i} onClick={() => onClick(v)} className={colorselected+" "+(Current===v.id?"active":"")}>
                    
                    {v.id===1?<img height={110} width={110} src={v.img}></img>:""}
                    {v.id!==1?<img height={110} width={110} src={v.img}></img>:""}
                    {v.text}
            </button>
            </div>
            })
        }
        </div>

        <div className="boxname-lay">
            <div className={toogleshowsharedlay==='active'?"shared-design-lay active":"shared-design-lay"}>
                <div className="header-purchasereview">
                    <button className="label-shraed-title">Edit Shape</button>
                    <button className="btn-close-lay-shared"  onClick={()=>{showsharedlay()}}>X</button>
                </div>
                <div className="purchasereview-body">
                    <div className="balance-title">Side : {global.facebox} Face</div>
                    <div className="addpositiontext"><img src={imgpreview} width={30}></img></div>
                    <div className="your-balance">Size : <input className="input-number" type={'text'} value={sizeShape} onChange={(e)=>{setSizeShape(e.target.value)}}></input></div>
                    <div><button className="captionhv">Zero ex: size 0,1</button></div>
                    <div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{updateshape()}}>Update</button></div>
                </div>
            </div>
        </div>

        <div className={btnshowlist==="active"?"list-of-text active":"list-of-text"}>
            <div className="headlist"><button className="head-list-text">Shape</button><button className="btnex" onClick={()=>{setshowlaylist()}}>X</button></div>
            <div className="base-lay">
            {
                listofshape.map((item,i)=>{
                    return <div ><button className="side-type">- {item.side}</button><button className="text-title"><img src={item.text} width={10}></img></button><button className="btn-icon-resize" onClick={()=>{editshape(item)}}><img src={editable} width={15}/></button>  <button className="btn-icon-resize" onClick={()=>{deleteshape(item)}}><img src={deletebin} width={15}/></button></div>
                })
            }
            </div>
        </div>
    </div>
}