import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Lists({ dress, id , addToCart,cartItems }) {
  
  const [show, setShow] = useState(false);
  
  const colorStyles = {
    fontSize: "large",
    fontWeight: "bold",
  };

  const SummaryStyles = {
    display: show ? "block" : "none",
  };

  const Navigate = useNavigate();
  
  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div>
      <div className="all">
        <div>
          <img className="img" src={dress.imageURL} alt={dress.name} />
        </div>
        <div className="others">
          <div className="product-name">
            <h1 className='ptag'>
              {dress.name}-{dress.id}
            </h1>
            <h4 className='ptag'>{dress.price}</h4>
          </div>

          <div className="category">
            <p className='ptag'>Occasion: {dress.occasion}</p>

            <p className='ptag'style={colorStyles}>
              Colors:{" "}
              {Array.isArray(dress.colors)
                ? dress.colors.join(", ")
                : dress.colors}
            </p>
          </div>
          <div className="buttons">
          <div className="button-cart">
            <Button
          color="secondary"
            style={{ margin: "10px" }}
            onClick={() => Navigate("/dresses/" + id)}
            variant="contained"
          >
            More
          </Button>
          <Button onClick={() => handleAddToCart(dress.id)} color='secondary'><ShoppingCartIcon/> Add to Cart</Button>
          </div>
          <ArrowDownwardIcon
            onClick={() => setShow(!show)}
            style={{ color: "secondary", cursor: "pointer" }}
          />
          <p className='ptag' style={SummaryStyles}>{dress.description}</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
