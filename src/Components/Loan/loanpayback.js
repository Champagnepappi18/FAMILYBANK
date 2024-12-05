import React, { useState } from 'react';
import axiosInstance from '../axiosInstance'; 

function LoanPayment() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        payment: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const { id, name, payment } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axiosInstance.post('/loan-pay', {
                id: parseInt(id, 10), 
                name,
                payment: parseFloat(payment), 
            });
            setMessage(response.data); 
        } catch (err) {
            console.error('Error processing loan payment:', err);
            setError(
                err.response?.data || 'Failed to process payment. Please try again.'
            );
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Loan Payment</h2>

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
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="payment" className="form-label">Payment Amount</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                name="payment"
                                placeholder="Enter Payment Amount"
                                value={payment}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoanPayment;
