import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function LoanApproval() {
    const [loanData, setLoanData] = useState({
        id: '',
        rent: '',
        age: '',
        salary: ''
    });

    const { id, rent, age, salary } = loanData;
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoanData({ ...loanData, [name]: value });
    };

    const handleLoanApproval = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.post('/loan', {
                id: Number(id),
                rent: Number(rent),
                age: Number(age),
                salary: Number(salary)
            });
            setMessage(response.data);
        } catch (error) {
            console.error("Error processing loan approval", error);
            setMessage("Failed to process loan approval. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Loan Approval</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleLoanApproval}>
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
                            <div><label htmlFor="rent" className="form-label">Rent</label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="rent"
                                placeholder="Enter monthly rent"
                                value={rent}
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
                                placeholder="Enter monthly salary"
                                value={salary}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Check Loan Approval
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

export default LoanApproval;
