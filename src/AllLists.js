import React from "react";
import { Lists } from "./Lists";
import { AppBar } from "./AppBar";
import alldresses from './image/alldresses.webp';

export function AllLists({ dresses,addToCart,cartItems }) {
  return (
    <div className="All-lists">
      <div className="top-things"> 
      <img src={alldresses} className="img-src" alt="failed to load"/>
      <AppBar cartItems={cartItems}/>
      </div>
     
      <div className="aligning">
        {dresses.map((dress, index) => (
          <Lists dress={dress} key={index} id={index} cartItems={cartItems} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
