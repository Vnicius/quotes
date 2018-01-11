import axios from 'axios';

export function handlerSearchAuthor(authorName) {
    return {
        type: "SEARCH_AUTHOR",
        payload: axios.get('http://localhost:8888/api/quotes/search/' + authorName)
    }
}

export function handlerAuthor(author) {
    return {
        type: "HANDLER_AUTHOR",
        payload: author
    }
}