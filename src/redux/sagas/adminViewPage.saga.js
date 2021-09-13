import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchAdminViewPageData () {
    try{
        const response = yield axios.get('/api/adminData')
        console.log("fetch admin view page data is", response.data);
        yield put({
            type: "SET_ADMIN_VIEW_DATA",
            payload: response.data
        })
    }
    catch(error){
        console.log("Error for ")
    }

}

function* fetchAdminViewPageDataSaga(){
   yield takeLatest("FETCH_ADMIN_VIEW_DATA", fetchAdminViewPageData);  
}

export default fetchAdminViewPageDataSaga;