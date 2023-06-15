import React, { useEffect, useState } from 'react';
import aboutpic from "../images/about1.png";
import { useNavigate } from 'react-router-dom';
import PaymentsPage from './Payment.js';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [pin, setPin] = useState('');

    useEffect(() => {
        const callAboutPage = async () => {
            try {
                const res = await fetch('/about', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                const data = await res.json();
                console.log(data);
                setUserData(data);
                console.log(res.status);

                if (res.status !== 200) {
                    const error = new Error(res.error);
                    throw error;
                }

      }
      catch (err) {
        console.log(err);
        // navigate('/login');
      }
    };
    callAboutPage();
  }, []);

    const saveAccountInfo = async () => {
        try {
            const res = await fetch('/save-account-info', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ accountNo, pin })
            });

            const data = await res.json();
            console.log(data);
            // Handle the response as needed

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            // Handle error
        }
    };
    const CurrencyConverter = () => {
      return navigate('/converter');
    }
  const handleERupiClick = () => {
    if (!userData.accountno || userData.pin === '') {
      // Prompt the user to enter their account number and pin
      const newAccountNo = parseInt(prompt('Enter your account number:'));
      const newPin = prompt('Enter your pin:');
      
      if (newAccountNo && newPin) {
        setAccountNo(newAccountNo);
        setPin(newPin);
        saveAccountInfo();
      } else {
        return navigate('/profile');
      }
    } else {
        return navigate('/erupi')
    }
  };
   
  const handleExpressWalletClick = () => {
    window.location.href = 'https://master--stupendous-alfajores-fe87b7.netlify.app/';
  }

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const handleeRUPIVoucher = () => {
      return navigate('/voucher');
    }

    const Razorpayaay = async (paise) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('You are offline :)');
            return;
        }

        const options = {
            key: "rzp_test_uwD7bSyjP8p6BE",
            currency: "INR",
            image: 'https://i.postimg.cc/nzdjYy2Q/Whats-App-Image-2023-06-07-at-17-38-06.jpg',
            amount: paise * 100,
            name: "ExpressPay",
            description: "Thanks for payment through ExpressPay",
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully ");
            },
            prefill: {
                name: "Name"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={aboutpic} alt="aboutPic" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>

                    <div className="row">
                        {/* left side url  */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <a>Software Engineer</a> <br />
                                <a>Instagram</a> <br />
                                <a>Facebook</a> <br />
                                <a>Web Developer</a> <br />
                                <a>Projects</a> <br />
                                <a>The Code Fabs</a> <br />
                            </div>
                        </div>

            {/* right side data toogle  */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div>User Id</div>
                    </div>
                    <div className="col-md-6">
                      <p>787865454546</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Name</div>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Email</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Phone</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Profession</div>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div>Experience</div>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Hourly Rate</div>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Total Projects</div>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>English Level</div>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div>Availability</div>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <div className="contact_form_button mx-3">
              <button className="contact_button" onClick={() => Razorpayaay(2321)}>Digital Transaction</button>
            </div>
            <div className="contact_form_button mx-3">
              <button className="contact_button" onClick={() => handleERupiClick()}>Direct Transfer</button>
            </div>
            <div className="contact_form_button mx-3">
              <button className="contact_button" onClick={() => CurrencyConverter()}>Currency Converter</button>
            </div>
            <div className="contact_form_button mx-3">
              <button className="contact_button" onClick={() => handleExpressWalletClick()}>Express Wallet</button>
            </div>
            <div className="contact_form_button mx-3">
              <button className="contact_button" onClick={() => handleeRUPIVoucher()}>eRUPI Voucher</button>
            </div>
          </div>
        </div>
      </div>


        <PaymentsPage />
      </div>
     </>
  );
  
};

export default Profile;