import React,{useState} from "react";
import './submenuquantity.css'

import './globalconfig'

let quantity = [
    {id:1,qua:300,price:3500,day:7},
    {id:2,qua:500,price:3400,day:7},
    {id:3,qua:1000,price:3300,day:7},
    {id:4,qua:2000,price:3200,day:7},
    {id:5,qua:3000,price:3100,day:14},
    {id:6,qua:4000,price:3000,day:14},
    {id:7,qua:5000,price:2900,day:14},
]

var nilai=300
var price=3500

export function SubMenuQuantity(){
    const [Current, setCurrent] = useState(quantity[0].id)
    const [quaCurrent, setQuaCurrent] = useState(global.qua);
    function onClick(v){
        setCurrent(v.id);
        nilai=v.qua
        price=v.price
        global.qua=v.qua
        global.price=v.price
        setQuaCurrent(v.qua)
        global.total=v.qua*v.price
        global.timeestimasi=v.day
    }
    const sizeselected = 'sizeselected'
    return <div className="submenu-container">
        <p className="title-size"><label className="bold">Choose Quantity</label> </p>
        <p><button className="label-quan">Quantity </button><button className="label-unit"> Price per box</button>  </p>
        {
            quantity.map((v,i)=>{return <div key={i} onClick={() => onClick(v)} className={sizeselected+" "+(Current===v.id?"active":"")}><button className="label-quan">{v.qua} </button><button className="label-unit" thousandSeparator={true}>IDR {(v.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</button>
            
                {Current===v.id? (Current===1?<div className="mo-check1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===2?<div className="mo-check2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===3?<div className="mo-check3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===4?<div className="mo-check4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===5?<div className="mo-check5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===6?<div className="mo-check6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}

                {Current===v.id? (Current===7?<div className="mo-check7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0734 6L9.68161 14.2358L5.92654 10.5361L4 12.402L9.68173 18L19.8367 7.99462L20 7.89805L18.0734 6Z" fill="#FA7D78"/>
                </svg></div>:""):""}
            </div>})
        }
        <p><button className="label-quan2">Custom </button> </p>
        <p>
        <button className="label-quan"><input className={'quantity'} type="number" min={0} value={quaCurrent} onChange={(e)=>{setQuaCurrent(e.target.value);global.qua=e.target.value;global.total=global.qua*global.price;}}/> </button><button className="label-unit"> IDR {(price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</button>
        </p>

    </div>
}