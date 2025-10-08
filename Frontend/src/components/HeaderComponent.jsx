import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
           <div className="w-100 text-center">
    <Link className="navbar-brand" to="/">Bank Management System</Link>
 
          <Link className="btn btn-primary" to="/add-account">Add New Account</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;