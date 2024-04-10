import React, { useState } from 'react';
import { Lists } from './Lists';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
export function MyAccount({ dresses, addToCart, cartItems }) {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };
  const itemsCount = cartItems?.length ?? 0
  
  const filteredDresses = selectedStyle
    ? dresses.filter((dress) => dress.style === selectedStyle)
    : dresses;
    const Navigate = useNavigate();

      const logoutbutton = () => {
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      window.location.href = '/users/login'; 
    };

  return (
    <div className='my-account'>
      <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", margin: "1rem", cursor: "pointer", color: "purple", gap: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select onChange={(e) => handleStyleSelect(e.target.value)}>
            <option value="">All Styles</option>
            <option value="Bohemian">Bohemian</option>
            <option value="Elegant">Elegant</option>
            <option value="Professional">Professional</option>
            <option value="Relaxed">Relaxed</option>
          </select>
        </div>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon onClick={() => Navigate('/cart')} />
        </Badge>
        <Button onClick={logoutbutton}>Log Out</Button>
      </div>
      <h3 className='custom-heading'>Shop the Latest Trends! Add to Cart and Enjoy!</h3>
      <div className="aligning">
        {filteredDresses.map((dress, index) => (
          <Lists dress={dress} key={index} id={index} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
