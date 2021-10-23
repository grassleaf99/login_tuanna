import { takeEvery, takeLatest, call } from "redux-saga/effects";
import ActionTypes from "../types";
import axios, { AxiosResponse } from "axios";

function showLogUsername() {
  console.log("Username has changed!!");
}
function showLogPassword() {
  console.log("Password has changed!!");
}

function apiLogin(loginData: { username: string; password: string }) {
  return axios.post("https://httpbin.org/post", {
    username: loginData.username,
    password: loginData.password,
  });
}

function* loginRequestSaga(action: {
  type: ActionTypes;
  payload: { username: string; password: string };
}) {
  try {
    const res: Promise<AxiosResponse> = yield call(apiLogin, {
      username: action.payload.username,
      password: action.payload.password,
    });
    console.log(res);
  } catch (error) {}
}

function* authSaga() {
  yield takeEvery("CHANGE_USERNAME_FIELD" as ActionTypes, showLogUsername);
  yield takeEvery("CHANGE_PASSWORD_FIELD" as ActionTypes, showLogPassword);
  yield takeLatest("LOGIN_REQUEST" as ActionTypes, loginRequestSaga);
}

export default authSaga;
