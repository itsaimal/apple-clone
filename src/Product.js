import React from "react";

import { useStateValue } from "./StateProvider";
import StarIcon  from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product bg-gray-50 rounded-3xl shadow-2xl">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><StarIcon/></p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button className="bgb" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;