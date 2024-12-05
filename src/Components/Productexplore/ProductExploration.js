import React from 'react';
import './ProductExploration.css';

function ProductExploration() {
    return (
        <div className="tab-section container">
            <h2>Product Exploration</h2>
            <p>Explore all the available services:</p>
            <ul>
                <li><a href="#" onClick={() => window.location.reload()}>User Profile Management</a></li>
                <li><a href="#" onClick={() => window.location.reload()}>Transaction Management</a></li>
                <li><a href="#" onClick={() => window.location.reload()}>Account Management</a></li>
                <li><a href="#" onClick={() => window.location.reload()}>Credit Card Application</a></li>
                <li><a href="#" onClick={() => window.location.reload()}>Loan Application</a></li>
            </ul>
        </div>
    );
}

export default ProductExploration;
