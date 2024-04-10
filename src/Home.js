import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"; 
import {ColorSelector} from "./ColorSelector";
import { AppBar } from "./AppBar";


export function Home() {
 
 
  const navigate=useNavigate()
  
  
  return (
    <div className="home">
      <div className="top-things">
       <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/PCGrapgics/Kurta_and_Kurta_sets___Row_31._SX3000_QL85_.jpg" className="img-src" alt="download failed"/> 
       <AppBar />
      </div>
      <h1 style={{fontFamily:"emoji",color:"purple"}}>Daily Dress Color Suggestions for Women</h1>
      <p style={{fontSize: "1.5rem",fontWeight: "500",fontFamily:"emoji",color:"coral"}}>Discover stylish dress ideas for every occasion.</p>
        <p className="description">
          Welcome to a world of fashion inspiration! Our mission is to provide you<br/>
          with daily dress color suggestions for every occasion. Whether it's a<br/>
          casual outing, a formal event, or a day at the office, we've got you<br/>
          covered. Explore our stylish dress ideas, discover the perfect color<br/>
          combinations, and get ready to shine with confidence. Let your wardrobe<br/>
          reflect your unique style, one day at a time.<br/>
        </p>

        
        <p style={{fontFamily:"emoji",color:"coral"}} > Get your lucky color today by the date below and shop up now  </p>
        <ColorSelector />
        <Button style={{ color: "purple" }} onClick={() => navigate("/dresses")}>CHECK UP OUR COLLECTION</Button>
    </div>
  );
}
