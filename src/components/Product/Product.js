import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/ProductSlice";
import "./Product.css";

const Product = () => {
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product) || [];

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="product-container">
      <div className="photo-gallery">
        {products?.gallery?.map((pic, index) => {
          return (
            <div key={index} className="pic">
              <img src={pic.url} alt="" />
            </div>
          );
        })}
      </div>
      <div>
        <div className="product-details">
          <div className="title">
            <h3>{products.title}</h3>
          </div>
          <div className="price">
            <h3>
              Price: {"Rs. " + products?.price?.discounted}{" "}
              <del
                style={{
                  textDecoration: "line-through",
                  color: "black",
                  fontSize: "16px",
                }}
              >
                {"Rs. " + products?.price?.old}
              </del>
              <span style={{ color: "#e63946", marginLeft: "10px" }}>
                (50% Off)
              </span>
            </h3>
          </div>

          <div className="product-color">
            <h3>Color: {productColor}</h3>

            {products.variation?.props[0]?.values?.map((color, index) => {
              return (
                <img
                  onClick={() => setProductColor(color.name)}
                  key={index}
                  className="product-img"
                  src={color.image}
                  alt=""
                />
              );
            })}
          </div>

          <div className="product-size">
            <h3>Size: {productSize}</h3>
            <div className="size-wrapper">
              {products.variation?.props[1]?.values?.map((size, index) => {
                return (
                  <p onClick={() => setProductSize(size.name)} key={index}>
                    {size.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
