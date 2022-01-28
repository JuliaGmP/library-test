import { endpoints } from "./endpoints";

export async function getBooks() {
    let response = await fetch(endpoints.books, {
        method : 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function addBook(bodyReq) {
    let response = await fetch(endpoints.books, {
        method : 'POST',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function updateBook(id, bodyReq) {
    let response = await fetch(endpoints.books + "/" + id, {
        method : 'PATCH',
        body: JSON.stringify(bodyReq),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function deleteBook(id) {
    let response = await fetch(endpoints.books + "/" + id, {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}


