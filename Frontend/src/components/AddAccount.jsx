import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../services/Accountservice';

const AddAccount = () => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const account = { accountHolderName, balance };
    createAccount(account).then(() => {
      navigate('/');
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <h2 className="text-center">Add New Account</h2>
      <form>
        <div className="form-group">
          <label>Account Holder Name:</label>
          <input type="text" className="form-control" value={accountHolderName} 
                 onChange={(e) => setAccountHolderName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Initial Balance:</label>
          <input type="number" className="form-control" value={balance} 
                 onChange={(e) => setBalance(Number(e.target.value))} />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Add Account</button>
      </form>
    </div>
  );
};

export default AddAccount;