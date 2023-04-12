import "./App.css"
import Products from "./pages/Products"
import { Route,Routes } from "react-router-dom"
import Product from "./pages/Product"
import Header from "./pages/Header"
import CartPage from "./pages/CartPage"
import data from "./data"
import { useState } from "react"
import HomePage from "./pages/HomePage"


function App() {
  const localCartItems = JSON.parse(localStorage.getItem('datas'))
   const [items,setItems] = useState(data)
   const [cartItems,setCartItems] = useState(localCartItems || []);
 
   const [search,setSearch] = useState('')

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} cartItems={cartItems} items={items} setItems={setItems} />
      <Routes>
      <Route path="cart"  element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route index element={<HomePage items={items} setItems={setItems} search={search} />} />
      <Route path="products" element={<Products items={items} setItems={setItems} search={search} />} />
      <Route path="products/:id"  element={<Product setCartItems={setCartItems} cartItems={cartItems} />} />
      </Routes>
    
    </div>
  )
}

export default App
