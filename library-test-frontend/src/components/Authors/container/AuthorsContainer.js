import React, { useState, useEffect } from "react";
import { getAuthors, addAuthor, updateAuthor, deleteAuthor  } from '../../../services/authorService'

import AuthorsComponent from '../component/AuthorsComponent'

const AuthorsContainer = (props) => {

    const [authors, setAuthors] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false)
    }, [openModal, openEditModal]);

    useEffect(() => {
        getDataAuthors()
    }, []);

    const getDataAuthors = async () =>{
        setAuthors(await getAuthors())
    }

    const submit = async (name, pseudonym, birthDate, deathDate) =>{
        if(
            name !== undefined &&
            birthDate !== undefined 
        ){
            await addAuthor({
                name: name,
                pseudonym: pseudonym,
                birthDate: new Date(birthDate),
                deathDate: deathDate ? new Date(deathDate) : undefined
            })
            await getDataAuthors()
            setOpenModal(false)
        } else {
            setError(true)
        }
    }

    const deleteItem = async (id) => {
        const responseDelete = await deleteAuthor(id)
        if (responseDelete.status === 204) {
            setAuthors(authors.filter((item) => item.id !== id))
        }
    }

    const updateItem = async (id, nameEdited, pseudonymEdited, birthDateEdited, deathDateEdited) =>{
        const responseUpdate =await updateAuthor( id, {
            name: nameEdited,
            pseudonym: pseudonymEdited,
            birthDate: new Date(birthDateEdited),
            deathDate: deathDateEdited ? new Date(deathDateEdited) : undefined
        })
        if (responseUpdate.status === 204) {
            await getDataAuthors()
            setOpenEditModal(false)
        } else {
            setError(true)
        }
    }

    return (
        <AuthorsComponent 
            authors={authors} 
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

export default AuthorsContainer;
