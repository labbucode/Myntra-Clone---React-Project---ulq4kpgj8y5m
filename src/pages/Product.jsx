import { useParams } from "react-router-dom";
import data from "../data";
import "../Styles/Product.css"


export default function Product({ cartItems, setCartItems }) {



  const { id } = useParams()
  const clickedItem = data.find(item => item.id === Number(id))
  function handleCart(cartData) {

    setCartItems([...cartItems, cartData])
    localStorage.setItem('datas', JSON.stringify([...cartItems, cartData]))
  }

  return (

    < div style={{ display: "flex", justifyContent: "center" }}>
      <div className='prod-photo'>
        <img src={clickedItem.otherImages[0]} />
        <img src={clickedItem.otherImages[1]} />
        <img src={clickedItem.otherImages[2]} />
        <img src={clickedItem.otherImages[3]} />
      </div>


      <div className='prod-modal'>
        <div className='prod-detail'>
          <h3 >{clickedItem.name}</h3>
          <em >{clickedItem.description}</em>
          <p style={{ marginTop: "15%" }}>Rs.{clickedItem.finalPrice}</p>
          <p style={{ textDecoration: "line-through" }}>Rs.{clickedItem.strickPrice}</p>
          <strong style={{ color: "red" }}>{clickedItem.discount} %OFF</strong>
          <p>Size chart</p>
          <span className='prod-size'>
            <span>{clickedItem.productSize.slice(0, 2)}</span>
            <span>{clickedItem.productSize.slice(4, 6)}</span>
            <span>{clickedItem.productSize.slice(8, 10)}</span>
            <span>{clickedItem.productSize.slice(12, 14)}</span>
          </span>
        </div>

        <button onClick={() => handleCart(clickedItem)} className='cartBtn'>
          Add to Cart
        </button>
      </div>
    </div>
  )


}