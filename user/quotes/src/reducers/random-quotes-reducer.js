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
            return {...state, fetching: false, fetched: true, quotes: action.payload.data.data.quotes};
        
        case "FETCH_QUOTES_REJECTED":
            return {...state, fetching: false, error: true, quotes: action.payload};
        
        case "LIKE_FULFILLED":
            if(action.payload.data.error){
                alert(action.payload.data.message);

                return state;
            } else {
                var aux = state.quotes.slice();

                aux.forEach((element) => {
                    if(element._id === action.payload.data.data.id) {
                        element.likes++;
                    }
                });
                
                localStorage.setItem(action.payload.data.data.id, true);

                return {...state, quotes: aux};
            }
        
        case "LIKE_REJECTED":
            alert(action.payload);    

            return {...state, error: action.payload};
        default:
            return state;
    }
}