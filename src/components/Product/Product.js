import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor, addSize, getProducts } from "../../store/ProductSlice";
import "./Product.css";

const Product = () => {
  const dispatch = useDispatch();

  const {
    products,
    skues,
    color,
    size,
    image,
    active,
    selectedSizeId,
    selectedColorId,
  } = useSelector((state) => state.product) || [];

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleAddColor = (product) => {
    return dispatch(addColor(product));
  };

  const handleAddSize = (size) => {
    return dispatch(addSize(size));
  };

  const matchedProduct = products?.variation?.skus?.find(
    (item) => item.props.toString() === skues.toString()
  );

  return (
    <div className="product-container">
      {color ? (
        <div className="photo-gallery2">
          <div className="pic2">
            <img src={image.image} alt="" />
          </div>
        </div>
      ) : (
        <div className="photo-gallery">
          {products?.gallery?.map((pic, index) => {
            return (
              <div key={index} className="pic">
                <img src={pic.url} alt="" />
              </div>
            );
          })}
        </div>
      )}

      <div>
        <div className="product-details">
          <div className="title">
            <h3>{products.title}</h3>
          </div>
          <div className="price">
            {color && size ? (
              <h3>
                Price: {"Rs. " + matchedProduct?.price?.discounted}{" "}
                <del
                  style={{
                    textDecoration: "line-through",
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  {"Rs. " + matchedProduct?.price?.old}
                </del>
                <span style={{ color: "#e63946", marginLeft: "10px" }}>
                  (50% Off)
                </span>
              </h3>
            ) : (
              <h3>Price: {"Rs. " + 0} </h3>
            )}
          </div>

          <div className="product-color">
            <h3>Color: {color}</h3>

            {products.variation?.props[0]?.values?.map((color, index) => {
              return (
                <img
                  onClick={() => handleAddColor(color)}
                  key={index}
                  className={
                    selectedColorId === color.id
                      ? "product-img2"
                      : "product-img"
                  }
                  src={color.image}
                  alt=""
                />
              );
            })}
          </div>

          <div className="product-size">
            <h3>Size: {size}</h3>
            <div className="size-wrapper">
              {products.variation?.props[1]?.values?.map((size, index) => {
                console.log(size.id);
                return (
                  <p
                    className={
                      size.id === selectedSizeId ? "shoe-size2" : "shoe-size"
                    }
                    onClick={() => handleAddSize(size)}
                    key={index}
                  >
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
