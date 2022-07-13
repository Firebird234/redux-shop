import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./ItemPage.css";
import { getItem } from "../../store/asyncAct/getItem";
import { setToBuyAction } from "../../store/bucket";

export function ItemPage() {
  const item = useSelector((state) => state.item);

  const bucketLust = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  function addToBucket(e) {
    if (!bucketLust.find((bucket) => item.id === bucket.id)) {
      dispatch(setToBuyAction(item));
    }
  }

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div className="item-page">
      <img className="item-page__illustration" src={item.image} alt="" />
      <div className="item-page__descr-container">
        <h2 className="item-page__title">{item.title}</h2>
        <p className="item-page__description">{item.description}</p>
        <span className="item-page__rating">Рейтинг: {item.rating.rate}</span>
      </div>
      <div className="item-page__price-container">
        <spa className="item-page__price">Цена: {item.price} $</spa>
        <button className="item-page__buy-button" type="button" onClick={addToBucket}>
          Купить
        </button>
      </div>
    </div>
  );
}
