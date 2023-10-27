import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Lists({ dress, id }) {
  
  const [show, setShow] = useState(false);

  const colorStyles = {
    fontSize: "large",
    fontWeight: "bold",
  };

  const SummaryStyles = {
    display: show ? "block" : "none",
  };

  const Navigate = useNavigate();

  return (
    <div>
      <div className="all">
        <div>
          <img className="img" src={dress.imageURL} alt={dress.name} />
        </div>
        <div className="others">
          <div className="product-name">
            <h4>
              {dress.name}-{dress.id}
            </h4>
            <h4>{dress.price}</h4>
          </div>

          <div className="category">
            <p>Occasion: {dress.occasion}</p>

            <p style={colorStyles}>
              Colors:{" "}
              {Array.isArray(dress.colors)
                ? dress.colors.join(", ")
                : dress.colors}
            </p>
          </div>

          <ArrowDownwardIcon
            onClick={() => setShow(!show)}
            color="tertiary"
            pointer="cursor"
          />
          <p style={SummaryStyles}>{dress.description}</p>
          <Button
            style={{ margin: "10px" }}
            onClick={() => Navigate("/dresses/" + id)}
            variant="contained"
          >
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
