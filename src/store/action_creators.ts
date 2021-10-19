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

export { changeUsernameField, changePasswordField };
