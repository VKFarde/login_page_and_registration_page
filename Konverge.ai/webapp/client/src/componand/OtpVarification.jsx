import React, { useState } from "react";
import Shopping from "../resource/shopping.jpg";
import "./setpasswod.css";
import "./otpvarification.css";
import { Link } from "react-router-dom";

function OtpVarification() {
  const [isVerified, setIsVerified] = useState(true);
  const [otp, setOtp] = useState();
  const [conpassword, setConPassword] = useState("");
  const [Pass, setPass] = useState("");
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
  };

  const handleOtpSubmit = (e) => {};

  const confirmpassword = () => {
    setIsVerified(!isVerified);
  };
  return (
    <div>
      {isVerified ? (
        <div className="img-pform-container">
          <div className="pimg-container">
            <img src={Shopping} alt="Shopping with konverge.ai" />
          </div>
          <div className="pform-container">
            <form onSubmit={handleOtpSubmit} className="ff-container">
              <h2>Verification of OTP</h2>
              <label>OTP :</label>
              <input
                type="email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter a OTP"
              />
              <Link to="/passwordrecovery/otpvarification/setpasaword">
                <button type="submit" onClick={confirmpassword}>
                  Verify OTP
                </button>
              </Link>
            </form>
          </div>
        </div>
      ) : (
        <div className="img-from-container">
          <div className="img-container">
            <img src={Shopping} alt="Shopping with konverge.ai" />
          </div>
          <div className="password-form-container">
            <h2>Set Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="password">
                <lable>Enter a Password</lable>
                <input
                  type="Password"
                  placeholder="Password"
                  value={Pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <lable>Re-Enter a Password</lable>
                <input
                  type="password"
                  placeholder="Password"
                  value={conpassword}
                  onChange={(e) => {
                    setConPassword(e.target.value);
                  }}
                />
                <button type="submit">Confirm Password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpVarification;
