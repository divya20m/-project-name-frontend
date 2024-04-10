import React, { useEffect } from "react";
import { Lists } from './Lists';
import DeleteIcon from '@mui/icons-material/Delete';

export function Cart({ cartItems, fetchCartItems, deletingId }) {
  useEffect(() => {
    fetchCartItems();
  }, []);

  const deletehandle = (id) => {
    deletingId(id);
    fetchCartItems();
  };

  return (
    <div className="cart-items">
      <h2>Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item,index) => (
          <div className="cart-items-align" key={index}>
            <Lists dress={item} key={index} addToCart={() => {}} /> 
         <DeleteIcon onClick={() => deletehandle(item.id)} />  
</div>
        ))
      ) : (
        
    <h1 className='custom-heading'>Nothing To show</h1>
      )}
    </div> 
  );
}
