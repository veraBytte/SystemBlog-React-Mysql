import React from "react";
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <div className="auth">
            <h1 className="auth_tittle">Register</h1>
            <form className="auth_form">
                <input required className="input" type="text" placeholder="Username"/>
                <input required className="input" type="email" placeholder="Email"/>
                <input required className="input" type="password" placeholder="Password"/>
                <button className="main_button">Register</button>
                
                <p>Ha ocurrido un error</p>
                <span className="auth_link">Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
}

export default Register;