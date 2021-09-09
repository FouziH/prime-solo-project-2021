const companyReviewReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMPANY_REVIEW_ID":
      return action.payload;
    default:
      return state;
  }
};

export default companyReviewReducer;
