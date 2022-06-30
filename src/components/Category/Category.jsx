import "./Category.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Category({ name }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${name}`);
  }

  return (
    <div className="category" onClick={handleClick}>
      <h2 className="category__name">{name}</h2>
    </div>
  );
}
