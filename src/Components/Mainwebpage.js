// Main.js
import React from 'react';
import './Mainwebpage.css'

function Main({ user }) {
    return (
        <div style={{width: "100%" }}>
            <div className='container'>
                <h2>Welcome {user?.name || ""}</h2>
            </div>
            <div className='container-id'>
                <h2>Your ID {user.id || ""}</h2>
            </div>
            <div class='dashboard-card__container'>
                <div class='dashboard-card'>
                    <h2 class='dashboard-card__title'>
                        Balance
                    </h2>
                    <p class='dashboard-card__detail'>
                        ${user?.balance ? user.balance : "0"}
                    </p>
                </div>

                <div class='dashboard-card'>
                    <h2 class='dashboard-card__title'>
                        Credit balance
                    </h2>
                    <p class='dashboard-card__detail'>
                        ${user?.creditbalance ? user.creditbalance : "0"}
                    </p>
                </div>

                <div class='dashboard-card'>
                    <h2 class='dashboard-card__title'>
                        loan
                    </h2>
                    <p class='dashboard-card__detail'>
                        ${user?.loan ? user.loan : "0"}
                    </p>
                </div>

                <div class='dashboard-card'>
                    <h2 class='dashboard-card__title'>
                        Rent
                    </h2>
                    <p class='dashboard-card__detail'>
                        ${user?.rent ? user.rent : "0"}
                    </p>
                </div>

                <div class='dashboard-card'>
                    <h2 class='dashboard-card__title'>
                        salary
                    </h2>
                    <p class='dashboard-card__detail'>
                        ${user?.salary ? user.salary : "0"}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Main;
