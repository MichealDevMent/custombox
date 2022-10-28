import React, { useState } from "react";
import './yourwallet.css'
import walleticon from '../assets/icon/wallet.png';
import badgecheck from '../assets/icon/badge-check-free-icon-font.png';

export default function YourWallet(){

    return<div className="wallet-lay">
        <div className="header-wallet">
            <button className="wallet-header-label"><img src={walleticon} width={15} /> CustomBox Wallet</button>
        </div>
        <div className="wallet-body">
            <div className="balance-title">Your Balance:</div>
            <div className="your-balance">Rp. 0</div>
            <div className="your-benefit">Your Benefits:</div>
            <div>
                <div className="note-wallet"><img src={badgecheck} width={20} /> 5% cashback on your next order</div>
            </div>
            <div className="foot-note-wallet">The more orders you make, the more savings you get!</div>
        </div>
    </div>
}