import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ADDED from "../../images/ADDED.png";
import "./BucketPopup.css";

export function BucketPopup() {
  const popup = useSelector((state) => state.bucketPopup);

  return (
    <div className={`bucketPopup ${popup && "bucketPopup_visible"}`}>
      <h2>Товар добавлен в корзину</h2>
      <img className="bucketPopup__illustration" src={ADDED} alt="" />
    </div>
  );
}
