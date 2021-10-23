import { takeEvery } from "redux-saga/effects";
import ActionType from "../types";

function showLogUsername() {
  console.log("Username has changed!!");
}
function showLogPassword() {
  console.log("Password has changed!!");
}

function* authSaga() {
  yield takeEvery("CHANGE_USERNAME_FIELD" as ActionType, showLogUsername);
  yield takeEvery("CHANGE_PASSWORD_FIELD" as ActionType, showLogPassword);
}

export default authSaga;
