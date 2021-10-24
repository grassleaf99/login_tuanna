import React, { FunctionComponent, ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Spinner } from "react-bootstrap";
import {
  changeUsernameField,
  changePasswordField,
  setLoading,
} from "../store/action_creators";
import State from "../store/state";

const Login: FunctionComponent = (): ReactElement => {
  const authenData = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  return isLoggedIn ? (
    <Redirect to="/admin" />
  ) : (
    <section className="sec-login">
      <div className="login-form p-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              setLoading({
                username: authenData.username,
                password: authenData.password,
              })
            );
          }}
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Username"
              value={authenData.username}
              onChange={(e) => dispatch(changeUsernameField(e.target.value))}
              maxLength={256}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={authenData.password}
              onChange={(e) => dispatch(changePasswordField(e.target.value))}
              maxLength={256}
              required
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="w-100 fw-bold"
            size="lg"
          >
            {authenData.loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                className="me-2"
              />
            )}
            Sign in
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
