import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addReview(action) {
    try{
        console.log("Add new review action payload is", action.payload)
        const response = yield axios.post("/api/review",action.payload)
        console.log("Add new review response from the server is ", response.data);

        yield put ({
            //
            type: "SET_REVIEW",
            payload: response.data

        })

    }
    catch(error){
        console.log('POST /addReview error is', error)
    }
}


function* addReviewSaga (){
    yield takeLatest("ADD_NEW_REVIEW",addReview)
}


export default addReviewSaga