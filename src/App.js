import React from "react";
import Nav from "./components/Nav/Nav";
import { ProductProvider } from "./global/ProductContext";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
