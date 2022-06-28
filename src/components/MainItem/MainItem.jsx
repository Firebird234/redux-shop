import "./MainItem.css";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { resetStateAction } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../store/asyncAct/getItem";

export function MainItem({ image, title, price, id }) {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  function onItem() {
    dispatch(getItem(id));
    redirect(`/products/${id}`);
  }

  return (
    <div className="mainItem" onClick={onItem}>
      <img src={image} className="mainItem__pic" alt="item photo" />
      <div className="mainItem__container">
        <p className="mainItem__title">{title}</p>
        <span className="mainItem__price">от {price}$</span>
      </div>
    </div>
  );
}
