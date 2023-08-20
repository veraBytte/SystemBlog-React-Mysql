import React from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";

 
const Navbar = () => {
  const {currentUser, logout} = React.useContext(AuthContext);

  const handleLogout = async () => {
    try {
        const response = await logout(); // Llamada a la función logout
        console.log(response); // Mostrar la respuesta en la consola
    } catch (error) {
        console.error(error);
    }
};

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

          <span className="header_options">{currentUser?.username}</span>
          {currentUser ? (
            <span className="header_options" onClick={handleLogout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}

          <span className="header_options">
            <Link className="secondary_button" to="/write">Write</Link>
          </span>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;