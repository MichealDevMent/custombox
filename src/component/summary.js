import React,{useState} from "react";
import './summary.css';
import './globalconfig'

let type=[
    {id:1,text:'Type',value:'Mailer Box'}
]

let material=[
    {id:1,text:'Material',value:'Corugated Kraft'}
]

let quantity=[
    {id:1,text:'Quantity',value:100}
]

let unitprice=[
    {id:1,text:'Price Per Unit',value:3500}
]
let timeestimasi=[
    {id:1,text:'Time Estimasi ',value:7}
]

let subtotal=[
    {id:1,text:'Subtotal ',value:1050000}
]

let buttoggle=[
    {id:1,text:"Show"}
]

var togglemode ="Show"
export function Summary(){
    const [Current, setCurrent] = useState(type[0].id)
    const [quaCurrent,setQuaCurrent] = useState(global.qua)
    const [toogle,settoggle] = useState(buttoggle.id)
    function onClick(v){
        settoggle(v.id)
    }
    function onClickbtntoogle(v){
        if (v.text === "Show"){
            settoggle("Hide")
            v.text ="Hide"
            togglemode ="Hide"
        }else{
            settoggle("Show")
            v.text ="Show"
            togglemode ="Show"

        }
    }
    const btn = 'btn'

    return(
        <div>
            {
                buttoggle.map((v,i)=>{return <button key={i} onClick={() => onClickbtntoogle(v)} className={"btn-sum-toggle"+" "+(toogle===v.id?"active":"")}>{v.text}</button>})
            }
            <div className={"summary"+" "+(togglemode==="Show"?"display":"")}>
                <h3>Order Summary</h3>
                {
                type.map((v)=>{return <div className="summary-label"><button className="label-type-box">{v.text} </button><button className="value-type-box">{v.value}</button></div>})
                }

                {
                material.map((v)=>{return <div className="summary-label"><button className="label-type-box">{v.text}</button><button className="value-type-box">{global.materialname}</button></div>})
                }
                {
                quantity.map((v)=>{return <div className="summary-label">{v.text} <input className={'quantity'} type="number" min={0} value={global.qua} onChange={(e)=> setQuaCurrent(e.target.value)}/></div>})
                }
                {
                unitprice.map((v)=>{return <div className="summary-label"><button className="label-type-box">{v.text}</button><button className="value-type-box">IDR {(global.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</button></div>})
                }
                {
                timeestimasi.map((v)=>{return <div className="summary-label"><label  className={'label-subtotal'}>{v.text}</label> <button className="value-type-box">{global.timeestimasi}</button> Hari</div>})
                }
                {
                subtotal.map((v)=>{return <div className="summary-label"><label className={'label-subtotal'}>{v.text}</label> <button className={'value-subtotal'}> IDR {(global.total).toLocaleString(undefined, { maximumFractionDigits: 2 })}</button></div>})
                }
                <button className="btn-order">Submit Order</button>
                <button className="btn-media"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.15185 21.06C5.88663 21.06 5.63228 20.9546 5.44474 20.7671C5.2572 20.5796 5.15185 20.3252 5.15185 20.06L5.00185 5.4C4.98981 5.10234 5.03673 4.80525 5.13992 4.52579C5.24311 4.24633 5.40053 3.99004 5.60313 3.77164C5.80573 3.55324 6.04951 3.37705 6.32044 3.25321C6.59138 3.12936 6.88413 3.0603 7.18185 3.05L16.7718 3C17.07 3.00521 17.3641 3.06909 17.6375 3.18801C17.911 3.30692 18.1583 3.47854 18.3654 3.69305C18.5725 3.90756 18.7352 4.16077 18.8445 4.43821C18.9537 4.71565 19.0071 5.01189 19.0018 5.31L19.1418 19.97C19.1436 20.1452 19.0992 20.3178 19.0132 20.4705C18.9272 20.6232 18.8026 20.7506 18.6518 20.84C18.4998 20.9278 18.3274 20.974 18.1518 20.974C17.9763 20.974 17.8039 20.9278 17.6518 20.84L11.9518 17.68L6.66185 20.91C6.5052 20.9975 6.33092 21.0488 6.15185 21.06ZM11.9118 15.51C12.0856 15.5103 12.2569 15.5514 12.4118 15.63L17.1218 18.24L17.0018 5.29C17.0018 5.09 16.8718 4.95 16.7918 4.96L7.19185 5.05C7.11185 5.05 7.00185 5.18 7.00185 5.38L7.12185 18.28L11.4018 15.65C11.5573 15.561 11.7327 15.5128 11.9118 15.51Z" fill="#FA7C78"/>
                </svg> Save for Later</button>
                                <button className="btn-media2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50974 12.1534C8.50974 12.518 8.36616 12.8757 8.11586 13.1329C7.86265 13.395 7.52504 13.5379 7.16803 13.5379C6.4278 13.5379 5.82534 12.9171 5.82534 12.1534C5.82534 11.3896 6.4278 10.7678 7.16803 10.7678C7.90728 10.7678 8.50974 11.3896 8.50974 12.1534ZM16.8113 3.88049C17.5506 3.88049 18.1521 4.50232 18.1521 5.26604C18.1521 6.02977 17.5506 6.65159 16.8113 6.65159C16.0711 6.65159 15.4696 6.02977 15.4696 5.26604C15.4696 4.50232 16.0711 3.88049 16.8113 3.88049ZM16.8113 17.328C17.5506 17.328 18.1521 17.9488 18.1521 18.7125C18.1521 19.4763 17.5506 20.0971 16.8113 20.0971C16.0711 20.0971 15.4696 19.4763 15.4696 18.7125C15.4696 17.9488 16.0711 17.328 16.8113 17.328ZM19.0757 16.4115C17.9707 15.2733 16.2195 15.1294 14.9593 16.0676L10.1736 13.1487C10.3802 12.5012 10.3792 11.8025 10.1736 11.1541L15.2048 8.06177C15.6898 8.36036 16.2438 8.51803 16.8113 8.51902H16.8181C18.2316 8.51902 19.4851 7.54046 19.8663 6.13816C20.2495 4.7339 19.6704 3.22517 18.4586 2.46933C17.2469 1.71349 15.6801 1.88397 14.6469 2.8842C13.6496 3.85192 13.3741 5.38232 13.9542 6.6506L9.13549 9.61188C7.8578 8.55942 6.00191 8.68359 4.86877 9.9154C3.71041 11.1719 3.71041 13.1398 4.86877 14.3963C6.00288 15.6291 7.8578 15.7503 9.13549 14.6988L13.8456 17.5625C13.2994 19.0456 13.8708 20.7416 15.2096 21.5506C15.7121 21.8542 16.2661 22 16.8162 22C17.7737 22 18.7167 21.5565 19.3366 20.7298C20.3126 19.4319 20.2001 17.5763 19.0757 16.4115Z" fill="#FA7D78"/>
                </svg>
                Share</button>
            </div>
        </div>
        
    )
}