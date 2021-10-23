import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import "../css/App.css";
import { loginReducer } from "../store/reducers";
import rootSaga from "../store/saga";
import Admin from "./Admin";
import Login from "./Login";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

const rootReducer = combineReducers({ auth: loginReducer });

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// Then run the saga
sagaMiddleware.run(rootSaga);

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
