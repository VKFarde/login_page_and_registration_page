import React, { useState } from "react";
import "./registration.css";
import Login from "../componand/Login";
import Shopping from "../resource/shopping.jpg";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conform, setconform] = useState("");
  const [samePassword, setsamePassword] = useState(false);
  const [active, setActive] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const openlogin = () => {
    setActive(!active);
  };

  const handleSubmit = (e) => {
    if (samePassword) {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Submitted:", email, password);

      alert("You Sign Up Successfully");
      openlogin();
    } else {
      alert("You Enter a Password dont Match ");
      setPassword("");
      setconform("");
    }
  };
  const handlePasswordconformedChange = (e) => {
    setconform(e.target.value);
  };

  const checkthepasswords = () => {
    if (password === "" || conform === "") {
      alert("Enter a Valid Password");
      setPassword("mfsnf");
    }

    if (password === conform) {
      setsamePassword(!samePassword);
    }
  };

  return (
    <div>
      {active ? (
        <div className="img-regform-container">
          <div className="img-container">
            <img src={Shopping} alt="Shopping with konverge.ai" />
          </div>
          <div className="registration-form-container">
            <div className="sp">
              <h2>Sign Up</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Xyz@abc.nmp"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="Re-enter_password"
                  value={conform}
                  onChange={handlePasswordconformedChange}
                  placeholder="Re-Enter Passwords"
                />
              </div>
              <button type="submit" onClick={checkthepasswords}>
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Registration;
