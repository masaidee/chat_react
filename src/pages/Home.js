// import { Link } from "react-router-dom";
import '../../src/style.css';
import '../../src/style-color.css';
import Login from '../components/Login';
// import Register from '../components/Register';

const Home = () => {
  return (
    <div>
      <h1 className="cl-w bg-b p-10" >Welcome to the App</h1>
      <div className="">
        <Login />
      </div>
    


      {/* <Link className="" to="/register">Register</Link> */}

    </div>
  );
};

export default Home;
