import React from "react";
import { createContext, useState } from "react";
import fakeData from "../fakeData";
export const ProductContext = createContext();
export const ProductProvider = (props) => {
  //fake products
  const data = fakeData;
  const [products] = useState(data);
  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
