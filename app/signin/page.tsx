'use client';

import React, { useState } from 'react';

const validUsers = [
  { number: '9502374126', otp: '1111' },
  { number: '7794058233', otp: '2222' },
  { number: '9666191423', otp: '3333' },
  { number: '7075512255', otp: '4444' },
  { number: '7032920777', otp: '5555' },
  { number: '9030191192', otp: '6666' },
  { number: '4444444444', otp: '7777' },
  { number: '9502260022', otp: '8888' },
  { number: '2222222222', otp: '9999' },
  { number: '9999999999', otp: '0000' }
];

export default function SignInPage() {
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validUsers.find(user => user.number === number && user.otp === otp);
    if (found) {
      setMessage('Login Successful!');
    } else {
      setMessage('Invalid Number or OTP!');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input
            type="text"
            maxLength={10}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          OTP:
          <input
            type="password"
            maxLength={4}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {message && <h1>{message}</h1>}
    </div>
  );
}
