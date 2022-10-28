import React,{useState} from "react";
import './eco.css';
import './submenumaterial.css'
import materialregular from '../assets/img/material/approved-stamp.png'
import materialpremium from '../assets/img/material/circular-label-with-certified-stamp.png'
import imgleave from '../assets/img/material/stample.png'
import './globalconfig'
import deletebin from '../assets/icon/delete.png'
import editable from '../assets/icon/edit.png'

let materialdata = [
    
    {id:1,img:materialregular,title:"Gratis I",type:"Free",text:'../assets/img/material/approved-stamp.png'},
    {id:2,img:materialpremium,title:"Gratis II",type:"Free",text:'../assets/img/material/circular-label-with-certified-stamp.png'},
    {id:3,img:imgleave,title:"Leave",type:"Rp. 20000",text:'../assets/img/material/stample.png'},
]
export default function Eco(){
    const [Current, setCurrent] = useState(materialdata[0].id)
    const [btnshowlist , setbtnshowlist] = useState('inactive');
    const [listofeco,setlistofeco] = useState([]);
    const [toogleshowsharedlay , settoogleshowsharedlay] = useState('inactive');
    const [imgpreview,setimgpreview] = useState('');
    const [sizeStamp,setSizeStamp] = useState(0);
    const [selectid,setselectid] = useState(0);
    const [stamptoremove,setstamptoremove] = useState('');
    const [gettextstamp,setgtextstamp] = useState('');
    const [getimgstamp,setgimgstamp] = useState('');

    function onClick(v){
        if(global.facebox!=="3dview"){
            setCurrent(v.id);
            global.doaddstamp = true
            global.addstampno = v.id
            global.liststampurut =global.liststampurut+1;
            global.stampsize = 0.5

            setlistofeco([...listofeco,{
                    id:global.liststampurut,
                    side:global.facebox,
                    stampno:v.id,
                    text:v.title,
                    img:v.text,
                    size:global.stampsize,
                    objectname:"stamp"+global.liststampurut
                }]) ;
        }

   
    }
    function setshowlaylist(){
        if(btnshowlist==='inactive'){
            setbtnshowlist('active');
      
        }else{
            setbtnshowlist('inactive');
        }
    }
    function deleteliststamp(item){
        const removestamp = [...listofeco].filter(listeco => listeco.id !== item.id);
        setlistofeco(removestamp);

        global.isremovestamp = true
        global.removestampname = item.objectname
    }
            
    function showsharedlay(){
        if(toogleshowsharedlay==='inactive'){
            settoogleshowsharedlay('active');
      
        }else{
            settoogleshowsharedlay('inactive');
        }
    }

    function editstamp(item){
        global.facebox = item.side
        settoogleshowsharedlay('active');
        setimgpreview(item.img);
        setSizeStamp(item.size);
        setselectid(item.stampno);
        setstamptoremove(item.objectname);
        setgtextstamp(item.text);
        setgimgstamp(item.img);

    }

    function updateStamp(){
        global.isremovestamp = true
        global.removestampname = stamptoremove

        // const remove = [...listofeco].filter(listofstamp => listofstamp.objectname !== stamptoremove);
        // setlistofeco(remove);
        global.liststampurut =global.liststampurut + 1;
        global.doaddstamp = true
        global.addstampno = selectid
        global.stampsize = sizeStamp

        // setlistofeco([...listofeco,{
        //     id:global.liststampurut,
        //     side:global.facebox,
        //     text:gettextstamp,
        //     img:getimgstamp,
        //     size:global.stampsize,
        //     objectname:"stamp"+global.liststampurut
        // }]) ;

        const updateshape = [...listofeco].map((eco)=>{
            if(eco.id === selectid){
                eco.id = global.liststampurut;
                eco.objectname = "stamp"+global.liststampurut
            }
        });
        settoogleshowsharedlay('inactive');

    }

    const btnmaterial = 'btn-icon'
    return <div className="submenu-container">
        <div className="base-lay">
        <p className="title-size"><label className="bold">Eco symbols</label> </p>
        <p><button className={btnshowlist==="active"?"btn-show-list active":"btn-show-list"} onClick={()=>{setshowlaylist()}}>Show List</button></p>
        {
            materialdata.map((v,i)=>{return <div  key={i}><button key={i} onClick={() => onClick(v)} className={btnmaterial+" "+(Current===v.id?"active":"")}><img className="img-template" src={v.img} alt="icon" width={100}/>
   

            </button><p></p></div>})
        }
        </div>

        <div className="boxname-lay">
            <div className={toogleshowsharedlay==='active'?"shared-design-lay active":"shared-design-lay"}>
                <div className="header-purchasereview">
                    <button className="label-shraed-title">Edit Stamp</button>
                    <button className="btn-close-lay-shared"  onClick={()=>{showsharedlay()}}>X</button>
                </div>
                <div className="purchasereview-body">
                    <div className="balance-title">Side : {global.facebox} Face</div>
                    <div className="addpositiontext"><img src={imgpreview} width={30}></img></div>
                    <div className="your-balance">Size : <input className="input-number" type={'text'} value={sizeStamp} onChange={(e)=>{setSizeStamp(e.target.value)}}></input></div>
                    <div><button className="captionhv">Zero ex: size 0,1</button></div>
                    <div className="foot-note-purchasereview"><button className="btn-send-contact" onClick={()=>{updateStamp()}}>Update</button></div>
                </div>
            </div>
        </div>

        <div className={btnshowlist==="active"?"list-of-text active":"list-of-text"}>
            <div className="headlist"><button className="head-list-text">Stamp</button><button className="btnex" onClick={()=>{setshowlaylist()}}>X</button></div>
            <div className="base-lay">
            {
                listofeco.map((item)=>{
                    return <div><button className="side-type">- {item.side}</button><button className="text-title">{item.text}</button><button className="btn-icon-resize" onClick={()=>{editstamp(item)}}><img src={editable} width={15}/></button>  <button className="btn-icon-resize" onClick={()=>{deleteliststamp(item)}}><img src={deletebin} width={15}/></button></div>
                })
            }
            </div>
        </div>
    </div>
}