import { endpoints } from "./endpoints";

export async function getCategories() {
    let response = await fetch(endpoints.categories, {
        method : 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function addCategory(bodyReq) {
    let response = await fetch(endpoints.categories, {
        method : 'POST',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function updateCategory(id, bodyReq) {
    let response = await fetch(endpoints.categories + "/" + id, {
        method : 'PATCH',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function deleteCategory(id) {
    let response = await fetch(endpoints.categories + "/" + id, {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}
