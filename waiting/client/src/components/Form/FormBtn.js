import React from "react";
import { Button } from 'reactstrap';

export const FormBtn = props =>
  <button {...props} style={{ float: "center" }} className="btn btn-success">
    {props.children}
  </button>;
