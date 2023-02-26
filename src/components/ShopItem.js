import React from "react";

export default function ShopItem ({item}){
    const {img, name, color, price} = item;
    return(
        <div className="item_shop">
            <img className="item_shop_img" src={img} alt={name}></img>
            <div className="item_shop_name">{name}</div>
            <div>{color}</div>
            <div className="item_shop_price">${price}</div>
            <button className="item_shop_btn">Add to cart</button>
        </div>
    )
}