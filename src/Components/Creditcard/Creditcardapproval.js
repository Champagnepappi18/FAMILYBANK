import React, { useState } from 'react';
import './Creditcardapproval.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; 

function ApprovalCheck() {
    const [approvalData, setApprovalData] = useState({
        id: '',
        name: '',
        age: '',
        salary: ''
    });

    const { id, name, age, salary } = approvalData;
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApprovalData({ ...approvalData, [name]: value });
    };

    const handleApprovalCheck = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/approval', {
                id,
                name,
                age,
                salary
            });
            setMessage(response.data); 
        } catch (error) {
            console.error("Error checking approval", error);
            setMessage("Failed to process approval. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Credit Card Approval Check</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleApprovalCheck}>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="id" className="form-label">User ID</label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder="Enter user ID"
                                value={id}
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
                                placeholder="Enter user name"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="age" className="form-label">Age</label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                placeholder="Enter age"
                                value={age}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="salary" className="form-label">Salary</label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="salary"
                                placeholder="Enter salary"
                                value={salary}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Check Approval
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

export default ApprovalCheck;
