const userReviewReducer = (state=[], action) => {
    switch (action.type) {
      case "SET_ALL_USER_REVIEWS":
        console.log("action payload is", action.payload);
        return action.payload;
      default:
        return state;
    }
}
export  default userReviewReducer
