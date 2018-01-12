import axios from 'axios';

export function fetch(quant){
    return {type:"FETCH_TOP",
            payload: axios.get("http://localhost:8888/api/quotes/topquotes",
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
        payload: axios.put('http://localhost:8888/api/quotes/like/', { id: id})
    }
}