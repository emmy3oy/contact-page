import React from 'react'
import { useState } from 'react'
import "./contact.css"
import Navigation from '../../components/nav-footer/navbar'
import Footer from '../../components/nav-footer/footer'
import SignupAd from '../../components/Frames/signup-ad/SignupAd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
  };
 
  const handleEmailChange = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handlePhoneChange = (e) => {
    const text = e.target.value;
    setPhone(text);
  };
  
  const handleSubjectChange = (e) => {
      const text = e.target.value;
      setSubject(text)
  };
  return (
    <div>
      <Navigation />
        <section>
        <div className="contact-form">
            <div className='contact-page'>
                <h1>Contact Us Now</h1>
                <span>Get in touch with us. We are readily available to help you with your requests.</span>
                <div id="cont">
                  <h3><FontAwesomeIcon id='icon' icon={faEnvelope} style={{color: "#055bf0",}} />Email</h3>
                  <span>contact@jobasync.com</span>   <br />
                  <h3><FontAwesomeIcon id='icon' icon={faPhone} style={{color: "#035efc",}} />Phone</h3>
                  <span>+234 80 123 4567</span>
                </div>
            </div>

            <div className="form-section">
                <label id='text'>Name</label>
                <input type="text" 
                  name="text"
                 id="text"
                 value={name}
                 onChange={handleNameChange}
                 placeholder="What's your Name?" />

                <label id="email">Email</label>
                <input type="email" 
                name="email" 
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="What's your Email?" />

                <label id="number">Phone</label>
                <input type="text" 
                name="number" 
                id="number"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="What's your Phone?" />
                <label id="subject">Subject</label>
                <input type="text"
                 name="text" 
                 id="subject"
                 value={subject}
                 onChange={handleSubjectChange} />
                <label id="message">Message</label>
                <textarea name="message" id="messgae-input" cols="60" rows="8"placeholder="Write Your Message"></textarea>
                <button className="btn" type="submit">Submit Message</button>
            </div>
            </div>
        </section>

      <SignupAd />
      <Footer />
    </div>
  )
}

export default Contact
