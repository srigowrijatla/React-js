import { useState } from "react";
import { Link } from "react-router-dom";
const HomePage = ({ name }) => {
  const [count, setCount] = useState(0);
  const handleCountButton = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> This is the landing page</h1>
      <h1>Welcome {name}</h1>
      <button onClick={handleCountButton}>count+1</button>
      <p>Count: {count}</p>
      <h2><Link to={'/products'}>Product list</Link></h2>
    </div>
  );
};
export default HomePage;
