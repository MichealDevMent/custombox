import React from "react";
import './reviewpurchase.css'

export default function ReviewPurchase(){
    return <div className="purchasereview-lay">
    <div className="header-purchasereview">
        <button className="purchasereview-header-label">Review & purchase</button>
    </div>
    <div className="purchasereview-body">
        <div className="balance-title">Size and material</div>
        <div ><button className="purchase-label-size">Size </button><button className="purchase-label-ti">F52 - 26.5 x 19.5 x 6 cm</button></div>
        <div ><button className="purchase-label-size">Material </button><button className="purchase-label-ti"> {global.materialname}</button></div>
        <div>
        Add-ons
        </div>
        <div className="your-balance">Template Gratis I (Rp.0)</div>
        <div>
        <button className="title-quantity-and-price">Quantity and price</button>
        </div>
        <div className="your-balance">{global.quantityandprice}</div>
        <div className="foot-note-purchasereview"><button className="btn-send-contact">Add To Cart</button></div>
    </div>
</div>
}