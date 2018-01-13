import axios from 'axios';
const baseUrl = "http://localhost:8888/api/quotes/";

export function handlerText(value) {
    return {
        type: "HANDLER_TEXT",
        payload: value
    }
}

export function handlerAuthor(value) {
    return {
        type: "HANDLER_AUTHOR",
        payload: value
    }
}

export function handlerSource(value) {
    return {
        type: "HANDLER_SOURCE",
        payload: value
    }
}

export function handlerSubmit(quoteData) {
    return {
        type: "SUBMIT",
        payload: axios.post(baseUrl + "submit", quoteData)
    }
}

export function handlerEdit() {
    return {
        type: "EDIT"
    }
}

export function handlerFinish() {
    return {
        type: "FINISH"
    }
}

export function handlerUpdate(quoteData) {
    return {
        type: "UPDATE",
        payload: axios.put(baseUrl + "update", quoteData)
    }
}

export function handlerCancel(id) {
    return {
        type: "CANCEL",
        payload: axios.delete(baseUrl + "remove/" + id)
    }
}