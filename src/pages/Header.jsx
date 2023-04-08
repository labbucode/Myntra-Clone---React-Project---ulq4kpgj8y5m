import React from "react";
import Cart from "../assets/cart.png"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import data from "../data";
import "../Styles/Header.css"

export default function Header({ search, setSearch, cartItems, items, setItems }) {
    function handleCat(gender) {
        if (gender === "all") {
            setItems(data)
        } else {
            setItems(data.filter((ele) => {
                return ele.gender === gender;
            }))
        }
    }

    return (
        <header className="nav__header">
            <nav>
                <div className="nav-left">
                    <div className="logo">
                        <a href="/"><img src={logo} alt="logo" style={{ height: "7vh", paddingTop: "14%" }}></img></a>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <Link to="/"><li onClick={() => handleCat('all')}>All</li></Link>
                            <Link to="/"><li onClick={() => handleCat('M')}>Men</li></Link>
                            <Link to="/"><li onClick={() => handleCat('F')}>Women</li></Link>
                        </ul>
                    </div>

                </div>

                <SearchBar search={search} setSearch={setSearch} />
                
                <div className="cart__container">

                    <Link to={"/cart"}>
                        <div className="item__count">{cartItems.length}</div>
                        <img src={Cart} alt="" />

                    </Link>
                </div>
            </nav>
        </header>
    )
}