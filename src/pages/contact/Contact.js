import React from 'react';
import './Contact.css';
import contact from '../../components/assets/images/contact.jpg';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='card card0 border-0'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-hk-6 col-sm-12'>
            <div className='card1'>
              <div className='row border-line'>
                <img src={contact} alt='contact' />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='row'>
              <div className='card2 d-flex card border-0 px-2 py-2'>
                <h6>Contact With Icons</h6>
              </div>
              <div className='row px-3 mb-2'>
                <div className='line' />
                <small className='br text-center'>OR</small>
                <div className='line' />
              </div>
              <div className='row px-3'>
                <input type='text' name='name' placeholder='Enter your name' className='mb-3' />
              </div>
              <div className='row px-3'>
                <input type='email' name='email' placeholder='Enter your email' className='mb-3' />
              </div>
              <div className='row px-3'>
                <textarea type='text' name='msg' placeholder='Write your message' className='mb-3' />
              </div>
              <div className='row px-3'>
                <button type='submit'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
