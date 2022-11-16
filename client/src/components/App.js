import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Purchases from "../pages/Purchases";
import NavBar from "../components/NavBar"
import Checkout from "../pages/Checkout";

function App() {
  const [buyer, setBuyer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setBuyer(buyer));
      }
    });
  }, []);

  if (!buyer) return <Login onLogin={setBuyer} />;

  return (
    <>
      <NavBar buyer={buyer} setBuyer={setBuyer} />
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Home buyer={buyer}/>
          </Route>

          <Route path="/cart">
            <Cart buyer={buyer}/>
          </Route>

          <Route path="/purchases">
            <Purchases buyer={buyer} />
          </Route>

          <Route path="/checkout">
            <Checkout buyer={buyer} />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default App;