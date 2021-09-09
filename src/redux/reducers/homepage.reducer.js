const homepageReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ SEARCH_COMPANY_INFORMATION":
      return action.payload;
    default:
      return state;
  }
};

export default homepageReducer;
