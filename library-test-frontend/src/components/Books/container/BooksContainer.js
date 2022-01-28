import React, { useState, useEffect } from "react";
import { getBooks, addBook, updateBook, deleteBook  } from '../../../services/bookService'
import { getAuthors } from '../../../services/authorService'
import { getCategories } from '../../../services/categoryService'

import BooksComponent from '../component/BooksComponent'

const BooksContainer = (props) => {

    const [books, setBooks] = useState();
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false)
    }, [openModal, openEditModal]);

    useEffect(() => {
        getDataBooks()
    }, []);

    useEffect(() => {
        getDataAuthors()
        getDataCategories()
    }, [openModal]);

    const getDataBooks = async () =>{
        setBooks(await getBooks())
    }

    const getDataAuthors = async () =>{
        setAuthors(await getAuthors())
    }

    const getDataCategories = async () =>{
        setCategories(await getCategories())
    }

    const submit = async (title, author, category, description) =>{
        if(
            title !== undefined &&
            author !== undefined && 
            category !== undefined
        ){
            await addBook({
                title : title, 
                authorId : author.id, 
                categoryId : category.id, 
                description : description
            })
            await getDataBooks()
            setOpenModal(false)
        } else {
            setError(true)
        }
    }

    const deleteItem = async (id) => {
        const responseDelete = await deleteBook(id)
        if (responseDelete.status === 204) {
            setBooks(books.filter((item) => item.id !== id))
        }
    }

    const updateItem = async (id, titleEdited, author, category, description) =>{
        const responseUpdate =await updateBook( id, {
            title: titleEdited,
            authorId : author.id, 
            categoryId : category.id, 
            description : description
        })
        if (responseUpdate.status === 204) {
            await getDataBooks()
            setOpenEditModal(false)
        } else {
            setError(true)
        }
    }

    return (
        <BooksComponent 
            books={books} 
            authors={authors} 
            categories={categories} 
            submit={submit} 
            openModal={openModal} 
            setOpenModal={setOpenModal}
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            deleteItem={deleteItem}
            updateItem={updateItem}
            error={error}
        />
    );
};

export default BooksContainer;
