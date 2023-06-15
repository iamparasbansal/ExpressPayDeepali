import React, { useState } from 'react';
import '../styles/Voucher.css';
import voucherImage from '../images/voucher.png';

const Voucher = () => {
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="voucher-container">
      <h2 className="voucher-heading">Voucher</h2>
      <div className="voucher-inner-container">
        <form className="voucher-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              placeholder="Receiver's Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount (Max: 100000)"
              max={100000}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="Expiry Date (Max: 1 year)"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Purpose"
              required
            />
          </div>
          <button type="submit" className="voucher-submit-btn">Submit</button>
        </form>
      </div>
      <img src={voucherImage} alt="Voucher" className="voucher-image" />
    </div>
  );
};

export default Voucher;
