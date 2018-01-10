import axios from 'axios';

export function fetch(quant) {
    console.log('Fetch!')
    
    return {type: "FETCH_QUOTES",
            payload: axios.get('http://localhost:8888/api/quotes/radomquotes',{params:{quant : quant}})}
}