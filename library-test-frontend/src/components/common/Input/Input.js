import React from "react";
import "./Input.scss";

const InputComponent = (props) => {
    const { text, type, placeholder, onChange, selectorItems, value } = props;

    const getTypeOfInput = () => {
        if (type === "selector"){
            return(
                <select 
                    defaultValue={-1} 
                    value={value ? selectorItems.map((item) => item.id).indexOf(value.id) : -1} 
                    className="input"
                    onChange={(value)=>{onChange(selectorItems[value.target.value])}}
                >
                    <option disabled value="-1" >Select...</option>
                    {selectorItems && selectorItems.length > 0 ? selectorItems.map((item, index)=>{
                        return(
                            <option key={index} value={index}>
                                {item.name}
                            </option>
                        )
                    }) : null}
                </select>
            )  
        }
        else
            return (
                <input 
                    placeholder={placeholder} 
                    className="input"
                    type={type}
                    value={value}
                    onChange={(value)=>{ onChange(value.target.value)}}
                />
                )
    }

    return (
        <div className="input-component">
            <div className="title-input">{text}</div>
            <div className="input-container">
                {getTypeOfInput()}
            </div>
        </div>)
};
export default InputComponent;
