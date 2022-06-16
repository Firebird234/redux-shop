import "./EmptyBucket.css";
import allien from "../../images/Allien.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export function EmptyBucket() {
  const navigate = useNavigate();

  function redirect(endpoint) {
    navigate(endpoint);
  }

  return (
    <div className="emptyBucket">
      <img src={allien} alt="spooky allien" className="emptyBucket__illustration" />
      <h2 className="emptyBucket__title">Корзина пуста</h2>
      <p className="emptyBucket__subtitle">
        Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском
      </p>
      <div className="emptyBucket__wrapper">
        <button
          type="button"
          className="emptyBucket__button emptyBucket__button_white"
          onClick={() => {
            redirect("/");
          }}
        >
          На главную
        </button>
        <button
          type="button"
          className="emptyBucket__button"
          onClick={() => {
            redirect("/categories");
          }}
        >
          В каталог
        </button>
      </div>
    </div>
  );
}
