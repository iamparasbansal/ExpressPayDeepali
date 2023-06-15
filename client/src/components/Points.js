import React, { useState } from 'react';
import '../styles/PointsPage.css'; // Import the CSS file for styling
import scratchCardImage from '../images/scratch card.jpeg';
import giftCardImage from '../images/gift card.png';
import merchantVoucherImage from '../images/merchant loyalty.png';
import brandVoucherImage from '../images/brand loyalty.png';
import {Link} from 'react-router-dom';
const PointsPage = () => {
  // eslint-disable-next-line
  const [points, setPoints] = useState(0);
  //const [vouchers, setVouchers] = useState([]);

  // const earnPoints = (pointsEarned) => {
  //   setPoints(points + pointsEarned);

  //   if (points + pointsEarned >= 1000) {
  //     setVouchers([...vouchers, 'Gift Card (300 INR)']);
  //   } else if (points + pointsEarned >= 500) {
  //     setVouchers([...vouchers, 'Gift Card (100 INR)']);
  //   }
  // };

  return (
    <div className="container">
      <h1 className="title">My Digital Points</h1>
      <section>
        <p className="points">Points Earned: {points}</p>
      </section>
      <section>
        <h2>My Vouchers</h2>
        <div className="cards-container">
          <div className="card">
          
     
            <Link className="nav-link active" aria-current="page" to="./Scratch"> <img src={scratchCardImage} alt="Scratch Card" /></Link>
            <h3>Scratch Card Won</h3>
          </div>
          <div className="card">
          <Link className="nav-link active" aria-current="page" to="./GiftCards"> <img src={giftCardImage} alt="Gift Card" /></Link>
            <h3>Gift Cards Earned</h3>
          </div>
          <div className="card">
            <img src={merchantVoucherImage} alt="Merchant Voucher" />
            <h3>Merchant Loyalty Vouchers</h3>
          </div>
          <div className="card">
            <img src={brandVoucherImage} alt="Brand Voucher" />
            <h3>Brand Loyalty Voucher</h3>
          </div>
        </div>
      </section>
      <section>
        <h2>How to Earn Points and Gift Cards</h2>
        <ul>
          <li>Earn 1 point on opening the app.</li>
          <li>Earn 50 points for giving referrals for the app.</li>
          <li>Earn 10 points for paying by scanning code, through UPI, NetBanking, or paying to any other account.</li>
          <li>Earn 20 points for paying subscriptions and bills.</li>
          <li>Earn 100 points for doing online shopping using the app.</li>
        </ul>
        <p>
          On earning 1000 points, you will receive a gift card of 300 INR.
          <br />
          On earning 500 points, you will receive a gift card of 100 INR.
        </p>
      </section>
    </div>
  );
};

export default PointsPage;