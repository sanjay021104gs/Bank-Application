import React, { useState, useEffect } from 'react';
import AccountRow from './AccountRow';
import { listAccounts } from '../services/Accountservice';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  const refreshList = () => {
    listAccounts().then((response) => {
      setAccounts(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List of Accounts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Holder Name</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <AccountRow key={account.id} account={account} refreshList={refreshList} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;