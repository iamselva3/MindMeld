

import React from "react";
import "./nav.css";

function Nav({ setPage }) {
 return (
  <nav id="navStyle">
   <button onClick={() => setPage("login")} id="buttonStyle">Login</button>
   <button onClick={() => setPage("home")} id="buttonStyle">Home</button>
   <button onClick={() => setPage("home2")} id="buttonStyle">Home2</button>
   <button onClick={() => setPage("usecall")} id="buttonStyle">Invoice</button>
  </nav>
 );
}
// Styles

  export default Nav;