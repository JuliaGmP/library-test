import { endpoints } from "./endpoints";

export async function getAuthors() {
    let response = await fetch(endpoints.authors, {
        method : 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function addAuthor(bodyReq) {
    let response = await fetch(endpoints.authors, {
        method : 'POST',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function updateAuthor(id, bodyReq) {
    let response = await fetch(endpoints.authors + "/" + id, {
        method : 'PATCH',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function deleteAuthor(id) {
    let response = await fetch(endpoints.authors + "/" + id, {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}
