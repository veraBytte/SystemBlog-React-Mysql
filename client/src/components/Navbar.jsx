import React from "react";
import {Link} from "react-router-dom";

 
const Navbar = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src="/logo1.png" alt="" />
      </div>

      <nav className="header_navbar">
        <ul>
          <Link className="header_link" to="/?cat=art">ARTE</Link>
          <Link className="header_link" to="/?cat=art">CIENCIAS</Link>
          <Link className="header_link" to="/?cat=art">TECNOLOGIA</Link>
          <Link className="header_link" to="/?cat=art">CINE</Link>
          <Link className="header_link" to="/?cat=art">INGLES</Link>

          <span className="header_options">Jhon</span>
          <span className="header_options">Logout</span>
          <span className="header_options">
            <Link className="secondary_button" to="/write">Write</Link>
          </span>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;