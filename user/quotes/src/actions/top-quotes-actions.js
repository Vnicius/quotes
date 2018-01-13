import axios from 'axios';
const baseUrl = "http://localhost:8888/api/quotes/";

export function fetch(quant){
    return {type:"FETCH_TOP",
            payload: axios.get( baseUrl + "topquotes",
            {params:{ quant: quant }})};
}

export function handlerLike(id) {
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