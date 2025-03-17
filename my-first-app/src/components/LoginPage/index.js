import HomePage from "../HomePage";
import {Link} from 'react-router-dom';

const LoginPage = () => {
  const user = "Gowri";
  return (
    <div>
      <h1>LoginPage</h1>
      <h2><Link to={'/home'}>Home Page</Link></h2>
      {/* <HomePage name={user} /> */}
    </div>
  );
};
export default LoginPage;
