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
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
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
