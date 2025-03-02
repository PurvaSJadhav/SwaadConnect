import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = (event) => {
        event.preventDefault();
        let newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email ID is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Signup Successful!');
            navigate('/explore'); 
        }
    };

    return (
        <div className="signup-container">
            <h1 className="title">SwaadConnect</h1>
            <div className="container">
                <p className="para1">Signup to SwaadConnect</p>
                <form onSubmit={validateForm}>
                    <input 
                        type="email" 
                        placeholder="Email ID" 
                        className="input-field" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

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

                    <button type="submit" className="sgbtn">Signup</button>
                </form>

                <hr />
                <p className="para2">Already have an account?</p>
                <button className="lgbtn" onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
}
