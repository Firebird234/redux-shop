import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__contacts">8-800-555-35-35 (c 03:00 до 22:00)</p>
        <p className="footer__adress">
          <a href="#" className="footer__adress-link">
            Адреса магазинов в г.Москва
          </a>
        </p>
        <p className="footer__copyright">
          &copy; 2002—2022 Компания BestShop. Администрация Сайта не несет
          ответственности за размещаемые Пользователями материалы (в т.ч.
          информацию и изображения), их содержание и качество.
        </p>
      </div>
    </footer>
  );
}
