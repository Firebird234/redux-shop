import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { getItems, setToBuyAction } from "./store/bucket";
import { useDispatch, useSelector } from "react-redux";
import { Bucket } from "./components/Bucket/Bucket";
import { EmptyBucket } from "./components/EmptyBucket/EmptyBucket";
import { Categories } from "./components/Categories/Categories";
import { ItemPage } from "./components/ItemPage/ItemPage";
import RedForm from "./components/RedForm/RedForm";
import LogIn from "./components/LogIn/LogIn";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const bucketList = useSelector((state) => state.bucket);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    let bucketCash = JSON.parse(localStorage.getItem("bucket")) || [];
    bucketCash.length !== 0 &&
      bucketCash.forEach((el) => {
        el.key = el.id;
        dispatch(setToBuyAction(el));
      });
  }, []);

  useEffect(() => {
    loggedIn && navigate("/main");
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <>
              <RedForm />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <LogIn />
            </>
          }
        />

        <Route path="/" element={<ProtectedRoute redirectTo="/login" loggedIn={loggedIn} />}>
          <Route
            path="/main"
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
        </Route>
      </Routes>
      {/* <PopupWithForm /> */}
    </div>
  );
}

export default App;
