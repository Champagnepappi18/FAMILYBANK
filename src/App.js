import React, { useEffect } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import Addbalance from './Components/Balance/Addbalance';
import Checkbalance from './Components/Balance/Checkbalance';
import DeductBalance from './Components/Balance/DeductBalance';
import Creditcardincrease from './Components/Creditcard/Creditcardincrease';
import ApprovalCheck from './Components/Creditcard/Creditcardapproval';
import LoanApproval from './Components/Loan/LoanApproval';
import ProductExploration from './Components/Productexplore/ProductExploration';
import AddUserProfile from './Components/users/adduserprofile';
import DeleteUserProfile from './Components/users/deleteuserprofile';
import UpdateUserProfile from './Components/users/Update';
import Main from './Components/Mainwebpage';
import Register from './Components/Register';
import CreditCardbalance from './Components/Creditcard/Creditmoney';
import LoanApprovalChecker from './Components/Loan/loanapprovedamount';
import LoanPayment from './Components/Loan/loanpayback'


function App() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  console.log(user)
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      if (window.location.pathname !== "/login") window.location.href = "/login";
    } else {
      if (window.location.pathname === "login") window.location.href = "/main";
    }
  }, [user])

  return (
    <>

      {
        user && (
          <><Header user={user} />
            <Sidebar />
          </>
        )
      }
      <div className={user ? "app-content" : "app-content no-left"}>
        {/* <img src='./mayur.jpg' className='app-logo'/>
         */}
         <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main user={user}/>} />
          <Route path="/add-balance" element={<Addbalance />} />
          <Route path="/check-balance" element={<Checkbalance />} />
          <Route path="/deduct-balance" element={<DeductBalance />} />
          <Route path="/credit-increase" element={<Creditcardincrease />} />
          <Route path="/credit-balance" element={<CreditCardbalance />} />
          <Route path="/approval-check" element={<ApprovalCheck />} />
          <Route path="/loan-approval" element={<LoanApproval />} />
          <Route path="/product-exploration" element={<ProductExploration />} />
          <Route path="/add-user" element={<AddUserProfile />} />
          <Route path="/delete-user" element={<DeleteUserProfile />} />
          <Route path="/update-user" element={<UpdateUserProfile />} />
          <Route path="/loan-amount" element={<LoanApprovalChecker />} />
          <Route path="/loan-payback" element={<LoanPayment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
