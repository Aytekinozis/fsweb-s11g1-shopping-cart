import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  //const [products, setProducts] = useState(data);
  /* const [cart, setCart] = useState([]);

  const addItem = (item) => {
    //console.log(item);
    setCart([...cart, item]);
    //console.log(cart);
    // verilen itemi sepete ekleyin
  }; */

  return (
    <div className="App">
      <Navigation />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
  );
}

export default App;
