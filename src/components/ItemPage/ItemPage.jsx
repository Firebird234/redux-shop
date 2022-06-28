import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./ItemPage.css";

export function ItemPage() {
  // const params = useParams();
  const item = useSelector((state) => state.item);

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
        <button className="item-page__buy-button" type="button">
          Купить
        </button>
      </div>
    </div>
  );
}
