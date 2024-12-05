import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; 

function CreditCardType() {
    const [formData, setFormData] = useState({
        id: '',
    });
    const [message, setMessage] = useState('');

    const { id } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/credit-type', { id });
            setMessage(response.data); 
        } catch (error) {
            console.error('Error fetching credit card type:', error);
            setMessage('Failed to fetch card type. Please check the user ID and try again.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Credit Card Type Checker</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 form-control__group">
                            <div><label htmlFor="id" className="form-label">User ID</label></div>
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
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Check Card Type
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

export default CreditCardType;
