import React, { useState, useEffect } from 'react';
import 'bankapp\styles.css';
import { 
  getAccounts, 
  deleteAccount, 
  depositMoney, 
  withdrawMoney 
} from '../services/AccountService';
import AccountForm from './AccountForm';

const ListAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [transactionAmount, setTransactionAmount] = useState({});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = () => {
        getAccounts()
            .then((response) => setAccounts(response.data))
            .catch(console.error);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this account?")) {
            deleteAccount(id)
                .then(fetchAccounts)
                .catch(console.error);
        }
    };

    const handleTransaction = (id, type) => {
        const amount = parseFloat(transactionAmount[id] || 0);

        if (isNaN(amount)) {
            alert("Please enter a valid amount.");
            return;
        }

        if (amount <= 0) {
            alert("Amount must be greater than zero.");
            return;
        }

        const transactionFn = type === 'deposit' ? depositMoney : withdrawMoney;
        
        transactionFn(id, amount)
            .then(fetchAccounts)
            .then(() => setTransactionAmount({...transactionAmount, [id]: ''}))
            .catch(console.error);
    };

    return (
        <div className='container'>
            <h2 className='text-center'>Bank Accounts Management</h2>

            <button className='btn btn-primary mb-3' onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Form' : 'Create New Account'}
            </button>

            {showForm && <AccountForm fetchAccounts={fetchAccounts} setShowForm={setShowForm} />}

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Holder</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.account_holder_name}</td>
                            <td>₹{account.balance.toFixed(2)}</td>
                            <td>
                                <div className='d-flex gap-2 flex-wrap'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        style={{width: '120px'}}
                                        placeholder='Amount'
                                        value={transactionAmount[account.id] || ''}
                                        onChange={(e) => setTransactionAmount({
                                            ...transactionAmount,
                                            [account.id]: e.target.value
                                        })}
                                    />
                                    <button
                                        className='btn btn-success'
                                        onClick={() => handleTransaction(account.id, 'deposit')}>
                                        Deposit
                                    </button>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handleTransaction(account.id, 'withdraw')}>
                                        Withdraw
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(account.id)}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAccounts;