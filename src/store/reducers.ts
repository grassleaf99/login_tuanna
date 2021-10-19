import State from "./state";

export default function loginReducer(
  state: State = { username: "", password: "" },
  action: any
): State {
  switch (action.type) {
    case "CHANGE_USERNAME_FIELD":
      return { ...state, username: action.payload };
    case "CHANGE_PASSWORD_FIELD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
