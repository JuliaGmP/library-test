import React from "react";
import Button from "../components/common/Button/Button";
import "./ModalLayout.scss";

const ModalLayout = (props) => {
    const { children, title, show, handleClose, submit} = props;

    return (
        <div className="modal" style={{display: show? "flex": "none"}}>
            <div className="modal-main">
                <div className="title">{title}</div>
                {children}
                <div style={{float:"right"}}>
                    <div className="buttonsContainer">
                        <div style={{marginRight: 10}}>
                            <Button text="Cancelar" onPress={()=>handleClose()} className='cancel'/>
                        </div>
                        <Button type='submit' text="Aceptar" onPress={()=>submit()}/>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default ModalLayout;
