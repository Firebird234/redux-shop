import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { PopupWithForm } from "./components/PopupWithForm/PopupWithForm";
import { GetItems } from "./utils/Api";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { MeContext } from "../src/contexts/MeContext";
import { getItems, setToBuyAction } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "./store/asyncAct/goods";
import { Bucket } from "./components/Bucket/Bucket";
import { countBucket } from "./functions/countBucket";
import { EmptyBucket } from "./components/EmptyBucket/EmptyBucket";
import { Categories } from "./components/Categories/Categories";
import { ItemPage } from "./components/ItemPage/ItemPage";

function App() {
  const bucketList = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  useEffect(() => {
    let bucketCash = JSON.parse(localStorage.getItem("bucket")) || [];
    bucketCash.length !== 0 &&
      bucketCash.forEach((el) => {
        el.key = el.id;
        dispatch(setToBuyAction(el));
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SearchForm />
              <Main />
              <Footer />
            </>
          }
        />

        <Route
          path="/bucket"
          element={
            <>
              <Header />
              <SearchForm />
              {bucketList.length === 0 ? <EmptyBucket /> : <Bucket />}
              <Footer />
            </>
          }
        />

        <Route
          path="/categories"
          element={
            <>
              <Header />
              <Categories />
              <Footer />
            </>
          }
        />

        <Route
          path="/categories/:category"
          element={
            <>
              <Header />
              <SearchForm />
              <ItemsList />
              <Footer />
            </>
          }
        />

        <Route
          path="/products/:id"
          element={
            <>
              <Header />
              <SearchForm />
              <ItemPage />
              <Footer />
            </>
          }
        />
      </Routes>
      {/* <PopupWithForm /> */}
    </div>
  );
}

export default App;
