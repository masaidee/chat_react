import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Link to="/login">Login</Link>
      <Link to="/Register">Lo</Link>
    </div>
  );
};

export default Home;
