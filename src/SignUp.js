import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppBar } from "./AppBar";

export function SignUp({cartItems}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://my-dresses-backend.onrender.com/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.message === 'User signed up successfully') {
          console.log('User signed up successfully!', responseData.result);
          navigate("/users/login/myaccount")
        }
      } else {
        const responseData = await response.json();
        if (responseData.error === 'Email already exists') {
          setError('Email already exists. Please use a different email.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred. Please try again later.');
    }
  };
  return (
    <div className='form'>
     <div style={{ position: "fixed", top: 0, left: 0, right: 0,padding:"1rem" }}>
        <AppBar cartItems={cartItems} />
      </div>
    <h1 className='custom-heading'>Sign Up</h1>
    <form className="textbars"onSubmit={handleSignUp}>
      
     <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <TextField
        id="outlined-basic-password"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
         <Button color='secondary' variant="contained" onClick={handleSignUp}>
        SignUp
      </Button>
      </form>
         <div className="error-container">
    {error && <Typography color="error">{error}</Typography>}
  </div>
     <span>Already a User? <Link className='Link' to="/users/login">Click Here</Link></span>
    
    </div>
  );
}
