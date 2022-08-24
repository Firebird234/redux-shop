import React from "react";
import { Route } from "react-router-dom";
import Geo from "../../images/Geo.svg";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__geo" src={Geo} alt="Go map" />
        <span>Москва</span>
      </div>

      <div className="header__container">
        <span>Покупателям</span>
        <span>Магазины</span>
        <span>Доставка</span>
      </div>

      <div className="header__container">
        <span>8-800-555-35-35</span>
      </div>
    </header>
  );
}
