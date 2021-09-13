import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchUserViewData (action) {
    try{
        console.log("action payload to get data for user view page i", action.payload)
        const response = yield axios.get(`/api/userReview/${action.payload}`)
        console.log("Fetch all user review response is", response.data)

        yield put({
            type:"SET_ALL_USER_REVIEWS", 
            payload: response.data
        })

    }
    catch(error){

    }
}


function* fetchUserViewPageSaga() {
    yield takeLatest("FETCH_ALL_USER_REVIEWS", fetchUserViewData)
}


export default fetchUserViewPageSaga
