import React, { FunctionComponent, ReactElement } from "react";
import { logOut } from "../store/action_creators";
import { useDispatch } from "react-redux";

const Admin: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div>
      Admin
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          dispatch(logOut());
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Admin;
