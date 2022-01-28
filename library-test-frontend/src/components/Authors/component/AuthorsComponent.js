import React, { useState, useEffect } from "react";
import TableWrapper from "../../common/TableWrapper/TableWrapper";
import ModalLayout from "../../../layouts/ModalLayout";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import moment from 'moment';
import "./AuthorsComponent.scss";

const AuthorsComponent = (props) => {

    const { authors, submit, openModal, setOpenModal, openEditModal, setOpenEditModal, deleteItem, updateItem, error} = props;

    //Create Author form
    const [name, setName] = useState(undefined);
    const [pseudonym, setPseudonym] = useState(undefined);
    const [birthDate, setBirthDate] = useState(undefined);
    const [deathDate, setDeathDate] = useState(undefined);

    //Edit Author form
    const [nameEdited, setNameEdited] = useState(undefined);
    const [pseudonymEdited, setPseudonymEdited] = useState(undefined);
    const [birthDateEdited, setBirthDateEdited] = useState(undefined);
    const [deathDateEdited, setDeathDateEdited] = useState(undefined);
    const [itemTeUpdate, setItemTeUpdate] = useState();

    return (
        <div className="author-component-container">
            <div className="button-container">
                <Button text={"Add book"} onPress={()=>setOpenModal(true)}/>
            </div>            
            <TableWrapper headers={["Name", "Pseudonym", "BirthDate", "DeathDate",""]}>
            {authors && authors.length > 0
                    ? authors.map( (item, i) => {
                        return(
                            <tr key={i}>
                                <td className="element">{item.name}</td>
                                <td className="element">{item.pseudonym}</td>
                                <td className="element">{moment(item.birthDate).format("YYYY-MM-DD")}</td>
                                <td className="element">{moment(item.deathDate).format("YYYY-MM-DD") !== "Invalid date" ? moment(item.deathDate).format("YYYY-MM-DD") : ""}</td>
                                <td className="element">
                                    <div className="cards"> 
                                        <Button style={{marginRight: 20}} text={"Delete"} onPress={()=>deleteItem(item.id)}/>
                                        <Button text={"Edit"} onPress={()=>{
                                            setOpenEditModal(true)
                                            setItemTeUpdate(item)
                                            setNameEdited(item.name)
                                            setPseudonymEdited(item.pseudonym)
                                            setBirthDateEdited(item.birthDate)
                                            setDeathDateEdited(item.deathDate)
                                        }}/>
                                    </div>
                                </td>
                             </tr>
                      )})
                    : null}
            </TableWrapper>
            <ModalLayout 
                title={"Add author"} 
                show={openModal} 
                handleClose={()=> setOpenModal(false)} 
                submit={()=>submit(name, pseudonym, birthDate, deathDate)}
            >
                <Input text={"Name"} onChange={(value)=> setName(value)}/>
                <Input text={"Pseudonym"} onChange={(value)=> setPseudonym(value)}/>
                <Input text={"BirthDate"} type={'date'}  onChange={(value)=> setBirthDate(value)}/>
                <Input text={"DeathDate"} type={'date'} onChange={(value)=> setDeathDate(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>
            {itemTeUpdate && <ModalLayout 
                title={"Edit author"} 
                show={openEditModal} 
                handleClose={()=> setOpenEditModal(false)} 
                submit={()=>updateItem(itemTeUpdate.id, nameEdited, pseudonymEdited, birthDateEdited, deathDateEdited)}
            >
                <Input text={"Name"} value={nameEdited} onChange={(value)=> setNameEdited(value)}/>
                <Input text={"Pseudonym"} value={pseudonymEdited} onChange={(value)=> setPseudonymEdited(value)}/>
                <Input text={"BirthDate"} value={moment(birthDateEdited).format("YYYY-MM-DD")} type={'date'} onChange={(value)=> setBirthDateEdited(value)}/>
                <Input text={"DeathDate"} value={moment(deathDateEdited).format("YYYY-MM-DD")} type={'date'} onChange={(value)=> setDeathDateEdited(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>}
        </div>
    );
};

export default AuthorsComponent;
