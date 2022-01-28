import React, { useState, useEffect } from "react";
import { getCategories, addCategory, updateCategory, deleteCategory  } from '../../../services/categoryService'

import CategoriesComponent from '../component/CategoriesComponent'

const CategoriesContainer = (props) => {

    const [categories, setCategories] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false)
    }, [openModal, openEditModal]);

    useEffect(() => {
        getDataCategories()
    }, []);

    const getDataCategories = async () =>{
        setCategories(await getCategories())
    }

    const submit = async (name, description) =>{
        if(
            name !== undefined
        ){
            await addCategory({
                name: name,
                description: description,
            })
            await getDataCategories()
            setOpenModal(false)
        } else {
            setError(true)
        }
    }

    const deleteItem = async (id) => {
        const responseDelete = await deleteCategory(id)
        if (responseDelete.status === 204) {
            setCategories(categories.filter((item) => item.id !== id))
        }
    }

    const updateItem = async (id, nameEdited, descriptionEdited) =>{
        const responseUpdate =await updateCategory( id, {
            name: nameEdited,
            description: descriptionEdited
        })
        if (responseUpdate.status === 204) {
            await getDataCategories()
            setOpenEditModal(false)
        } else {
            setError(true)
        }
    }

    return (
        <CategoriesComponent 
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

export default CategoriesContainer;
