import React, { useState, useEffect } from 'react';

const ProductListApiVisibleTillLimitedTime = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showProducts, setShowProducts] = useState(true);  // New state to control display after 10 minutes

  // Fetch the products when the component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(
        (data) => {
          setProducts(data.products); // Assuming the products are inside `data.products`
          setLoading(false);

          // Hide products after 10 minutes (600000 milliseconds)
          const timer = setTimeout(() => {
            setShowProducts(false);  // After 10 minutes, hide the products
          }, 600000);

          // Cleanup timer when component is unmounted or when fetch is complete
          return () => clearTimeout(timer);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!showProducts) {
    return <div>The product data is going to visible till limited time</div>;
  }

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

export default ProductListApiVisibleTillLimitedTime;
