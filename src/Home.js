import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"; 
import {ColorSelector} from "./ColorSelector";


export function Home() {
 
 
  const navigate=useNavigate()
  
  
  return (
    <div>
      <section className="hero">
      <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/PCGrapgics/Kurta_and_Kurta_sets___Row_31._SX3000_QL85_.jpg" style={{height:"400px",width:"100%"}} alt="download failed"/>
        <h1>Daily Dress Color Suggestions for Women</h1>
        <p style={{fontSize: "larger",fontWeight: "500"}}>Discover stylish dress ideas for every occasion.</p>
        <p className="hero-description">
          Welcome to a world of fashion inspiration! Our mission is to provide you
          with daily dress color suggestions for every occasion. Whether it's a
          casual outing, a formal event, or a day at the office, we've got you
          covered. Explore our stylish dress ideas, discover the perfect color
          combinations, and get ready to shine with confidence. Let your wardrobe
          reflect your unique style, one day at a time.
        </p>

        
        <p> Get your lucky color today by the date below and shop up now  </p>
        <ColorSelector />
        <Button onClick={() => navigate("/dresses")}>CHECK UP OUR COLLECTION</Button>
      </section>
    </div>
  );
}
