import React from 'react';
import "../Styles/Cart.css";

export default function CartItems({ cartItems, setCartItems }) {
 function handleDelete(data) {
  const newCartItems = cartItems.filter(item => item.id !== data.id);
  setCartItems(newCartItems);
  localStorage.setItem('datas', JSON.stringify(newCartItems));
 }

 function handleQuantityIncrease(item) {
  const updatedCartItems = cartItems.map(cartItem => {
   if (cartItem.id === item.id) {
    return {
     ...cartItem,
     Quantity: cartItem.Quantity + 1
    };
   }
   return cartItem;
  });
  setCartItems(updatedCartItems);
  localStorage.setItem('datas', JSON.stringify(updatedCartItems));
 }

 function handleQuantityDecrease(item) {
  const updatedCartItems = cartItems.map(cartItem => {
   if (cartItem.id === item.id && cartItem.Quantity > 1) {
    return {
     ...cartItem,
     Quantity: cartItem.Quantity - 1
    };
   }
   return cartItem;
  });
  setCartItems(updatedCartItems);
  localStorage.setItem('datas', JSON.stringify(updatedCartItems));
 }

 return (
  <>
   {cartItems.length === 0 ? (
    <p className="emptyCart">Your Cart is Empty</p>
   ) : (
    <>
     <ul className="cartsection">
      {cartItems.map((item) => {
       return (
        <li key={item.id} className="cartproduct">
         <div className="cartImage">
          <img src={item.otherImages[0]} alt="" />
         </div>
         <div></div>
         <div className="cartdescription">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p className="price">
           <b>rs:</b>
           <s>{item.strickPrice}</s>
           <span> {item.discount}% {item.finalPrice}</span>
          </p>
          <p className="size">size:</p>
          {item.productSize}
          <p className="quantity">
           Quantity: {item.Quantity}
           <button onClick={() => handleQuantityIncrease(item)}>+</button>
           <button onClick={() => handleQuantityDecrease(item)}>-</button>
          </p>
          <br />
          <button>Buy now</button>
          <button onClick={() => handleDelete(item)}>Remove</button>
         </div>
        </li>
       );
      })}
     </ul>
    </>
   )}
  </>
 );
}
