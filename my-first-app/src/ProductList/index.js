import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the products when the component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(
        (data) => {
          setProducts(data.products); // Assuming the products are inside `data.products`
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
