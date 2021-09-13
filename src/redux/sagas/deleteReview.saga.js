import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchUpdatedUserViewData(action) {
  try {
    console.log("action payload to get item deleted is", action.payload);
    yield axios.delete(`/api/userReview/${action.payload}`);
  } catch (error) {
      console.log("Delete review item error is", error)
  }
}

function* deleteUserReview () {
    yield takeLatest("DELETE_ITEM", fetchUpdatedUserViewData)
}

export default deleteUserReview