import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react";

export function ListInfo() {
  
  const { id } = useParams();
  const [dress, setDress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch(`https://back-end-nodejs.onrender.com/dresses/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDress(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);


  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div style={{display: "flex",justifyContent:" space-around",flexWrap:" wrap",marginTop: "70px"}}>
          <div>
            <img style={{height:"550px",width:"480px"}} src={dress.imageURL} alt={dress.name} />
          </div>
          <div className="others">
            <div className="product-name">
              <h4>{dress.name}-{dress.id}</h4>
              <h4>{dress.price}</h4>
            </div>

            <div className="category">
              <p>Occasion: {dress.occasion}</p>
              <p>
                Colors: {Array.isArray(dress.colors) ? dress.colors.join(", ") : dress.colors}
              </p>
            </div>
            <p>{dress.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
