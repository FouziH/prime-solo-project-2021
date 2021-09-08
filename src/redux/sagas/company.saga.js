import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCompany() {
  try {

    const response = yield axios.get("/api/company/information");
    console.log("response data is", response.data);

    yield put({ type: "SET_COMPANY", payload: response.data });
  } catch (error) {
    console.log("Company Lookup search request error is", error);
  }
}

function* fetchCompanySaga() {
  yield takeLatest("FETCH_COMPANY", fetchCompany);
}

export default fetchCompanySaga;
