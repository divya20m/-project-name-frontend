import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function StyleListing({ dresses, style }) {
 
  const navigate = useNavigate();
  
  const styleDresses = dresses.filter((dress) => dress.style === style);
  
  return (
    <div>
      <h1>{style} Dresses</h1>
      {styleDresses.map((dress) => (
        <div key={dress.id} className="dress-item">
          <img src={dress.imageURL} alt={dress.name} />
          <h2>{dress.name}</h2>
          <p>Price: {dress.price}</p>
          <p>Rating: {dress.rating}</p>
        </div>
      ))}
      <Button onClick={() => navigate("/dresses")}>Back to All Dresses</Button>
    </div>
  );
}
