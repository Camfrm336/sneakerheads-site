import { useState, useEffect, Suspense } from "react";
import { BrowserRouter, json, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import chicago from "../images/chicagolostandfound.jpg";
import universityBlue from "../images/universityblue.jpg";
import darkMocha from "../images/darkmocha.jpg";
import diorOnes from "../images/dior1s.jpg";
import stageHaze from "../images/stagehaze.jpg";
import offWhiteUNC from "../images/offwhiteunc.jpg";
import pineGreen from "../images/pinegreen.jpg";
import courtPurple from "../images/courtpurple.jpg";
import travisScottMochas from "../images/travisscottmocha.jpg";
import CheckoutPage from "./CheckoutPage";

function App() {
  const LOCAL_STORAGE_KEY = "cartItems";
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [bagItems, setBagItems] = useState(0);

  const [total, setTotal] = useState(Number(localStorage.getItem("total")));

  const addToCartHandler = (shoe) => {
    setCart([...cart, shoe]);
    setTotal(total + shoe.price);
    localStorage.setItem("total", total.toString());
  };

  const createCartItem = (
    id = uuid(),
    src,
    name,
    quantity,
    price,
    shoeSize
  ) => {
    const cartItem = {
      id: id,
      src: src,
      name: name,
      quantity: quantity,
      price: price,
      shoeSize: shoeSize,
    };
    setCartItems([...cartItems, cartItem]);
  };

  const updateBagNumber = () => {
    setBagItems(cartItems.length);
  };

  const updateTotal = () => {
    const sum = cartItems.reduce((partialSum, a) => partialSum + a.price, 0);
    setTotal(sum);
  };

  const deleteCartItemHandler = (id, price) => {
    const newItemCart = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(newItemCart);
    setTotal(total - price);

    setBagItems(cartItems.length - 1);
  };

  useEffect(() => {
    localStorage.setItem("total", total.toString());
    updateTotal();
  }, [total]);

  useEffect(() => {}, [cart]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    updateBagNumber();
  }, [cartItems]);

  const [shoes, setShoes] = useState([
    {
      src: chicago,
      name: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
      price: 460,
    },
    {
      src: universityBlue,
      name: "AIR JORDAN 1 RETRO HIGH OG 'UNIVERSITY BLUE'",
      price: 400,
    },
    {
      src: darkMocha,
      name: "AIR JORDAN 1 RETRO HIGH OG 'DARK MOCHA'",
      price: 495,
    },
    {
      src: diorOnes,
      name: "DIOR X AIR JORDAN 1 HIGH",
      price: 7599,
    },
    {
      src: stageHaze,
      name: "AIR JORDAN 1 RETRO HIGH OG 'STAGE HAZE'",
      price: 231,
    },
    {
      src: offWhiteUNC,
      name: "OFF-WHITE X AIR JORDAN 1 RETRO HIGH OG 'UNC'",
      price: 2697,
    },
    {
      src: pineGreen,
      name: "AIR JORDAN 1 RETRO HIGH OG 'PINE GREEN 2.0'",
      price: 355,
    },
    {
      src: courtPurple,
      name: "AIR JORDAN 1 RETRO HIGH OG 'COURT PURPLE 2.0'",
      price: 358,
    },
    {
      src: travisScottMochas,
      name: "TRAVIS SCOTT X AIR JORDAN 1 RETRO HIGH OG 'MOCHA'",
      price: 1764,
    },
  ]);

  return (
    <BrowserRouter basename="/">
      <Header bagItems={bagItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              key={shoes.id}
              bagItems={bagItems}
              setBagItems={setBagItems}
              updateBagNumber={updateBagNumber}
              shoes={shoes}
              setShoes={setShoes}
              cart={cart}
              setCart={setCart}
              addToCartHandler={addToCartHandler}
              createCartItem={createCartItem}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              key={shoes.id}
              bagItems={bagItems}
              setBagItems={setBagItems}
              updateBagNumber={updateBagNumber}
              shoes={shoes}
              setShoes={setShoes}
              cart={cart}
              setCart={setCart}
              addToCartHandler={addToCartHandler}
              createCartItem={createCartItem}
              cartItems={cartItems}
              deleteCartItemHandler={deleteCartItemHandler}
              total={total}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
