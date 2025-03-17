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
    {/* <ProductList /> */}
    {/* <ProductListApiVisibleTillLimitedTime />
    <HomePage /> */}
  </React.StrictMode>
);

