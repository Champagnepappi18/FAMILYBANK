import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function DeleteUserProfile() {
    const [userData, setUserData] = useState({
        username: '',
        name: ''
    });

    const { username, name } = userData;
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            // Send username and name in the request body
            await axiosinstance.delete('/delete', {
                data: { username, name } 
            });
            setMessage('User deleted successfully.');
            setUserData({ username: '', name: '' }); 
        } catch (error) {
            console.error("Error deleting user profile", error);
            setMessage("Failed to delete user profile. Please check the details and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Delete User Profile</h2>
                    {message && <p className="text-center">{message}</p>}

                    <form onSubmit={handleDelete}>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="username" className="form-label">Username</label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="name" className="form-label">Name</label></div>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-danger">
                            Delete User
                        </button>
                        <Link className="btn btn-outline-secondary mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DeleteUserProfile;
