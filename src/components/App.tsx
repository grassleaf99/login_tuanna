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
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Admin from "./Admin";

const store = createStore(
  loginReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/admin" exact component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
