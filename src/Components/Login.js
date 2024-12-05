import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';

function Login() {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login credentials to the backend
            const response = await axiosInstance.post('/login', {
                username: credentials.username,
                password: credentials.password,
            });

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                window.location.href = "main";
            }
        } catch (error) {
            // Handle errors
            if (error.response && error.response.status === 401) {
                setErrorMessage("Invalid username or password");
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };

    if(user?.id) {
        window.location.href = "/main";
        return;
    }
    return (
        <div className="container login-page">
            <h2>Login</h2>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3 form-control__group">
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3 form-control__group">
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>Don't have an account? <a href='/register'>Sign up</a></p>
        </div>
    );
}

export default Login;
