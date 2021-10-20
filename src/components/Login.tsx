import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  changeUsernameField,
  changePasswordField,
} from "../store/action_creators";
import State from "../store/state";

const Login: FunctionComponent = () => {
  const authenData = useSelector((state: State) => state);
  const dispatch = useDispatch();

  return (
    <section className="sec-login">
      <div className="login-form p-5">
        <Form>
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
            className="w-100"
            size="lg"
            style={{ fontWeight: "bold" }}
          >
            Sign in
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
