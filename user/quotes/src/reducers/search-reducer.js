const inintial = {
    searching: false,
    searched: false,
    error: null,
    quotes: [],
    author: "",
}

export default function(state=inintial, action){
    switch (action.type) {
        case "SEARCH_AUTHOR_PENDING":
            return {...state, searching: true};
        
        case "SEARCH_AUTHOR_FULFILLED":
            if(action.payload.data.error) {
                alert(action.payload.data.message);
                return state;
            } else {
                return {...state,
                    searching: false,
                    searched: true, 
                    quotes: action.payload.data.data.quotes};
            }

        case "SEARCH_AUTHOR_REJECTED":
            alert(action.payload);
            return {...state, searching: false, error: action.payload};
        
        case "HANDLER_AUTHOR":
            return {...state, author: action.payload};

        default:
            return state;
    }
}