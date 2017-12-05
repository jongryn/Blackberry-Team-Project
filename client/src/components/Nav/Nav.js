import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <strong><a href="/" className="navbar-brand">
          buzzr.
        <img src="../images/buzzr_bee.png" style={{width:100, marginTop: -7}} />
        </a>
        </strong>
        <input type="text" name="search" placeholder="Search..."/>
      </div>
    </div>
  </nav>;

export default Nav;
