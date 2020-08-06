import React from "react";

const Product = (props) => {
  const { name, price, img } = props.products;
  return (
    <div className="py-5">
      <img
        src={img}
        className="img-fluid"
        style={{ width: "200px", height: "200px" }}
        alt=""
      />
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
      <button className="btn btn-info">Add to cart</button>
    </div>
  );
};

export default Product;
