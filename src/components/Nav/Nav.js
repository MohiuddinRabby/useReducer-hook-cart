import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
        Shopping Cart
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Cart - 0
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
