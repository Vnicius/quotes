const initialState = {
    fetching : false,
    fetched : false,
    quotes : [],
    error : null
}

export default function (state=initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case "FETCH_QUOTES_PENDING":
            return {...state, fetching: true};
        
        case "FETCH_QUOTES_FULFILLED":
            return {...state, fetching: false, fetched: true, quotes: action.payload.data.data};
        
        case "FETCH_QUOTES_REJECTED":
            return {...state, fetching: false, error: true, quotes: action.payload};
        
        default:
            return state;
    }
}