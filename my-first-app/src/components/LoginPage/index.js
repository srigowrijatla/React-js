import HomePage from "../HomePage";

const LoginPage = () => {
  const user = "Gowri";
  return (
    <div>
      <h1>LoginPage</h1>
      
      <HomePage name={user} />
    </div>
  );
};
export default LoginPage;
