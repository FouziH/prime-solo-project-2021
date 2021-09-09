import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCompanyId(action) {
  try {
      console.log("id action payload is", action.payload)
    const response = yield axios.get(`/api/company/information/${action.payload}`);
    console.log("response data is", response.data);

    yield put({ type: "SET_COMPANY_ID_INFORMATION", payload: response.data });
  } catch (error) {
    console.log("Company Lookup search request error is", error);
  }
}

function* fetchCompanyIdSaga() {
  yield takeLatest("FETCH_COMPANY_ID", fetchCompanyId);
}

export default fetchCompanyIdSaga;
