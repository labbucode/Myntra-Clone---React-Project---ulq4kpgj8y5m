import React from "react";
import CartItems from "../components/CartItem";
import "../Styles/cartPage.css"

const CartPage = ({ cartItems, setCartItems }) => {
    
    return (
       <CartItems cartItems={cartItems} setCartItems={setCartItems} />
      
    );
    
}
export default CartPage;