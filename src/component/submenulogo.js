import React,{useState,useRef} from "react";
import IconInfo from '../assets/icon/information-button.png'
import IconInfodefauld from '../assets/icon/upload-file-image.png'
import './submenulogo.css'
import axios from "axios";
import './globalconfig';
import deletebin from '../assets/icon/delete.png'
import editable from '../assets/icon/edit.png'

let btniconface =[
    {id:1,text:"Front",active:"aktive"},
    {id:2,text:"Back",active:"aktive"},
    {id:3,text:"Left",active:"aktive"},
    {id:4,text:"Right",active:"aktive"},
    {id:5,text:"Top",active:"aktive"},
    {id:6,text:"Bottom",active:"aktive"},
]


let haveuploadicon =false
export function SubMenuLogo (){
    const [logos , setLogos] = useState(IconInfodefauld);
    const [btnshowlist , setbtnshowlist] = useState('inactive');
    const [listoflogo,setlistoflogo] = useState([]);

    function onClickac(v){
        if(v.active==="aktive"){
            v.active=""
            console.log(v.active)
        }else{
            v.active="aktive"
            console.log(v.active)
        }
    }

    const fileupload = useRef()

    function uploadlogofunc(e){
        if(global.facebox!=="3dview"){
            setLogos(URL.createObjectURL(e.target.files[0]))
           
            global.addlogo = URL.createObjectURL(e.target.files[0])
            
    
            const data = new FormData();
            data.append('fileToUpload', fileupload.current.files[0])
            data.append('side',global.facebox)
            data.append('userid',1);
            data.append('axis',"0,2.39,0");
    
            axios.post(global.urlserver +'uploadfile.php',data , {
                headers:{
                    'content-type':'multipart/form-data'
                }
            })
            .then(res => { 
                // console.log('Post Success: ',res.data);
                // console.log('File Success: ',res.data.NamaFile);
                global.imageafterupload = res.data.NamaFile;
                // console.log('global_imageupload:'+global.imageafterupload);
                haveuploadicon = true;
                global.doaddlogo = true;

            })
            .catch(err => {console.log('err: ',err)})
        }

    }

    function removeicon(){
        setLogos(IconInfodefauld)
        haveuploadicon = false
    }
    
    function setshowlaylist(){
        if(btnshowlist==='inactive'){
            setbtnshowlist('active');
      
        }else{
            setbtnshowlist('inactive');
        }
    }

    return<div className="submenu-container">
            <p className="title-size"><label className="bold">Upload your logo</label> </p>
            <div className="counter-upload">
                <img className="img-upload-show" src={logos} alt="Add logo" />
                <input type={'file'} name="fileToUpload" onChange={(e)=>{uploadlogofunc(e)}} ref={fileupload}/>
            </div>

            <div></div>
            <div>
                {/* <button className={"btn-new-upload-logo"+" "+(haveuploadicon===true?"active":"")}>Upload New Logo</button> */}
                <button className={"btn-remove-logo"+" "+(haveuploadicon===true?"active":"")} onClick={()=> removeicon()}>Remove Logo</button>
                <p><button className={btnshowlist==="active"?"btn-show-list active":"btn-show-list"} onClick={()=>{setshowlaylist()}}>Show List</button></p>
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
            <div className={btnshowlist==="active"?"list-of-text active":"list-of-text"}>
            <div className="headlist"><button className="head-list-text">Logo</button><button className="btnex" onClick={()=>{setshowlaylist()}}>X</button></div>
            <div className="base-lay">
            {
                listoflogo.map((item)=>{
                    return <div><button className="side-type">- {item.side}</button><button className="text-title">{item.text}</button><button className="btn-icon-resize" onClick={()=>{}}><img src={editable} width={15}/></button>  <button className="btn-icon-resize" onClick={()=>{}}><img src={deletebin} width={15}/></button></div>
                })
            }
            </div>
        </div>
            
        </div>
}