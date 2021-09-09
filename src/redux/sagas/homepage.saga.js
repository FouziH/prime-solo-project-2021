import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCompanyInformation(action) {
  try {
    
    console.log("action payload is", action.payload);
    const response = yield axios.get("/api/company/homepage", { params: { search: action.payload } });
    console.log('response data is', response.data)

    yield put({ type: "SET_ SEARCH_COMPANY_INFORMATION", payload: response.data });
  } catch (error) {
    console.log("Company Lookup search request error is", error);
  }
}

function* HomePageSaga() {
  yield takeLatest("FETCH_SEARCHED_COMPANY_INFORMATION", fetchCompanyInformation);
}

export default HomePageSaga;
