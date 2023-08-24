import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./componand/Input";
import Login from "./componand/Login";
import PasswordRecovery from "./componand/PasswordRecovery";
import Registration from "./componand/Registration";
import OtpVarification from "./componand/OtpVarification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/input" element={<Input />} />
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/passwordrecovery/otpvarification"
            element={<OtpVarification />}
          />
          <Route
            path="/passwordrecovery/otpvarification/setpasaword"
            element={<OtpVarification />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
