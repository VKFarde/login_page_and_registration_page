import React, { useState } from "react";
import "./login.css";
import Shopping from "../resource/shopping.jpg";
import Registration from "./Registration";
import PasswordRecovery from "./PasswordRecovery";
import Input from "./Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setactive] = useState(true);
  const [paGe, setPaGe] = useState(true);
  const [main, setMain] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  const openRegistration = () => {
    setactive(!active);
  };
  const openPasswordRecovery = () => {
    setPaGe(!paGe);
  };

  return (
    <div>
      {main ? (
        paGe ? (
          active ? (
            <div className="img-from-container">
              <div className="img-container">
                <img src={Shopping} alt="Shopping with konverge.ai" />
              </div>
              <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h2>Login</h2>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <Link to="/input">
                    <button
                      type="submit"
                      onClick={() => {
                        if (true) {
                          setMain(!main);
                        }
                      }}
                    >
                      Login
                    </button>
                  </Link>
                  <div className="login-recovery">
                    <Link to="/passwordrecovery">
                      <button type="reset" onClick={openPasswordRecovery}>
                        Forget Password?
                      </button>
                    </Link>
                    <Link to="/registration">
                      <button type="button" onClick={openRegistration}>
                        Create Account?
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <Registration />
          )
        ) : (
          <PasswordRecovery />
        )
      ) : (
        <Input />
      )}
    </div>
  );
};

export default Login;
