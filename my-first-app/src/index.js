import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 import App from './App';
import ProductList from "./ProductList/index";
// import reportWebVitals from './reportWebVitals';
import ProductListApiVisibleTillLimitedTime from "./ProductListApiVisibleTillLimitedTime/index";
import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ProductList />
    <ProductListApiVisibleTillLimitedTime />
    <HomePage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
