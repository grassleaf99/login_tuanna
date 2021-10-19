import React from "react";
import "../css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import loginReducer from "../store/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

const store = createStore(
  loginReducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login" exact component={Login} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
