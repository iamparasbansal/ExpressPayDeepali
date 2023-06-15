import React, { useState, useEffect } from 'react';
import '../styles/Erupi.css';
import fiftyrupee from "../images/fiftyrupees.jpg";
import fiftycoin from "../images/fiftycoinneww.jpg";
import fivehundred from "../images/fivehundredrupees.jpg";
import fiverupees from "../images/fiverupees.jpg";
import hundredrupees from "../images/hundredrupees.jpg";
import onerupees from "../images/onerupeesnew.jpg";
import twohundredrupees from "../images/twohundredrupees.jpg";
import tworupees from "../images/tworupees.jpg";
import twothousandrupees from "../images/twothousandrupees.jpg";
import { useNavigate } from 'react-router-dom';

const Erupi = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '', accountno: '', balance: 0 });
  const [amount, setAmount] = useState('');
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [pin, setPin] = useState('');
  const [showPinPrompt, setShowPinPrompt] = useState(false);

  useEffect(() => {
    const Erupidata = async () => {
      try {
        const res = await fetch('/getdata', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();
        console.log(data);
        setUserData({ ...userData, name: data.name, email: data.email, accountno: data.accountno, balance: data.balance });

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    Erupidata();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleReceiverAccountNumberChange = (e) => {
    setReceiverAccountNumber(e.target.value);
  };

  const handleReceiverNameChange = (e) => {
    setReceiverName(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleTransferClick = () => {
    setShowPinPrompt(true);
  };

  const handleTransaction = async (e) => {
    e.preventDefault();

    const { accountno, balance } = userData;
    console.log(pin);

    try {
      const res = await fetch('/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountno,
          pin,
          amount,
          receiverAccountNumber,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        // Update the user's balance in the state
        const updatedBalance = balance - amount;
        setUserData({ ...userData, balance: updatedBalance });

        // Reset the form fields after the transaction
        setAmount('');
        setReceiverAccountNumber('');
        setReceiverName('');
        setPin('');
        setShowPinPrompt(false);

        // Show the success alert
        const alertMessage = 'Thanks for payment through ERupi';
        const alertElement = document.createElement('div');
        alertElement.className = 'alert success';
        alertElement.appendChild(document.createTextNode(alertMessage));
        document.body.appendChild(alertElement);

        // Remove the alert after a certain time
        setTimeout(() => {
          document.body.removeChild(alertElement);
        }, 3000);
      } else {
        // Error occurred during the transaction
        throw new Error('Failed to complete the transaction');
      }
    } catch (error) {
      // Show the error alert
      const alertMessage = `Error: ${error.message}`;
      const alertElement = document.createElement('div');
      alertElement.className = 'alert error';
      alertElement.appendChild(document.createTextNode(alertMessage));
      document.body.appendChild(alertElement);

      // Remove the alert after a certain time
      setTimeout(() => {
        document.body.removeChild(alertElement);
      }, 3000);
    }
  };

  const handleViewTransactions = () => {
    return navigate('/transactionhistory');
  };

  const handleAmountImageClick = (clickedAmount) => {
    setAmount(clickedAmount);
  };

  return (
    <div className="transaction-form-container">
      <div className="user-information">
        <h2>User Information</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Account Number: {userData.accountno}</p>
        <p>Balance: {userData.balance}</p>
        <div className='text-center'>
        <button className="text-center contact_button" onClick={handleViewTransactions}>
          Transaction History
        </button>
        </div>
      </div>
      <br/>
      <h2>Transaction Details</h2>
      <div className="amount-images-container">
        <div className="rupee-notes">
          <img src={fivehundred} alt="500 Rupee Note" onClick={() => handleAmountImageClick(500)} />
          <img src={fiftyrupee} alt="50 Rupee Note" onClick={() => handleAmountImageClick(50)} />
          <img src={fiverupees} alt="5 Rupee Note" onClick={() => handleAmountImageClick(5)} />
          <img src={hundredrupees} alt="100 Rupee Note" onClick={() => handleAmountImageClick(100)} />
          <img src={twohundredrupees} alt="200 Rupee Note" onClick={() => handleAmountImageClick(200)} />
          <img src={tworupees} alt="2 Rupee Note" onClick={() => handleAmountImageClick(2)} />
          <img src={twothousandrupees} alt="2000 Rupee Note" onClick={() => handleAmountImageClick(2000)} />
        </div>
        <div className="coin-notes">
          <div className="coin-images-row">
            <img src={onerupees} alt="1 Rupee coin" onClick={() => handleAmountImageClick(1)} />
            <img src={fiftycoin} alt="50 Paisa coin" onClick={() => handleAmountImageClick(0.5)} />
          </div>
        </div>
      </div>

      <form>
        <div className="text-center">Amount:</div>
        <input type="number" value={amount} onChange={handleAmountChange} required />
        <br />
        <div className="form-row">
          <div className="text-center">Receiver's Account Number:</div>
          <input
            type="text"
            id="receiverAccountNumber"
            value={receiverAccountNumber}
            onChange={handleReceiverAccountNumberChange}
            required
          />
        </div>
        <br />
        <div className="form-row">
          <div className="text-center">Receiver's Name:</div>
          <input
            type="text"
            id="receiverName"
            value={receiverName}
            onChange={handleReceiverNameChange}
            required
          />
        </div>
        <div className="contact_form_button">
          <button type="button" className="contact_button" onClick={handleTransferClick}>
            Transfer
          </button>
        </div>
        <br /> <br />
        {showPinPrompt && (
          <div className="pin-prompt">
            <div className="text-center">PIN:</div>
            <br />
            <input type="password" value={pin} onChange={handlePinChange} required />

            <div className="contact_form_button">
              <button type="submit" className="contact_button" onClick={handleTransaction}>
                Confirm Transfer
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Erupi;
