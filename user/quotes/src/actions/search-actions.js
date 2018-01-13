import axios from 'axios';
const baseUrl = "http://localhost:8888/api/quotes/";

export function handlerSearchAuthor(authorName) {
    return {
        type: "SEARCH_AUTHOR",
        payload: axios.get(baseUrl + "search/" + authorName)
    }
}

export function handlerAuthor(author) {
    return {
        type: "HANDLER_AUTHOR",
        payload: author
    }
}

export function handlerLikeSearch(id) {
    if(localStorage.getItem(id)){
        return {
            type:"PASS"
        }
    }
    return {
        type: "LIKE",
        payload: axios.put(baseUrl + "like/", { id: id})
    }
}