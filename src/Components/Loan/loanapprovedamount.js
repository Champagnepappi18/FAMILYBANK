import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function LoanApprovalChecker() {
    const [formData, setFormData] = useState({
        id: '',
        rent: '',
        salary: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const { id, rent, salary } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); 
        setError('');

        try {
            const response = await axiosInstance.post('/approval-amount', {
                id,
                rent,
                salary,
            });
            setMessage(response.data); 
        } catch (err) {
            console.error('Error calculating loan approval:', err);
            setError(
                err.response?.data || 'Failed to process loan approval. Please try again.'
            );
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Loan Approval Checker</h2>
                    
                    {message && <p className="text-success text-center">{message}</p>}
                    {error && <p className="text-danger text-center">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">User ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder="Enter User ID"
                                value={id}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="rent" className="form-label">Monthly Rent</label>
                            <input
                                type="number"
                                className="form-control"
                                name="rent"
                                placeholder="Enter Monthly Rent"
                                value={rent}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Monthly Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                name="salary"
                                placeholder="Enter Monthly Salary"
                                value={salary}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Check Loan Approval
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoanApprovalChecker;
