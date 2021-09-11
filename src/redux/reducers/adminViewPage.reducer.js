const adminViewPageReducer = (state =[], action) => {
    switch(action.type) {
        case"SET_ADMIN_VIEW_DATA":
            return action.payload;
        default:
            return state;
    }
}

export default adminViewPageReducer