const companyIdReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMPANY_ID_INFORMATION":
        console.log("action payload is", action.payload)
      return action.payload;
    default:
      return state;
  }
};

export default companyIdReducer;
