import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
      <p>The BlackBerry Project <span className="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span></p>
      <button type="button" className="collapsed navbar-toggle">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" /> <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
  </div>
);

export default Footer;
