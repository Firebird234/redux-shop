import React, { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, decreaseQuantity, deleteItem, setToBuyAction } from "../../store";
import "./BucketItem.css";
import bucket from "../../images/bucket.svg";

export function BucketItem({ id, el, description, image, title, rating, price, quantity }) {
  const items = useSelector((state) => state.items);
  const bucketLust = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("bucket", JSON.stringify(bucketLust));
  }, [bucketLust]);

  function increaseQuantity() {
    dispatch(addQuantity({ id: id, quantity: quantity }));
  }

  function desreaseQuantity() {
    quantity === 1
      ? deleteBucketItem()
      : dispatch(decreaseQuantity({ id: id, quantity: quantity }));
  }

  function deleteBucketItem() {
    console.log(localStorage.getItem("bucket"));
    dispatch(deleteItem({ id: id, quantity: quantity }));
  }
  return (
    <div className="bucketItem" id={`${id}`}>
      <img className="bucketItem__illustration" src={image} alt="" />
      <div className="bucketItem__descr-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Рейтинг: {rating}</span>
      </div>
      <div className="bucketItem__price-container">
        <span className="bucketItem__price">{price} $</span>
        <div className="bucketItem__quantity">
          <div className="bucketItem__quantityDelete-button" onClick={desreaseQuantity}>
            <span></span>
          </div>
          <span>{quantity}</span>
          <div className="bucketItem__quantityAdd-button" onClick={increaseQuantity}>
            <span></span>
          </div>
        </div>
      </div>
      <div className="bucketItem__delete"></div>
    </div>
  );
}
