import { useState } from "react";
// import LoginPage from "../LoginPage";
const HomePage = () => {
  const [count, setCount] = useState(0);
  // const navigate=useNavigate();
  const handleCountButton = () => {
    // navigate(LoginPage)
    setCount(count + 1);
  };
  return (
    <div>
      <h1> This is the landing page</h1>
      <button onClick={handleCountButton}>count+1</button>
      <p>Count: {count}</p>
    </div>
  );
};
export default HomePage;
