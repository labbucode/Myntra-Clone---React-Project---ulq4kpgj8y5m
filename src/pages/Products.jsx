import ProductsContainer from "../components/ProductsContainer";
import FilterPage from "../components/FilterPage";
import Sorting from "../components/Sorting"
import "../Styles/Products.css"
import Footer  from "../components/Footer"


export default function Products({ items, setItems, search }) {


    return (
        <>
        <div className="hero">

            <div className="filter__container">
                <Sorting items={items} setItems={setItems} />
                <FilterPage items={items} setItems={setItems} />
                </div>
            <div className="products"> 
                <ProductsContainer items={items} setItems={setItems} search={search} />
            </div>
        </div>
            <Footer />
        </>
    )
}