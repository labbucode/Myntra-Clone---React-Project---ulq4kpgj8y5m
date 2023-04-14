import { Link } from "react-router-dom";
export default function ProductsContainer({items,setItems,search}) {
    return(
    <ul className="products__container">
    {items.map((item) => {
        if (search == '') {
            return <li key={item.id} data-id={item.id} className="product">
                <Link to={`${item.id}`}>
                    <img src={item.otherImages[0]} alt="" />
                    <p className="item__name">
                        {item.name}
                    </p>
                    <p className="item__desc">
                        {item.description}
                    </p>
                    <div className="item__price">

                        <span className="item__finalprice">Rs.{item.finalPrice}</span>
                        <span className="item__strickprice" style={{ textDecoration: "line-through" }}>Rs.{item.strickPrice}</span>
                        <strong style={{ color: "red" }}>({item.discount} %OFF)</strong>
                    </div>
                </Link>
            </li>
        }else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return <li key={item.id} data-id={item.id} className="product">
                <Link to={`products/${item.id}`}>
                    <img src={item.otherImages[0]} alt="" />
                    <p className="item__name">
                        {item.name}
                    </p>
                    <p className="item__desc">
                        {item.description}
                    </p>
                    <p className="item__price">
                        <span className="item__finalprice">Rs.{item.finalPrice}</span>
                        <span className="item__strickprice" style={{ textDecoration: "line-through" }}>Rs.{item.strickPrice}</span>
                        <strong style={{ color: "red" }}>({item.discount} %OFF)</strong>


                    </p>
                </Link>


            </li>
        }
    })}

</ul>
    )
} 