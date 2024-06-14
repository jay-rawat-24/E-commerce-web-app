import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user},dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://printablegraphics.in/wp-content/uploads/2017/10/Amazon-India-print-ads-Great-Indian-Sale.jpg"
          alt="wait"
        />
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
      <div className="checkout_right">
       <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
