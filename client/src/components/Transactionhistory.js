import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/Transactionhistory.css';

const Transactionhistory = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
    fetchTransactions();

    // Clear user and transactions data when the component unmounts
    return () => {
      setUser(null);
      setTransactions([]);
    };
  }, []);

  const fetchUser = async () => {
    try {
      // Make an API call to fetch user information based on the current user
      const response = await axios.get('/getdata');
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setError('Error fetching user information');
      setIsLoading(false);
    }
  };

  const fetchTransactions = async () => {
    try {
      // Make an API call to fetch transactions for the current user
      const response = await axios.get('/findTransaction');
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="transaction-page">
      <h1 className="text-center abc">Transaction History</h1>
      <div className="user-card">
        <h2 className="user-info-heading">User Information</h2>
        <div className="user-info">
          <div>
            <span className="info-label">Name:</span>
            <span className="info-value">{user.name}</span>
          </div>
          <div>
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div>
            <span className="info-label">Current Balance:</span>
            <span className="info-value">{user.balance}</span>
          </div>
        </div>
      </div>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className={`transaction-card ${
            transaction.receiverAcountno === user.accountno ? 'positive' : 'negative'
          }`}
        >
          <div className="transaction-info">
            <div className="info-item">
              <span className="info-label">Sender:</span>
              <span className="info-value">{transaction.senderName}</span>
              <span className="info-label">Account Number:</span>
              <span className="info-value">{transaction.senderAcountno}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Receiver:</span>
              <span className="info-value">{transaction.receiverName}</span>
              <span className="info-label">Account Number:</span>
              <span className="info-value">{transaction.receiverAcountno}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">{transaction.date}</span>
              <span className="info-label">
                Amount:
                <span className="amount-value">
                  {transaction.receiverAcountno === user.accountno ? '+' : '-'}
                  {transaction.amountTransferred}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactionhistory;
