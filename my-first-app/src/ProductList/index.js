import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../Services/ProductService";
import ProductDetails from "../components/ProductIndividualDetails";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h2>
            {/* <ProductDetails/> */}
            {/* <p>{product.description}</p>
            <p>Price: ${product.price}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
