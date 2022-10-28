import React from "react";
import { useState } from "react";
import './contactus.css'

export default function ContactUs(){
    const [phoneNumber,setPhoneNumber] = useState(0);
    const [destinasi,setDestinasi] = useState('');
    return <div className="contactus-lay">
    <div className="header-contactus">
        <button className="contactus-header-label">How do we reach you?</button>
    </div>
    <div className="contactus-body">
        <div className="balance-title">We need some contact information to guide you through the design process.</div>
        <div className="your-balance">Email</div>
        <div ><input className="your-email" type={'email'} value="animatorghoose@gmail.com" disabled></input></div>
        <div className="your-balance">Phone Number</div>
        <div ><input className="your-email" type={'number'} value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}></input></div>
        <div>
            <div className="note-contactus"> <input type={'checkbox'}></input>I would like to be contacted by phone for a faster response</div>
        </div>
        <div className="your-balance">Shipping destination</div>
        <div ><input className="your-email" type={'text'} value={destinasi} onChange={(e)=>{setDestinasi(e.target.value)}}></input></div>
        <div>
            <div className="note-contactus"> <input type={'checkbox'}></input>I agree to Packhelp.com Terms and Conditions, Terms and Conditions (Plus) and Privacy Policy.</div>
        </div>
        <div className="foot-note-contactus"><button className="btn-send-contact">Send</button></div>
    </div>
</div>
}