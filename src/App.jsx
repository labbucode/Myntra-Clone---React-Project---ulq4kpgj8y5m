import "./App.css"
import Products from "./pages/Products"
import { Route,Routes } from "react-router-dom"
import Product from "./pages/Product"
import Header from "./pages/Header"
import CartPage from "./pages/CartPage"
import data from "./data"
import { useState } from "react"

function App() {
  const localCartItems = JSON.parse(localStorage.getItem('datas'))
   const [items,setItems] = useState(data)
   const [cartItems,setCartItems] = useState(localCartItems||[]);
   console.log(localCartItems);
 
   const [search,setSearch] = useState('')

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} cartItems={cartItems} />
      <Routes>
      <Route path="cart"  element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route index element={<Products items={items} setItems={setItems} search={search} />} />
      <Route path="products/:id"  element={<Product setCartItems={setCartItems} cartItems={cartItems} />} />
      
      </Routes>
    
    </div>
  )
}

export default App