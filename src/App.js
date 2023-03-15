/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
import LoginBtn from './common/login'
import Header from './common/header';

export const StepOne = ({ onNext }) => {
  const [username, setUsername] = useState('');
  const [agree, setAgree] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ username, agree });
  };

  return (
    <>
      <h1>Hey 👋🏽
        <br />
        <span>Welcome to Roqqu</span>
      </h1>
      <h2>Let’s get to know you!
        <br />
        We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
            placeholder="Enter username"
          />
        </div>
        <div className="check-box">
          <label htmlFor="agree">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={handleAgreeChange}
              required
            />
            I agree to Roqqu's <a href="#"> terms and conditions</a> and <a href="#">privacy policy</a>
          </label>
        </div>
        <button type="submit">Continue</button>
        <LoginBtn />
      </form>
    </>
  );
};

export const StepTwo = ({ onNext, username }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ firstName, lastName });
  };

  return (
    <>
      <h1>Hey {username} 👋🏽
      <br />
      <span>Please give us your legal name</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='first-name'>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            placeholder="e.g Jane"
          />
        </div>
        <div className='last-name'>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
            placeholder="e.g Doe"
          />
        </div>
        <div>
          <button type="submit">Continue</button>
        </div>
        <LoginBtn />
      </form>
    </>
  );
};


export const StepThree = ({ onNext, username }) => {
  const [telephone, setTelephone] = useState('');

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ telephone });
  };

  return (
    <>
      <h1>Thank you {username} 👋🏽
      <br />
      <span>Let's have your phone number</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="telephone">Telephone:</label>
          <input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={handleTelephoneChange}
            required
            placeholder="Enter telephone number"
          />
        </div>
        <div className="button-group">
          <button type="submit">Continue</button>
        </div>
        <LoginBtn />
      </form>
    </>
  );
};


export const StepFour = ({ onNext, username }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ email, password });
  };

  return (
    <>
      <h1>Thank you {username} 👋🏽
      <br />
      <span>Enter email and create password</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Enter email address"
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Continue</button>
        <LoginBtn />
      </form>
    </>
  );
};



const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
    console.log(formData);
  };  

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    // submit data to backend
  };

  return (
    <main className='app-body'>
      <div className='container'>
        <Header />
        {step === 1 && <StepOne onNext={handleNext} />}
        {step === 2 && <StepTwo onNext={handleNext} username={formData.username} />}
        {step === 3 && <StepThree onNext={handleNext} username={formData.username} />}
        {step === 4 && <StepFour onNext={handleNext} username={formData.username} />}
      </div>
    </main>
  );
};

export default RegistrationForm;