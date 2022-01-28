import React, { useState, useEffect } from "react";
import TableWrapper from "../../common/TableWrapper/TableWrapper";
import ModalLayout from "../../../layouts/ModalLayout";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./CategoriesComponent.scss";

const CategoriesComponent = (props) => {

    const { categories, submit, openModal, setOpenModal, openEditModal, setOpenEditModal, deleteItem, updateItem, error} = props;

    //Create Category form
    const [name, setName] = useState(undefined);
    const [description, setDescription] = useState(undefined);

    //Edit Category form
    const [nameEdited, setNameEdited] = useState(undefined);
    const [descriptionEdited, setDescriptionEdited] = useState(undefined);
    const [itemTeUpdate, setItemTeUpdate] = useState();

    return (
        <div className="category-component-container">
            <div className="button-container">
                <Button text={"Add book"} onPress={()=>setOpenModal(true)}/>
            </div>            <TableWrapper headers={["Name", "Description",""]}>
            {categories && categories.length > 0
                    ? categories.map( (item, i) => {
                        return(
                            <tr key={i}>
                                <td className="element">{item.name}</td>
                                <td className="element">{item.description}</td>
                                <td className="element">
                                    <div className="cards"> 
                                        <Button style={{marginRight: 20}} text={"Delete"} onPress={()=>deleteItem(item.id)}/>
                                        <Button text={"Edit"} onPress={()=>{
                                            setOpenEditModal(true)
                                            setItemTeUpdate(item)
                                            setNameEdited(item.name)
                                            setDescriptionEdited(item.description)
                                        }}/>
                                    </div>
                                </td>
                             </tr>
                      )})
                    : null}
            </TableWrapper>
            <ModalLayout 
                title={"Add category"} 
                show={openModal} 
                handleClose={()=> setOpenModal(false)} 
                submit={()=>submit(name, description)}
            >
                <Input text={"Name"} onChange={(value)=> setName(value)}/>
                <Input text={"Description"} onChange={(value)=> setDescription(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>
            {itemTeUpdate && <ModalLayout 
                title={"Edit category"} 
                show={openEditModal} 
                handleClose={()=> setOpenEditModal(false)} 
                submit={()=>updateItem(itemTeUpdate.id, nameEdited, descriptionEdited)}
            >
                <Input text={"Name"} value={nameEdited} onChange={(value)=> setNameEdited(value)}/>
                <Input text={"Description"} value={descriptionEdited} onChange={(value)=> setDescriptionEdited(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>}
        </div>
    );
};

export default CategoriesComponent;
