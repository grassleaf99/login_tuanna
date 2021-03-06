import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import ActionTypes from "../types";
import axios, { AxiosResponse } from "axios";
import { clearLoading } from "../action_creators";
import { push } from "connected-react-router";

interface HttpbinResponse {
  args: {};
  data: string;
  files: {};
  form: {};
  headers: {
    "Accept-Encoding": string;
    "Content-Length": number;
    "Content-Type": string;
    Host: string;
    "User-Agent": string;
    "X-Amzn-Trace-Id": string;
  };
  json: null;
  origin: string;
  url: string;
}

function* authSaga() {
  yield takeEvery("CHANGE_USERNAME_FIELD" as ActionTypes, showLogUsername);
  yield takeEvery("CHANGE_PASSWORD_FIELD" as ActionTypes, showLogPassword);
  yield takeLatest("LOGIN_REQUEST" as ActionTypes, loginRequestSaga);
  yield takeLatest("LOG_OUT" as ActionTypes, logoutSaga);
}

function showLogUsername() {
  console.log("Username has changed!!");
}
function showLogPassword() {
  console.log("Password has changed!!");
}

function apiLogin(loginData: {
  username: string;
  password: string;
}): Promise<AxiosResponse<HttpbinResponse>> {
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
    const res: AxiosResponse<HttpbinResponse> = yield call(apiLogin, {
      username: action.payload.username,
      password: action.payload.password,
    });
    console.log(res.data.data);
    localStorage.setItem("access_token", res.data.data);
    // redirect to admin page
    yield put(push("/admin"));
  } catch (error) {
    console.log(error);
    alert("Wrong username or password. Please try again!!");
  }
  yield put(clearLoading());
}

function* logoutSaga() {
  // redirect to log in page
  yield put(push("/login"));
}

export default authSaga;
