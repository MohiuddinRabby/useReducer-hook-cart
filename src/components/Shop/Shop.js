import React, { useContext } from "react";
import { ProductContext } from "../../global/ProductContext";
import { CartContext } from "../../global/CartContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  const handleAddtoCart = () => {
    console.log("handlecart clik");
  };
  return (
    <div className="container py-5">
      <div className="row py-5">
        {products.map((products) => (
          <div key={products.id} className="col-md-4 py-3">
            <img
              src={products.img}
              className="img-fluid"
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
            <h4>{products.name}</h4>
            <h5>Price: ${products.price}</h5>
            <button
              className="btn btn-info"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  id: products.id,
                  products,
                })
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
