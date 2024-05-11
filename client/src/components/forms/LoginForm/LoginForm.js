import { Link } from "react-router-dom";
import "./LoginForm.css";
import FlagImg from "../../../images/flag.png";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="details">
          <h4>Login</h4>
          <label className="login-label">Username</label>
          <input type="name" className="login-input" required />
          <label className="login-label">Password</label>
          <input type="password" className="login-input" required />
          <div className="buttons">
            <button className="login-button">
              <Link to="/homePage" className="login-links">
                Log in
              </Link>
            </button>
            <button className="signup-button">
              <Link to="/homePage" className="login-links">
                Create new account
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flag-img">
        <img src={FlagImg} alt="Flag" />
      </div>
    </div>
  );
}

export default LoginForm;
