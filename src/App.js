import React from "react";
import Nav from "./components/Nav/Nav";
import { ProductProvider } from "./global/ProductContext";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav></Nav>
      <ProductProvider>
        <Shop></Shop>
      </ProductProvider>
    </>
  );
}

export default App;
