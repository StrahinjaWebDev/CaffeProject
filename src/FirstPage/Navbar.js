import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs"

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="/">Smart Meals</a>
      </div>

      <div className="list">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Outlet</a>
          </li>
          <li>
            <a href="/">Promo</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="images">
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
    </nav>
  );
}


export default Navbar;