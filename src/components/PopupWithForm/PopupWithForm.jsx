import React from "react";
import "./PopupWithForm.css";

export function PopupWithForm() {
  return (
    <div className="popupWithForm">
      <form className="popupWithForm__form">
        <h2 className="popupWithForm__title">
          Введите данные чтобы продолжить
        </h2>
        <label>
          <input
            placeholder="введите email"
            className="popupWithForm__input"
            type="text"
          />
        </label>
        <label>
          <input
            placeholder="введите пароль"
            className="popupWithForm__input"
            type="text"
          />
        </label>
        <button className="popupWithForm__submit" type="submit">
          Войти
        </button>
        <button type="button" className="popupWithForm__close" />
      </form>
    </div>
  );
}
