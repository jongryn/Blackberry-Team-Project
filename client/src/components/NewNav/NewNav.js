import React from "react";
import "./NewNav.css";

const NewNav = () => (
  <div>
    <nav className="navbar navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/restaurants">
            Waiting
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default NewNav;
