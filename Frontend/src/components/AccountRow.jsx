import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import { deposit, withdraw, deleteAccount } from '../services/Accountservice';

const AccountRow = ({ account, refreshList }) => {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleDeposit = () => {
    deposit(account.id, depositAmount).then(() => {
      refreshList();
      setShowDepositModal(false);
    }).catch(error => {
      console.error(error);
    });
  };

  const handleWithdraw = () => {
    withdraw(account.id, withdrawAmount).then(() => {
      refreshList();
      setShowWithdrawModal(false);
    }).catch(error => {
      console.error(error);
    });
  };

  const handleDelete = () => {
    deleteAccount(account.id).then(() => {
      refreshList();
      setShowDeleteModal(false);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.accountHolderName}</td>
      <td>{account.balance}</td>
      <td>
        <Button variant="primary" onClick={() => setShowDepositModal(true)}>Deposit</Button>
        <Button variant="primary" onClick={() => setShowWithdrawModal(true)}>Withdraw</Button>
        <Button variant="danger" onClick={() => setShowDeleteModal(true)}>Delete</Button>

        <Modal show={showDepositModal} onHide={() => setShowDepositModal(false)}>
          <ModalHeader closeButton>
            <ModalTitle>Deposit Money</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group">
                <label>Amount:</label>
                <input type="number" className="form-control" value={depositAmount} 
                       onChange={(e) => setDepositAmount(Number(e.target.value))} />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setShowDepositModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleDeposit}>Deposit</Button>
          </ModalFooter>
        </Modal>

        <Modal show={showWithdrawModal} onHide={() => setShowWithdrawModal(false)}>
          <ModalHeader closeButton>
            <ModalTitle>Withdraw Money</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group">
                <label>Amount:</label>
                <input type="number" className="form-control" value={withdrawAmount} 
                       onChange={(e) => setWithdrawAmount(Number(e.target.value))} />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setShowWithdrawModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleWithdraw}>Withdraw</Button>
          </ModalFooter>
        </Modal>

        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <ModalHeader closeButton>
            <ModalTitle>Delete Account</ModalTitle>
          </ModalHeader>
          <ModalBody>
            Are you sure you want to delete this account?
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};

export default AccountRow;