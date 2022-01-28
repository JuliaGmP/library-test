import React, { useState, useEffect } from "react";
import TableWrapper from "../../common/TableWrapper/TableWrapper";
import ModalLayout from "../../../layouts/ModalLayout";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./BooksComponent.scss";

const BooksComponent = (props) => {

    const { books, authors, categories, submit, openModal, setOpenModal, openEditModal, setOpenEditModal, deleteItem, updateItem, error} = props;

    //Create Book form
    const [title, setTitle] = useState(undefined);
    const [author, setAuthor] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [description, setDescription] = useState(undefined);

    //Edit Book form
    const [titleEdited, setTitleEdited] = useState(undefined);
    const [authorEdited, setAuthorEdited] = useState(undefined);
    const [categoryEdited, setCategoryEdited] = useState(undefined);
    const [descriptionEdited, setDescriptionEdited] = useState(undefined);
    const [itemTeUpdate, setItemTeUpdate] = useState();

    return (
        <div className="book-component-container">
            <div className="button-container">
                <Button text={"Add book"} onPress={()=>setOpenModal(true)}/>
            </div>
            <TableWrapper headers={["Title", "Author", "Category", "Description",""]}>
            {books && books.length > 0
                    ? books.map( (item, i) => {
                        return(
                            <tr key={i}>
                                <td className="element">{item.title}</td>
                                <td className="element">{item.author.name}</td>
                                <td className="element">{item.category.name}</td>
                                <td className="element">{item.description}</td>
                                <td className="element">
                                    <div className="cards"> 
                                        <Button style={{marginRight: 20}} text={"Delete"} onPress={()=>deleteItem(item.id)}/>
                                        <Button text={"Edit"} onPress={()=>{
                                            setOpenEditModal(true)
                                            setItemTeUpdate(item)
                                            setTitleEdited(item.title)
                                            setAuthorEdited(item.author)
                                            setCategoryEdited(item.category)
                                            setDescriptionEdited(item.description)
                                        }}/>
                                    </div>
                                </td>
                             </tr>
                      )})
                    : null}
            </TableWrapper>
            <ModalLayout 
                title={"Add book"} 
                show={openModal} 
                handleClose={()=> setOpenModal(false)} 
                submit={()=>submit(title, author, category, description)}
            >
                <Input text={"Title"} onChange={(value)=> setTitle(value)}/>
                <Input text={"Author"} value={author !== undefined ? author : undefined} type={'selector'} selectedValue={author} selectorItems={authors} onChange={(value)=> setAuthor(value)}/>
                <Input text={"Category"} type={'selector'} selectedValue={category} selectorItems={categories} onChange={(value)=> setCategory(value)}/>
                <Input text={"Description"} onChange={(value)=> setDescription(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>
            {itemTeUpdate && <ModalLayout 
                title={"Edit book"} 
                show={openEditModal} 
                handleClose={()=> setOpenEditModal(false)} 
                submit={()=>updateItem(itemTeUpdate.id, titleEdited, authorEdited, categoryEdited, descriptionEdited)}
            >
                <Input text={"Title"} value={titleEdited} onChange={(value)=> setTitleEdited(value)}/>
                <Input text={"Author"} value={authorEdited} type={'selector'} selectedValue={author} selectorItems={authors} onChange={(value)=> setAuthorEdited(value)}/>
                <Input text={"Category"} value={categoryEdited} type={'selector'} selectedValue={category} selectorItems={categories} onChange={(value)=> setCategoryEdited(value)}/>
                <Input text={"Description"} value={descriptionEdited} onChange={(value)=> setDescriptionEdited(value)}/>
                {error && <div style={{color: "red"}}>Error</div>}
            </ModalLayout>}
        </div>
    );
};

export default BooksComponent;
