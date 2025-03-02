import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = (event) => {
        event.preventDefault();
        let newErrors = {};

        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Logged In Successfully!');
            navigate('/explore');
        }
    };

    return (
        <div className="login-container">
            <h1 className="title">SwaadConnect</h1>
            <div className="container">
                <p className="para1">Login to SwaadConnect</p>
                <form onSubmit={validateForm}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="input-field" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}

                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <button type="submit" className="lgbtn">Login</button>
                </form>

                <hr />
                <p className="para2">Don't have an Account?</p>
                <button className="sgbtn" onClick={() => navigate('/signup')}>Create New Account</button> 
            </div>
        </div>
    );
}
