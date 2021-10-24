import ActionTypes from "./types";

const changeUsernameField = (username: string) => {
  return {
    type: "CHANGE_USERNAME_FIELD" as ActionTypes,
    payload: username,
  };
};

const changePasswordField = (password: string) => {
  return {
    type: "CHANGE_PASSWORD_FIELD" as ActionTypes,
    payload: password,
  };
};

export const setLoading = (payload: { username: string; password: string }) => {
  return {
    type: "LOGIN_REQUEST" as ActionTypes,
    payload,
  };
};

export const clearLoading = () => {
  return {
    type: "NOT_SEND_REQUEST_LOGIN" as ActionTypes,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT" as ActionTypes,
  };
};

export { changeUsernameField, changePasswordField };
