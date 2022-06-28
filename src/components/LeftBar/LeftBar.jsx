import React from "react";
import { useNavigate } from "react-router-dom";
import "./LeftBar.css";

export function LeftBar() {
  const navigate = useNavigate();

  function redirect(end) {
    navigate(end);
  }

  return (
    <div className="leftBar">
      <a className="leftBar__item" onClick={() => redirect("/categories/men's clothing")}>
        Мужская одежда
      </a>
      <a className="leftBar__item" onClick={() => redirect("/categories/women's clothing")}>
        Женская одежда
      </a>
      <a className="leftBar__item" onClick={() => redirect("/categories/jewelery")}>
        Ювелирные товары
      </a>
      <a className="leftBar__item" onClick={() => redirect("/categories/electronics")}>
        Электроника
      </a>
    </div>
  );
}
