import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from './axiosInstance';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        balance: '',
        salary: '',
        rent: '',
        age: ''
    });

    const [message, setMessage] = useState({ text: '', type: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: ["balance", "salary", "rent", "age"].includes(name)
                ? (value === '' ? '' : parseFloat(value)) 
                : value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...userData,
                balance: parseFloat(userData.balance),
                salary: parseInt(userData.salary),
                rent: parseInt(userData.rent),
                age: parseInt(userData.age)
            };

            console.log('Payload being sent:', payload);

            const response = await axiosinstance.post('/register', payload);
            console.log('Response from server:', response);

            if (response.status === 201 || response.status === 200) {
                setMessage({ text: 'Registration successful!', type: 'success' });

                setUserData({
                    username: '',
                    password: '',
                    name: '',
                    email: '',
                    balance: '',
                    salary: '',
                    rent: '',
                    age: ''
                });
                window.location.href = "/login";
            }
        } catch (error) {
            console.error('Error response:', error.response);
            setMessage({
                text:
                    error.response?.data?.message || 'Failed to register. Please check your inputs and try again.',
                type: 'error'
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Register User</h2>
                    {message.text && (
                        <div
                            className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'
                                } text-center`}
                        >
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleRegister}>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="username" className="form-label">
                                Username
                            </label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Enter username"
                                value={userData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="password" className="form-label">
                                Password
                            </label></div>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={userData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="name" className="form-label">
                                Name
                            </label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter full name"
                                value={userData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="email" className="form-label">
                                Email
                            </label></div>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="balance" className="form-label">
                                Balance
                            </label></div>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                name="balance"
                                placeholder="Enter balance"
                                value={userData.balance}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="salary" className="form-label">
                                Salary
                            </label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="salary"
                                placeholder="Enter salary"
                                value={userData.salary}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="rent" className="form-label">
                                Rent
                            </label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="rent"
                                placeholder="Enter rent"
                                value={userData.rent}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="age" className="form-label">
                                Age
                            </label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                placeholder="Enter age"
                                value={userData.age}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Register
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
