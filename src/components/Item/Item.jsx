import React, { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToBuyAction } from "../../store";
import "./Item.css";

export function Item({ id, el, description, image, title, rating, price }) {
  const items = useSelector((state) => state.items);
  const bucketLust = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  // const [clicker, setClicker] = useState(true);

  function addToBucket(e) {
    if (!bucketLust.find((bucket) => el.id === bucket.id)) {
      dispatch(setToBuyAction([el]));
      // setClicker(!clicker);
    }
  }

  useEffect(() => {
    localStorage.setItem("bucket", JSON.stringify(bucketLust));
  }, [bucketLust]);

  return (
    <div className="item" id={`${id}`}>
      <img className="item__illustration" src={image} alt="" />
      <div className="item__descr-container">
        <h2>{title}</h2>
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
