import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Test">Test</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;