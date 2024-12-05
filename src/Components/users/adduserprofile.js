import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function AddUserProfile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...userData,
                balance: parseFloat(userData.balance || 0),
                salary: parseFloat(userData.salary || 0),
                rent: parseFloat(userData.rent || 0),
                age: parseInt(userData.age || 0)
            };

            const response = await axiosinstance.post('/create', payload);
            if (response.status === 201 || response.status === 200) {
                setMessage({ text: 'User profile added successfully!', type: 'success' });

                // Reset form
                setUserData({
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    balance: '',
                    salary: '',
                    rent: '',
                    age: ''
                });

                navigate('/users'); 
            }
        } catch (error) {
            console.error('Error:', error.response);
            setMessage({
                text: error.response?.data?.message || 'Failed to add user profile. Please try again.',
                type: 'error'
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Add User Profile</h2>
                    {message.text && (
                        <div
                            className={`alert ${
                                message.type === 'success' ? 'alert-success' : 'alert-danger'
                            } text-center`}
                        >
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="name" className="form-label">
                                Name
                            </label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your name"
                                value={userData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group ">
                            <div><label htmlFor="email" className="form-label">
                                Email
                            </label></div>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="username" className="form-label">
                                Username
                            </label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Enter your username"
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
                                placeholder="Enter your password"
                                value={userData.password}
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
                                className="form-control"
                                name="balance"
                                placeholder="Enter balance"
                                value={userData.balance}
                                onChange={handleInputChange}
                                min="0"
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
                                min="0"
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
                                min="0"
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
                                min="0"
                                max="120"
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Add User
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

export default AddUserProfile;
