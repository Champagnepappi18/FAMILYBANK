import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      <div className="menu-item">
        <div className="menu-title" onClick={() => toggleMenu('menu1')}>
          Balance
        </div>
        {activeMenu === 'menu1' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/add-balance">Add Balance</Link></div>
            <div className="submenu-item"><Link to="/check-balance">Check Balance</Link></div>
            <div className="submenu-item"><Link to="/deduct-balance">Deduct Balance</Link></div>
          </div>
        )}
      </div>
      <div className="menu-item">
        <div className="menu-title" onClick={() => toggleMenu('menu2')}>
          Credit Card
        </div>
        {activeMenu === 'menu2' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/approval-check">Credit Card Approval Check</Link></div>
            <div className="submenu-item"><Link to="/credit-balance">Credit-Balance </Link></div>
            <div className="submenu-item"><Link to="/credit-increase">Credit Card Increase</Link></div>
          </div>
        )}
      </div>
      <div className="menu-item">
        <div className="menu-title" onClick={() => toggleMenu('menu3')}>
          Loan
        </div>
        {activeMenu === 'menu3' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/loan-approval">Loan Approval</Link></div>
            <div className="submenu-item"><Link to="/loan-amount" >Loan Approval Amount </Link></div>
            <div className="submenu-item"><Link to="/loan-payback">Loan Pay</Link></div>
          </div>
        )}
      </div>
      <div className="menu-item">
        <div className="menu-title" onClick={() => toggleMenu('menu4')}>
          User Info
        </div>
        {activeMenu === 'menu4' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/add-user">Add User Profile</Link></div>
            <div className="submenu-item"><Link to="/update-user">Update User Profile</Link></div>
            <div className="submenu-item"><Link to="/delete-user">Delete User Profile</Link></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;