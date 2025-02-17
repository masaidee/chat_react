import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import user from '../../src/img/user.png';
import key from '../../src/img/key.png';
import '../../src/style.css';
import '../../src/style-color.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Register successful!");
      navigate("/");
    } catch (error) {
      alert("Register failed: " + error.message);
    }
  };

  return (
    <div className="justify-items-center ">
      <div className="justify-items-center p-10 w-500 bg-dark-aqua">
        <h2 className="p-10">Register</h2>
        <div className="">
          <div className="input-container">
          <img src={user}  alt="Password Icon" className="input-icon"/>
          <input className="p-10" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <br />
          <div className="input-container">
            <img src={key} alt="Password Icon" className="input-icon"/>
            <input className="p-10" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          <div className="jus-center">
          <br />
          <button type="button" className="w-150 h-30 mt-20" onClick={handleRegister}>Login</button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Register;
