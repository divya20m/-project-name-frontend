import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppBar } from "./AppBar";

export function EmailLogin({cartItems}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://my-dresses-backend.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json()

      if (response.ok) {
        setError('');
        localStorage.setItem('email', email)
        navigate('/users/login/myaccount');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='form'>
      <div style={{position: "fixed", top: 0, left: 0, right: 0,padding:"1rem"}}><AppBar cartItems={cartItems}/></div>
      <h1 className='custom-heading'>Login</h1>
      <form className="textbars"onSubmit={handleLogin}>
      <TextField
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <TextField
         className='textfield'
          id="outlined-basic-password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <Button variant="contained" color='secondary' onClick={handleLogin}>Login</Button>
      </form>
      <div className="error-container">
    {error && <Typography color="error">{error}</Typography>}
  </div>
  <span>A New User? Sign Up <Link className='Link' to="/users/signup">Click Here</Link></span>
  <Link className='Link' to="/users/forgotPassword">Forgot Password</Link>
    </div>
  );
}
