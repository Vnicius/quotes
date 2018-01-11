const initial = {
    text: "",
    author: "",
    source: "",
    _id: "",
    submitting: false,
    submitted: false,
    error: null,
    edit: false,
    updating: false,
    updated: false,
}

export default function(state=initial, action) {
    switch (action.type) {
        case "HANDLER_TEXT":
            return {...state, text: action.payload};

        case "HANDLER_AUTHOR":
            return {...state, author: action.payload};

        case "HANDLER_SOURCE":
            return {...state, source: action.payload};
        
        case "SUBMIT_PENDING":
            return {...state, submitting: true};
        
        case "SUBMIT_FULFILLED":
            return {...state,
                    submitting: false,
                    submitted: true,
                    _id: action.payload.data.data.id,};
        
        case "SUBMIT_REJECTED":
            return {...state, submitting: false, error: action.payload};
        
        case "EDIT":
            return {...state, edit: !state.edit};
        
        case "FINISH":
            return initial
        
        case "UPDATE_PENDING":
            return {...state, updating: true};
        
        case "UPDATE_FULFILLED":
            return {...state, updating: false, updated: true};
        
        case "UPDATE_REJECTED":
            return {...state, updating: false, error: action.payload.data};

        default:
            return state
    }
}