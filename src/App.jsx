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
import Loader from "./components/Loader/Loader";
import { SerchList } from "./components/SerchList/SerchList";

function App() {
  const bucketList = useSelector((state) => state.bucket);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading);

  const [renderedItems, setRenderedItems] = useState([]);

  useEffect(() => {
    let bucketCash = JSON.parse(localStorage.getItem("bucket")) || [];
    bucketCash.length !== 0 &&
      bucketCash.forEach((el) => {
        el.key = el.id;
        dispatch(setToBuyAction(el));
      });
  }, []);

  // useEffect(() => {
  //   loggedIn && navigate("/main");
  // }, [loggedIn]);

  return (
    <div className="App">
      {loading && <Loader />}
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

        <Route
          path="/main"
          element={
            <>
              <Header />
              <SearchForm setRenderedItems={setRenderedItems} />
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
              <SearchForm setRenderedItems={setRenderedItems} />
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
              <SearchForm setRenderedItems={setRenderedItems} />
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
              <SearchForm setRenderedItems={setRenderedItems} />
              <ItemPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/search"
          element={
            <>
              <Header />
              <SearchForm setRenderedItems={setRenderedItems} />
              <SerchList renderedItems={renderedItems} />
              <Footer />
            </>
          }
        />

        <Route
          path="/"
          element={<ProtectedRoute redirectTo="/login" loggedIn={loggedIn} />}
        ></Route>
      </Routes>
      {/* <PopupWithForm /> */}
    </div>
  );
}

export default App;
