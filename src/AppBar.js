import Button from "@mui/material/Button";
import {  useNavigate } from "react-router-dom"; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";

export function AppBar({ cartItems }) {
  const Navigate = useNavigate();
  return (
    <div className="bar">
          <div onClick={() => Navigate('/cart')}>
        {cartItems && (
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        )}
      </div>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/dresses");
        }}
      >
        All Dresses
      </Button>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/dresses/Bohemian");
        }}
      >
        Bohemian
      </Button>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/dresses/Elegant");
        }}
      >
        Elegant
      </Button>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/dresses/Professional");
        }}
      >
        Professional
      </Button>
      <Button
        style={{ color: "purple" }}
        onClick={() => {
          Navigate("/dresses/Relaxed");
        }}
      >
        Relaxed
      </Button>
      <Button
        style={{ color: "purple", position: "absolute", right: "10px" }}
        onClick={() => {
          Navigate("/users/signup");
        }}
      >
        SignUp
      </Button>
    </div>
  );
}
