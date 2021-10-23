export interface AuthState {
  username: string;
  password: string;
  loading: boolean;
}

interface State {
  auth: AuthState;
}

export default State;
