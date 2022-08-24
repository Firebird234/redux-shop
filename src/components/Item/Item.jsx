import React, { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToBuyAction } from "../../store/bucket";
import { getItem } from "../../store/asyncAct/getItem";
import "./Item.css";
import { BucketPopup } from "../BucketPopup/BucketPopup";
import { popupActive, popupDisabled } from "../../store/bucketPopup";

export function Item({ id, el, description, image, title, rating, price }) {
  const items = useSelector((state) => state.items);
  const bucketLust = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  const redirect = useNavigate();

  function addToBucket(e) {
    if (!bucketLust.find((bucket) => el.id === bucket.id)) {
      dispatch(setToBuyAction(el));
    }
    handleBuy();
  }

  function showItem() {
    dispatch(getItem(id));
    redirect(`/products/${id}`);
  }

  useEffect(() => {
    localStorage.setItem("bucket", JSON.stringify(bucketLust));
  }, [bucketLust]);

  function handleBuy() {
    dispatch(popupActive(true));
    setTimeout(() => {
      dispatch(popupDisabled(false));
    }, 1000);
  }

  return (
    <div className="item" id={`${id}`}>
      <BucketPopup />
      <img className="item__illustration" onClick={showItem} src={image} alt="" />
      <div className="item__descr-container">
        <h2 className="item__title" onClick={showItem}>
          {title}
        </h2>
        <p>{description}</p>
        <span>Рейтинг: {rating}</span>
      </div>
      <div className="item__price-container">
        <spa className="item__price">{price} $</spa>
        <button className="item__buy-button" type="button" onClick={addToBucket}>
          Купить
        </button>
      </div>
    </div>
  );
}
