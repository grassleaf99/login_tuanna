import React, { FunctionComponent } from "react";
import { Form, Button } from "react-bootstrap";

const Login: FunctionComponent = () => {
  return (
    <section className="sec-login">
      <div className="login-form p-5">
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="w-100"
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
