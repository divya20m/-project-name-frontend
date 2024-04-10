import React, { useState, useEffect } from "react";
import "./App.css";
import { AllLists } from "./AllLists";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { NotFoundPage } from "./NotFoundPage";
import { StyleListing } from "./StyleListing";
import { ListInfo } from "./ListsInfo";
import { SignUp } from './SignUp';
import { EmailLogin } from './EmailLogin';
import { ForgotPassword } from './ForgotPassword';
import { MyAccount } from './MyAccount';
import { ResetPassword } from './ResetPassword';
import {Cart} from "./Cart";

function App() {

  const [dresses, setDresses] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://my-dresses-backend.onrender.com/dresses")
      .then((res) => res.json())
      .then((data) => setDresses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("https://my-dresses-backend.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setAllusers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);
 

const addToCart = async (id) => {
  try {
    const userEmail = localStorage.getItem("email");
    const response = await fetch('https://my-dresses-backend.onrender.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userEmail,
      },
      body: JSON.stringify({ id: String(id) }),
    });

    if (!response.ok) {
      throw new Error('failed to add items to cart');
    }
    setCartItems([...cartItems, id]);
    
  } catch (error) {
    console.error(error);
  }
};



const fetchCartItems = async () => {
  try {
    const userEmail = localStorage.getItem("email");
    const response = await fetch('https://my-dresses-backend.onrender.com/cart', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userEmail, 
      },
    });

    if (!response.ok) {
      throw new Error('failed to fetch cart items');
    }

    const data = await response.json();
    setCartItems(data)
  } catch (error) {
    console.error( error);
  }
};


const deletingId = async (id) => {
  try {
    const userEmail = localStorage.getItem("email");
    const response = await fetch(`https://my-dresses-backend.onrender.com/cart/${id}`, {
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization: userEmail, 
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }

    const data = await response.json();
    setCartItems(data)
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};



  return (
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route
            path="/dresses"
            element={<AllLists dresses={dresses} setDresses={setDresses} addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/dresses/Bohemian"
            element={<StyleListing style="Bohemian" dresses={dresses} cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/dresses/Elegant"
            element={<StyleListing style="Elegant" dresses={dresses} cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/dresses/Professional"
            element={<StyleListing style="Professional" dresses={dresses} cartItems={cartItems} addToCart={addToCart} />}
          />
          
          <Route
            path="/dresses/Relaxed"
            element={<StyleListing style="Relaxed" dresses={dresses} cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route path="/dresses/:id" element={<ListInfo dress={dresses} />} />

          <Route path="*" element={<NotFoundPage />} />
       
     {/* /////////////////////////////////////////// */}
     
        <Route path="/users/login" element={<EmailLogin cartItems={cartItems} />} />
        <Route path="/users/signup" element={<SignUp cartItems={cartItems}/>} />
        <Route path="/users/forgotPassword" element={<ForgotPassword cartItems={cartItems} />} />
        <Route path="/users/login/myaccount" element={<MyAccount dresses={dresses} setDresses={setDresses} cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/users/reset-password/:email/:token" element={<ResetPassword />} />
      {/* {//////////////} */}
        <Route path="/cart" element={<Cart cartItems = { cartItems } fetchCartItems={fetchCartItems} deletingId={deletingId} />} />

        </Routes>
      </div>
  );
}

export default App;
