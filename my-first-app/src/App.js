import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductList from "./ProductList";
function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
