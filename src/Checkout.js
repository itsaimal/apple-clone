import React from 'react'
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    return (
      <div className="checkout bgb flex justify-center">
        <div className=" mr-96 ">
        
  
          <div >
            <h3 className="">Hello, {user?.email}</h3>
            <h2 className="checkout__title ">Your shopping Basket</h2>
  
            {basket.map(item => (
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
  
        <div className="">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;