import React from "react";
import ShopItem from "./ShopItem";

export default function ListView ({items}){
    return( 
        <div className="view_box_list">
            {items.map(el => {
                return <ShopItem key={Math.random()} item={el}/>
            })}
        </div>
    )
}