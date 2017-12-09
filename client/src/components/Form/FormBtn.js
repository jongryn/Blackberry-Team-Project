import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "center", width: '100%'}} className="btn btn-md">
    {props.children}
  </button>;
