import React, { useState, useEffect } from 'react';
import { createAccount, updateAccount, getAccountById } from '../services/AccountService';

const AccountForm = ({ fetchAccounts, setShowForm, initialData }) => {
    const [formData, setFormData] = useState({
        account_holder_name: '',
        balance: 0
    });

    useEffect(() => {
        if (initialData?.id) {
            getAccountById(initialData.id)
                .then((response) => setFormData(response.data))
                .catch(console.error);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.account_holder_name.trim()) {
            alert("Account holder name cannot be empty.");
            return;
        }

        if (isNaN(formData.balance)) {
            alert("Balance must be a valid number.");
            return;
        }

        const operation = formData.id ? updateAccount : createAccount;

        operation(formData.id || '', formData)
            .then(() => {
                alert(`Account ${formData.id ? 'updated' : 'created'} successfully!`);
                fetchAccounts();
                setFormData({ account_holder_name: '', balance: 0 });
                setShowForm(false);
            })
            .catch(console.error);
    };

    return (
        <form onSubmit={handleSubmit} className='mb-4 p-3 border rounded'>
            <h3>{formData.id ? 'Edit Account' : 'Create New Account'}</h3>

            <div className='mb-3'>
                <label className='form-label'>Account Holder Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={formData.account_holder_name}
                    onChange={(e) => setFormData({ ...formData, account_holder_name: e.target.value })}
                    required
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Initial Balance</label>
                <input
                    type='number'
                    className='form-control'
                    value={formData.balance}
                    onChange={(e) => setFormData({ ...formData, balance: parseFloat(e.target.value) || 0 })}
                    required
                />
            </div>

            <div className='d-flex gap-2'>
                <button type='submit' className='btn btn-primary'>
                    {formData.id ? 'Update Account' : 'Create Account'}
                </button>
                <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => setShowForm(false)}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AccountForm;