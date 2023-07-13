import './SignUp.css';
import React, { useState } from 'react';
import {RiWhatsappLine} from 'react-icons/ri';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [designation, setDesignation] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
 

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handlePermanentAddressChange = (e) => {
    setPermanentAddress(e.target.value);
  };

  const handlePresentAddressChange = (e) => {
    setPresentAddress(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic here
  };

  return (
    <div className="signup-page">
        <div className='signup-container' >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Phone Number'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder='Name'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
            required
          />
        </div>
        <div className="form-group">
         
          <select id="gender" value={gender} onChange={handleGenderChange} required>
            <option value="" hidden >Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
         
          <input
            type="text"
            id="designation"
            value={designation}
            onChange={handleDesignationChange}
            placeholder='Designation'
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            id="permanentAddress"
            value={permanentAddress}
            onChange={handlePermanentAddressChange}
            placeholder='Permanent Address'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="presentAddress"
            value={presentAddress}
            placeholder='Present Address'
            onChange={handlePresentAddressChange}
            required
          />
        </div>
        <div className="form-group">
         
          <p>If you want to add profile pic to you account. Please send your name and photo to 
          <a href="https://wa.me/9133726921" rel="noreferrer" target='_blank'>< RiWhatsappLine className='contact_option_icon' /></a>
          </p>
        </div>
        <button type="submit">Signup</button>
      </form>
      </div>
    </div>
  );
};

export default SignUp;