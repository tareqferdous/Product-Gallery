import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <h3>Photo-Gallery</h3>
        </a>

        <div className="icons">
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label className="fas fa-search"></label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
