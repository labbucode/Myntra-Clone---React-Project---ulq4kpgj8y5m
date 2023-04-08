import data from "../data";
import "../Styles/Filter.css"


const FilterPage = ({items,setItems}) => {

    const genderCategory = (e) => {
        
        if (e.target.value === "all") {
             setItems(data)
        } else{
        
                    setItems(data.filter((ele) => {
                        return ele.gender === e.target.value;
                    }))
        
        
                }
        
    }
    const typeCategory = (e) => {
        if (e.target.checked === false) {
            if (e.target.value === "folded") {
                setItems(items.filter((ele) => {
                    return ele.folded === "Y";
                }));
            }
            else if (e.target.value === "white") {
                setItems(items.filter((ele) => {
                    return ele.link.includes(e.target.value);
                }))
            }
        }
        else {
            document.getElementById("gender-category").querySelector("input").checked = true;
            setItems(data);
        }
      

    }

    return (
        <>

                <div className="filterSection">
                    <h4 className='filterheading'>FILTERS:</h4>
                    <div className="gender-category" id='gender-category'>
                        <h4>Gender</h4>
                        <input
                            type="radio"
                            name="gender"
                            value="all"
                            onClick={genderCategory}
                        />
                        <label>ALL</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            onClick={genderCategory}
                        />
                        <label>MEN</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="F"
                            onClick={genderCategory}
                        />
                        <label>WOMEN</label>
                    </div>
                    <div className="product-category" id='product-category'>
                        <h4>Categories</h4>
                        <input
                            type="checkbox"
                            value="white"
                            onMouseUp={typeCategory}
                        />
                        <label>White</label>
                        <br />
                        <input
                            type="checkbox"
                            name="FoldedSleeve"
                            value="folded"
                            onMouseUp={typeCategory}
                        />
                        <label>Folded Sleeve</label>
                    </div>
                </div>


        </>
    )
}

export default FilterPage;