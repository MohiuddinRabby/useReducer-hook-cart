import React, { useContext } from "react";
import { ProductContext } from "../../global/ProductContext";
import Product from "../Product/Product";

const Shop = () => {
  const [product, setProduct] = useContext(ProductContext);
  console.log(product);
  return (
    <div className="container py-5">
      <div className="row">
        {product.map((products) => (
          <div key={products.id} className="col-md-4 py-2">
            <Product products={products}></Product>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
