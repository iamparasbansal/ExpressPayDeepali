
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Profile from './components/Profile';
import Rewards from './components/Rewards';
import Converter from './components/Converter';
import Contact from './components/Contact';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import NewsItems from './components/NewsItems';
import News from './components/News';
import Stock from './components/Stock';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Points from './components/Points';
import Cashback from './components/Cashback';
import Offer from './components/Offer';
import Referral from './components/Referral';
import Payments from './components/Payment';
import Erupi from './components/Erupi';
import ScratchCard from './components/Scratch';
import GiftCard from './components/GiftCards';

import Transactionhistory from './components/Transactionhistory';
import Voucher from './components/Voucher'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Query from './components/Query';

const App = () => {
  const user = useSelector(selectUser);

  const ProtectedRoute = ({ element: Component, pageName, ...props }) => {
    if (!user) {
      alert(`Please log in to access ${pageName}.`);
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<ProtectedRoute element={Profile} pageName="Profile" />} />
          <Route exact path="/erupi" element={<ProtectedRoute element={Erupi} pageName="Erupi" />} />
          <Route exact path="/rewards" element={<ProtectedRoute element={Rewards} pageName="Rewards" />} />
          <Route exact path="/cashback" element={<ProtectedRoute element={Cashback} pageName="Cashback" />} />
          <Route exact path="/offer" element={<ProtectedRoute element={Offer} pageName="Offer" />} />
          <Route exact path="/payment" element={<ProtectedRoute element={Payments} pageName="Payment" />} />
          <Route exact path="/points/Scratch" element={<ProtectedRoute element={ScratchCard} pageName="Scratch Card" />} />
         
          <Route exact path="/points/GiftCards" element={<ProtectedRoute element={GiftCard} pageName="Gift Cards" />} />
          <Route exact path="/transactionhistory" element={<ProtectedRoute element={Transactionhistory} pageName="Transaction History" />} />
          <Route exact path="/converter" element={<Converter />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/stock" element={<Stock />} />
          <Route exact path="/newsitems" element={<NewsItems />} />
          <Route exact path="/points" element={<Points />} />
          <Route exact path="/referral" element={<Referral />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/community" element={<Query user={user}/>} />
          <Route exact path="/voucher" element={<Voucher />} />
          <Route exact path="*" element={<Errorpage />} />        
        </Routes>
      </BrowserRouter>
      <Chatbot />
    </>
  );
};

export default App;