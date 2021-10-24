import React, { FunctionComponent, ReactElement } from "react";
import { logOut } from "../store/action_creators";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const Admin: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <section className="sec-admin bg-primary d-flex justify-content-center align-items-center fs-2 text-center fw-bold">
      <div>
        <p className="text-uppercase">Congratulations!!</p>
        <p className="mb-5">
          You logged in successfully!! Now it's time for log out!
        </p>
        <Button
          variant="danger"
          size="lg"
          className="fw-bold"
          onClick={() => {
            localStorage.removeItem("access_token");
            dispatch(logOut());
          }}
        >
          Sign out
        </Button>
      </div>
    </section>
  );
};

export default Admin;
