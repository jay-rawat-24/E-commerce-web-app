import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({ id,title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket >>> ", basket);

   const addToBasket=() =>{
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        {/* <p>The lean startup</p> */}
        <p className="product_price">
        <strong>{title}</strong><br />
          <bold>₹</bold>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((__, i) => (
                <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt="loading"
      />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
