import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import HomePageSaga from './homepage.saga';
import fetchCompanySaga from './company.saga';
import fetchCompanyIdSaga from './companyId.saga';
import fetchCompanyUserReviewSaga from './companyReview.saga';
import addReviewSaga from './addNewReview.saga'
import fetchAdminViewPageDataSaga from './adminViewPage.saga';
import fetchUserViewPageSaga from './userViewPage.saga';
import addNewCompanySaga from './addNewCompany.saga';
import deleteUserReview from './deleteReview.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    HomePageSaga(),
    fetchCompanySaga(),
    fetchCompanyIdSaga(),
    fetchCompanyUserReviewSaga(),
    addReviewSaga(),
    fetchAdminViewPageDataSaga(),
    fetchUserViewPageSaga(),
    deleteUserReview(), 
    addNewCompanySaga()
  ]);
}
