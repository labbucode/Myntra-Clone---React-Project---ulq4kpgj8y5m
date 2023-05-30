import "../Styles/Cart.css"

export default function CartItems({ cartItems, setCartItems }){
    function handleDelete(data) {
        const newCartItems = cartItems.filter(item => item.id != data.id)
        setCartItems([...newCartItems])
        localStorage.setItem('datas', JSON.stringify([...newCartItems]))
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
                                    <br />
                                    <button>Buy now</button>
                                    <button onClick={() => handleDelete(item)}>
                                        Remove
                                    </button>
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