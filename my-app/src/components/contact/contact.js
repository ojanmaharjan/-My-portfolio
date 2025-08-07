import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_816l5ut', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      {/* <div id="clients">
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='contactDesc'>I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with include:</p>
      </div>
      <div id="clientImgs">
        <img src={Walmart} alt="Client" className="clientImg" />
        <img src={Adobe} alt="Client" className="clientImg" />
        <img src={Microsoft} alt="Client" className="clientImg" />
        <img src={Facebook} alt="Client" className="clientImg" />
      </div> */}
      <div className='contact'>
        <h1 id='contact'>Contact Us</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work.</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' id='name'/>
          <input type='email' className='email' placeholder='Your Email' id='email'/>
          <textarea name='message' className='msg' rows="5" placeholder='Your message' id='message'/>
          <button type='submit' value="send" className='SubmitBtn'>Submit</button>
          <div className='links'>
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
            <img src={Youtube} alt="Youtube" className="link" />
            <img src={Instagram} alt="Instagram" className="link"/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
