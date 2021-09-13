import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addNewCompany (action) {
   try{
    yield axios.post("/api/company/add",action.payload )
   } 
   catch(error) {
       console.log("Add new company error is", error)
   }
}


function* addNewCompanySaga(){
    yield takeLatest("ADD_NEW_COMPANY", addNewCompany)
}

export default addNewCompanySaga