import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView ({cards}){
    return(
        <div className="view_box_card">
            {cards.map(el => {
                return <ShopCard key={Math.random()} card={el}/>
            })}
        </div>
    )
}