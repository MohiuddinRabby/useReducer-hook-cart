import React from "react";
import { createContext, useState } from "react";
import fakeData from "../fakeData";
export const ProductContext = createContext();
export const ProductProvider = (props) => {
  //fake products
  const data = fakeData;
  const [product, setProduct] = useState(data);
  return (
    <ProductContext.Provider value={[product,setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};
