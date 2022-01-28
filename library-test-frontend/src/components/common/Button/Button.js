import React from "react";
import "./button.scss";

const ButtonComponent = (props) => {
    const { text, onPress, disabled, type, className } = props;

    return (
        <button className={`button-component ${disabled && "disable"} ${className}`} onClick={(e) => onPress && onPress(e)} disabled={disabled} type={type} style={props.style}>
            <div style={{paddingRight:10, paddingLeft:10, alignItems:"center", display:"flex", justifyContent:"center"}}>
                {text}
            </div>            
        </button>
    );
};



export default ButtonComponent;
