import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductList from "./ProductList";
import LoginPage from "./components/LoginPage";
import ProductDetails from './components/ProductIndividualDetails'
function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>

        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
