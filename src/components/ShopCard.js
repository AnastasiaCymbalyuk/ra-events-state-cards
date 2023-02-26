import React from "react";

export default function ShopCard ({card}){
    const {img, name, color, price} = card;
    return(
        <div className="card_shop">
            <div className="card_shop_name">{name}</div>
            <div>{color}</div>
            <img className="card_shop_img" src={img} alt={name}></img>
            <div className="card_box_price">
                <div className="card_shop_price">${price}</div>
                <button className="card_shop_btn">Add to cart</button>
            </div>
        </div>
    )
}