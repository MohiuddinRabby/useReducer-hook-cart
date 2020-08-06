import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-brand" href="#">
        Shopping Cart
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/cart" className="nav-link" href="#">
            Cart - 0
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
