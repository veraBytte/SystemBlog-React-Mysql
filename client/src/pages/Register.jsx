import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [inputs, setInputs] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const [err, setError] = React.useState(null);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/api/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    }


    return (
        <div className="auth">
            <h1 className="auth_tittle">Register</h1>
            <form className="auth_form">
                <input required className="input" type="text" placeholder="Username" name="username"
                    onChange={handleInputChange}
                />
                <input required className="input" type="email" placeholder="Email" name="email"
                    onChange={handleInputChange}
                />
                <input required className="input" type="password" placeholder="Password" name="password"
                    onChange={handleInputChange}
                />
                <button className="main_button" onClick={handleSubmit}>Crear cuenta</button>
                
                {err && <p>{err}</p>}

                <span className="auth_link">Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
}

export default Register;