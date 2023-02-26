import React from "react";

export default function IconSwitch ({icon, onSwitch}){
    return(
        <button className="icons_btn" onClick={onSwitch}>
            <span className="material-icons">
                {icon}
            </span>
        </button>
    )
}