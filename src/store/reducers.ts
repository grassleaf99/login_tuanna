import { AuthState } from "./state";
import ActionTypes from "./types";

export function loginReducer(
  state: AuthState = { username: "", password: "", loading: false },
  action: any
): AuthState {
  switch (action.type) {
    case "CHANGE_USERNAME_FIELD" as ActionTypes:
      return { ...state, username: action.payload };
    case "CHANGE_PASSWORD_FIELD" as ActionTypes:
      return { ...state, password: action.payload };
    case "LOGIN_REQUEST" as ActionTypes:
      return { ...state, loading: true };
    case "NOT_SEND_REQUEST_LOGIN" as ActionTypes:
      return { ...state, loading: false };
    case "LOG_OUT" as ActionTypes:
      return { ...state, username: "", password: "" };
    default:
      return state;
  }
}
