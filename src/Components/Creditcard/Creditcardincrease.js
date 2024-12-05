import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function CreditIncrease() {
    const [creditData, setCreditData] = useState({
        id: '',
        increaseAmount: ''
    });

    const { id, increaseAmount } = creditData;
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreditData({ ...creditData, [name]: value });
    };

    const handleCreditIncrease = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.post('/CreditIncrease', {
                id,
                increaseAmount
            });
            setMessage(response.data);  
        } catch (error) {
            console.error("Error processing credit increase", error);
            setMessage("Failed to process credit increase. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow content">
                    <h2 className="text-center m-4">Request Credit Increase</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleCreditIncrease}>
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
                            <div><label htmlFor="increaseAmount" className="form-label">Increase Amount</label></div>
                            <input
                                type="number"
                                className="form-control"
                                name="increaseAmount"
                                placeholder="Enter increase amount"
                                value={increaseAmount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Request Credit Increase
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

export default CreditIncrease;
