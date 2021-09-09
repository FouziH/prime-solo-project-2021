import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCompanyUserReview(action) {
  try {
      console.log("fetch reviewId is", action.payload)
    const response = yield axios.get(`/api/company/review/${action.payload}`);
    console.log("response data is", response.data);

    yield put({ type: "SET_COMPANY_REVIEW_ID", payload: response.data });
  } catch (error) {
    console.log("Company Lookup search request error is", error);
  }
}

function* fetchCompanyUserReviewSaga() {
  yield takeLatest("FETCH_COMPANY_ID", fetchCompanyUserReview);
}

export default fetchCompanyUserReviewSaga;
