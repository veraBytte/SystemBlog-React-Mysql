import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="auth">
            <h1 className="auth_tittle">Login</h1>
            <form className="auth_form">
                <input required className="input" type="text" placeholder="Username"/>
                <input required className="input" type="password" placeholder="Password"/>
                <button className="main_button">Login</button>

                <p>Ha ocurrido un error</p>
                <span className="auth_link">Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
}

export default Login;