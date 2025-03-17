import { useState } from "react";
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
    </div>
  );
};
export default HomePage;
