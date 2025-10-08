import React, { useState, useEffect } from 'react';
import { listEmployees } from 'C:\Users\sanja\OneDrive\Desktop\Springboot\BankingApplication\React\bankapp\some\src\components\services\Accountservice.js';

const AccountList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Holder name</th>
            <th>Balance </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.id}</td>
              <td>{employee.account_holder_name}</td>
              <td>{employee.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AccountList;