const initial = {
    fetching: false,
    fetched: false,
    quotes: [],
    error: null
};

export default function (state=initial, action) {
    switch(action.type){
        case "FETCH_TOP_PENDING":
            return {...state, fetching: true};
        
        case "FETCH_TOP_FULFILLED":
            return {...state,
                    fetching: false,
                    fetched: true,
                    quotes: action.payload.data.data.quotes};
        
        case "FETCH_TOP_REJECTED":
            return {...state, fetching: false, error: action.payload};
        
        default:
            return state;
    }
};