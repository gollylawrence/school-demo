import React, { ChangeEvent, useState } from 'react';
import './styles.css'

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading (timeout)
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className='top-item'>
        <div className='donation-form inner-component'>
        {!submitted ? (
            <form className="form-group" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={e => setName(e.currentTarget.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={e => setEmail(e.currentTarget.value)} required />
                
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" onChange={e => setPhoneNumber(e.currentTarget.value)} required />
                
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" onChange={e => setAmount(e.currentTarget.value)} required />
            
                <br />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        ) : (
            <div className='thanks-container'>
            <h2>Thank you for your donation, {name.toUpperCase()}!</h2>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Amount: ${amount}</p>
            </div>
        )}
        </div>
    </div>
  );
};

export default Donate;
