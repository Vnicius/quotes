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
            if(action.payload.data.error){
                alert(action.payload.data.message);

                return state;
            } else {
                return {...state,
                        fetching: false,
                        fetched: true,
                        quotes: action.payload.data.data.quotes};
            }
        
        case "FETCH_TOP_REJECTED":
            alert(action.payload);
            return {...state, fetching: false, error: action.payload};

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
            return state;
        default:
            return state;
    }
};