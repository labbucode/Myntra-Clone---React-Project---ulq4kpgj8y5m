import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import "../Styles/Product.css";

export default function Product({ cartItems, setCartItems }) {
  const { id } = useParams();
  const clickedItem = data.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  function handleCart(cartData) {
    const existingItem = cartItems.find((item) => item.id === cartData.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === cartData.id) {
          return { ...item, Quantity: item.Quantity + quantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...cartData, Quantity: quantity }]);
    }
    localStorage.setItem("datas", JSON.stringify([...cartItems, cartData]));
  }

  function handleSize(event) {
    return event;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="prod-photo">
        <img src={clickedItem.otherImages[0]} />
        <img src={clickedItem.otherImages[1]} />
        <img src={clickedItem.otherImages[2]} />
        <img src={clickedItem.otherImages[3]} />
      </div>
      <div className="prod-modal">
        <div className="prod-detail">
          <h3>{clickedItem.name}</h3>
          <em>{clickedItem.description}</em>
          <p style={{ marginTop: "15%" }}>Rs.{clickedItem.finalPrice}</p>
          <p style={{ textDecoration: "line-through" }}>
            Rs.{clickedItem.strickPrice}
          </p>
          <strong style={{ color: "red" }}>{clickedItem.discount}% OFF</strong>
          <p>Size chart</p>
          <span className="prod-size">
            <span onClick={handleSize}>{clickedItem.productSize.slice(0, 2)}</span>
            <span onClick={handleSize}>{clickedItem.productSize.slice(4, 6)}</span>
            <span onClick={handleSize}>{clickedItem.productSize.slice(8, 10)}</span>
            <span onClick={handleSize}>{clickedItem.productSize.slice(12, 14)}</span>
          </span>
          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button onClick={() => handleCart(clickedItem)} className="cartBtn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
