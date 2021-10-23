import { AuthState } from "./state";

export function loginReducer(
  state: AuthState = { username: "", password: "" },
  action: any
): AuthState {
  switch (action.type) {
    case "CHANGE_USERNAME_FIELD":
      return { ...state, username: action.payload };
    case "CHANGE_PASSWORD_FIELD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
