import axios from 'axios';

export function fetch(quant){
    return {type:"FETCH_TOP",
            payload: axios.get("http://localhost:8888/api/quotes/topquotes",
            {params:{ quant: quant }})};
}