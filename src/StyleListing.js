import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import bohemianImage from "./image/bohemain.jpg";
import elegantImage from "./image/elegant.webp";
import professionalImage from "./image/professional.webp";
import relaxedImage from "./image/relaxed.jpg";
import { AppBar } from "./AppBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export function StyleListing({ dresses, style,cartItems,addToCart }) {
 
  const navigate = useNavigate();
  
  const styleDresses = dresses.filter((dress) => dress.style === style);
  
  let imageSrc;
  switch (style) {
    case "Bohemian":
      imageSrc = bohemianImage;
      break;
    case "Elegant":
      imageSrc = elegantImage;
      break;
    case "Professional":
      imageSrc = professionalImage;
      break;
    case "Relaxed":
      imageSrc = relaxedImage;
      break;
    default:
      break;
  }
  const handleAddToCart = (dress) => {
    addToCart(dress);
  };
  return (
    <div>
      <div className="top-things">
      <img src={imageSrc} alt={style} className="img-src" />
      <AppBar cartItems={cartItems} addToCart={addToCart} />
      </div>
      <h1 className="custom-heading">{style} Dresses</h1>
      <div className='dress-item'>
      {styleDresses.map((dress) => (
        <div key={dress.id} className="all-styledress">
          <img className='img-styling' src={dress.imageURL} alt={dress.name} />
          <h2>{dress.name}</h2>
          <p>Price: {dress.price}</p>
          <p>Rating: {dress.rating}</p>
          <Button onClick={() => handleAddToCart(dress)} color='secondary'><ShoppingCartIcon/> Add to Cart</Button>
        </div>
      ))}
      </div>
      <Button onClick={() => navigate("/dresses")}>Back to All Dresses</Button>
    </div>
  );
}
