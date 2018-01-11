import axios from 'axios';

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
        payload: axios.post('http://localhost:8888/api/quotes/submit', quoteData)
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
        payload: axios.put("http://localhost:8888/api/quotes/update", quoteData)
    }
}