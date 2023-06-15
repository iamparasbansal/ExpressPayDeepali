 import React from 'react';
import '../styles/GiftCard.css';
 import {Link} from 'react-router-dom';
 import myntra from '../images/myntra.jpg';
 import amazon from '../images/amazon.png';
 import purple from '../images/purple.png';
const GiftCardsPage = () => {
  return (
    <div className="container">
      <h1>Gift Cards</h1>
      <div className="card-container">
        <div className="card">
        <Link className="nav-link active" aria-current="page" to="https://www.myntra.com/giftcard"><img className="card-image" src={myntra} alt="Myntra" /></Link>
          <h3 className="card-title">Myntra</h3>
        </div>

        <div className="card">
        <Link className="nav-link active" aria-current="page" to="https://www.amazon.in/s?k=amazon+gift+voucher+e+card&rh=n%3A3704982031&dc&ds=v1%3AD5%2BBMgbF06Q4WMMLZfYovFBhp0VQg5mvcZbfjR4QN9Q&adgrpid=63754345419&ext_vrnc=hi&hvadid=590635087626&hvdev=c&hvlocphy=9302104&hvnetw=g&hvqmt=e&hvrand=6695822969813784371&hvtargid=kwd-964742720323&hydadcr=14586_2262464&qid=1686560871&rnid=3576079031&tag=googinhydr1-21&ref=sr_nr_n_1"><img className="card-image" src={amazon} alt="Amazon" /></Link>
          <h3 className="card-title">Amazon</h3>
        </div>

        <div className="card">
        <Link className="nav-link active" aria-current="page" to="https://www.purplle.com/search?q=gift%20cards"><img className="card-image" src={purple} alt="Purple" /></Link>
          <h3 className="card-title">Purple</h3>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsPage;
