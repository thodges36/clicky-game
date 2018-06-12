import React from "react";

const Navbar = (props) => (

  <nav className="navbar navbar-dark bg-primary">
    <span className="navbar-brand">Clicky Game</span>
    <span className="navbar-text text-center text-light h3">{props.message}</span>
    <span className="navbar-text text-light h3">
      Score: <span>{props.correct}</span>&nbsp;|
      Top Score: <span>{props.topscore}</span>
    </span>
  </nav>
)
export default Navbar;