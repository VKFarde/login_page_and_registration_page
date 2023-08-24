import "./passwordrecovery.css";
import React, { useState } from "react";
import Shopping from "../resource/shopping.jpg";
import OtpVarification from "./OtpVarification";
import { Link } from "react-router-dom";

function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <div className="img-pform-container">
          <div className="pimg-container">
            <img src={Shopping} alt="Shopping with konverge.ai" />
          </div>
          <div className="pform-container">
            <form onSubmit={handleSubmit} className="ff-container">
              <h2>Forget Password</h2>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link to="/passwordrecovery/otpvarification">
                <button type="submit">Reset Password</button>
              </Link>
            </form>
          </div>
        </div>
      ) : (
        <OtpVarification />
      )}
    </div>
  );
}

export default PasswordRecovery;
