import ProductsContainer from "../components/ProductsContainer";
import FilterPage from "../components/FilterPage";
import Sorting from "../components/Sorting"
import "../Styles/Products.css"


export default function Products({ items, setItems, search }) {


    return (
        <>
            <Sorting items={items} setItems={setItems} />
            
            <section className="products">
                <div className="filter__container">
                    <FilterPage items={items} setItems={setItems} />
                </div>
                <ProductsContainer items={items} setItems={setItems} search={search} />
            </section>
        </>

    )
}