import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

export default function Store ({ products }) {
    const [icon, onSwitchIcon] = useState('view_list');
    const onSwitch = () =>{
        onSwitchIcon(() => {
            return icon === 'view_list' ? 'view_module' : 'view_list';
        })
    };

    return (
        <div className="store">
            <div className="icon_box">
                <IconSwitch 
                    icon={icon}
                    onSwitch={onSwitch}
                />
            </div>
            {icon === 'view_list' ? <ListView items={products} /> : <CardsView cards={products} />}
        </div>
    )
}