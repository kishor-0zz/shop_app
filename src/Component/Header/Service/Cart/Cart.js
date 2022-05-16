import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const { cart } = props;
   console.log(cart);

   let totalQuentty = 0;
   let total = 0;
   for (const item of cart) {
      if (!item.quantity) {
         item.quantity = 1;
      }
      total = total + item.price * item.quantity;
      totalQuentty = totalQuentty + item.quantity;
   }

   return (
      <div className='cart'>
         <h2>item: {totalQuentty}</h2>
         <h3>price: {total} </h3>

      </div>
   );
};

export default Cart;