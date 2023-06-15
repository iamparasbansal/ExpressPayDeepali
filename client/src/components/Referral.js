import React, { useState } from 'react';
import ref from '../images/ref.jpg';
import emailIcon from '../images/email-icon.jpg';
import whatsappIcon from '../images/whatsapp-icon.jpg';
import facebookIcon from '../images/facebook-icon.jpg';
import telegramIcon from '../images/telegram-icon.jpg';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  // eslint-disable-next-line
  const [email, setEmail] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setIsCopied(true);
  };

  const handleEmailShare = () => {
    const subject = 'Check out this referral';
    const body = `Use my referral code: ${referralCode} when signing up at https://example.com`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppShare = () => {
    const text = `Use my referral code: ${referralCode} when signing up at https://example.com`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  const handleFacebookShare = () => {
    const url = `https://example.com/referral/${referralCode}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const handleTelegramShare = () => {
    const text = `Use my referral code: ${referralCode} when signing up at https://example.com`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(text)}`);
  };

  return (
    <div>
      <h1 className="referalhead">Referral Page</h1>
      <img src={ref} alt="Referral" width="500" height="600" align ="right"/>
      <p className="sharep">Share this link:</p>
      <a href={`https://example.com/referral/${referralCode}`} className="clicklink">
        {`https://example.com/referral/${referralCode}`}
      </a>
      <div>
        <br></br>
        <p className="sharep2">Or share via:</p>
      <div className="share-buttons sharebuttons">
        <button onClick={handleEmailShare} className="shareoption">
          <img src={emailIcon} alt="Email" width="40" height="40" />
        </button>
        <button onClick={handleWhatsAppShare} className="shareoption">
          <img src={whatsappIcon} alt="WhatsApp" width="40" height="40" />
        </button>
        <button onClick={handleFacebookShare} className="shareoption">
          <img src={facebookIcon} alt="Facebook" width="40" height="40" />
        </button>
        <button onClick={handleTelegramShare} className="shareoption">
          <img src={telegramIcon} alt="Telegram" width="40" height="40" />
        </button>
      </div>
      <br></br>
      <p className="sharep3">Share your referral code with friends:</p>
      <div className="contact_form_button">
                                    <a href={`https://example.com/referral/${referralCode}`} className="copylink">
        {`https://example.com/referral/${referralCode}`}
      </a>
      <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span/>
      <button onClick={handleCopy} className="contact_button">{isCopied ? 'Copied!' : 'Copy'}</button>
      
      </div>
      <input
        type="text"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
      />
      
                                    
      </div>
      
    </div>
  );
};

export default Referral;






































