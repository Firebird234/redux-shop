import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import Logo from "../../images/Logo.PNG";
import Like from "../../images/Like.svg";
import noLike from "../../images/noLike.png";
import Basket from "../../images/Basket.svg";
import Loopa from "../../images/Loopa.svg";
import { useNavigate } from "react-router-dom";
import useFormValidaion from "../../hooks/Validation";
import { useDispatch, useSelector } from "react-redux";

export function SearchForm({ setRenderedItems }) {
  const { resetForm, values, errors, isValid, handleChange, setValues } = useFormValidaion();
  const items = useSelector((state) => state.allItems);
  const loggedIn = useSelector((state) => state.loggedIn);

  const navigate = useNavigate();
  const [position, setPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  });

  function handlePosition() {
    window.scrollY > 32 ? setPosition(true) : setPosition(false);
  }

  function redirect() {
    navigate("/bucket");
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate("/search");
    let searchCards = items.filter((el) => {
      console.log(el);
      return el.title.toLowerCase().includes(values["Search"].trim().toLowerCase());
    });
    console.log(items);
    setRenderedItems(searchCards);
  }

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <form onSubmit={handleSearch} className={`searchForm ${position && "searchForm_sticky"}`}>
      <a href="#" onClick={() => navigate("/main")}>
        <img className="searchForm__logo" src={Logo} alt="Logo" />
      </a>
      <div className="searchForm__input-container">
        <input className="searchForm__input" type="text" name="Search" onChange={handleChange} />
        <img className="searchForm__loopa" src={Loopa} alt="lopa" />
      </div>

      <div className="searchForm__container">
        {loggedIn && <div>ЗАДАЧИ</div>}
        <div className="searchForm__basket">
          <span className="searchForm__button" onClick={redirect}>
            Корзина
          </span>
          <img className="searchForm__img" src={Basket} alt="Busket" />
        </div>
        <button className="searchForm__signIn" onClick={handleSignIn} type="button">
          Войти
        </button>
        <div className="searchForm__chosen">
          <span className="searchForm__button">Избранное</span>
          <img className="searchForm__like" src={noLike} alt="like button" />
        </div>
      </div>
    </form>
  );
}
