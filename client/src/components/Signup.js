import React, { useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import signpic from "../../images/registration.jpg";
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';



const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword, accountno, pin, balance } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword, accountno, pin, balance
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration")
      console.log("Invalid Registraion")
    }
    else {
      window.alert("Registration successful")
      console.log("Successful Registration")
      dispatch(login(data));
      navigate('/login')
    }
  }

  const form = useRef();
  const sendEmail = async (e) => {

    e.preventDefault();

    emailjs.sendForm('service_uj23xts', 'template_onpipfw', form.current, 'BR__VjbRbuwhJvRFU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className='signup'>
        <div className='container'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign Up</h2>
              <form method='POST' className='register-form' id='register-form' ref={form} >

                <div className='form-group'>
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="your name"></input>
                </div>

                <div className='form-group'>
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"></input>
                </div>

                <div className='form-group'>
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="your Phone"></input>
                </div>

                {/* <div className='form-group'>
                      <label htmlFor="work">
                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                      </label>
                      <input type="text" name="work" id="work" autoComplete="off" 
                      value={user.work} 
                      onChange={handleInputs} 
                       placeholder="your Profession"></input>
                     </div> */}

                <div className='form-group'>
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="your Password"></input>
                </div>

                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"></input>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className='form-submit' value="register" onClick={(event) => [PostData(event), sendEmail(event)]} />
                </div>

              </form>
            </div>

            <div className='signup-image'>
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link"> I am already registered</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup