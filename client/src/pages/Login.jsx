import React from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [inputs, setInputs] = React.useState({
        email: "",
        password: "",
    });
    const [err, setError] = React.useState(null);

    const navigate = useNavigate();

    const {login} = React.useContext(AuthContext);


    const handleInputChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="auth">
            <h1 className="auth_tittle">Login</h1>
            <form className="auth_form">
                <input required className="input" type="text" placeholder="Username" name="email" onChange={handleInputChange}/>
                <input required className="input" type="password" placeholder="Password" name="password" onChange={handleInputChange}/>
                <button className="main_button" onClick={handleSubmit}>Login</button>

                {err && <p>{err}</p>}
                <span className="auth_link">Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
}

export default Login;