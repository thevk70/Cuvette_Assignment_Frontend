import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/common/navbar/navbar";
import Demo from "./components/public/Demo/Demo";
import JobForm from "./components/public/Interview/jobInterview";
import SignUp from "./components/public/userSignup/userSignup";
import UserVerification from "./components/public/userSignup/userVerify/userVerify";
import Login from "./components/public/userLogin/Login";
import SideBarMenu from "./components/common/Loader/SideBarMenu/SideBar";
import Toast from "./components/common/toast/Toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(true);
  const serverRes = useSelector((Store) => Store.user);
  const isVerify = useSelector((Store) => Store.status);
  console.log("isVerify: ", isVerify);

  useEffect(() => {
    setErrorMsg(serverRes.message);
  }, [serverRes.message]);

  useEffect(() => {
    if (errorMsg) {
      setToastVisible(true); // Show toast whenever errorMsg changes
    }
  }, [errorMsg]);

  const closeToast = () => {
    setToastVisible(false);
    setErrorMsg("");
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="app-container">
          {isLoggedIn && <SideBarMenu />}
          {errorMsg && (
            <Toast
              type={serverRes.type}
              message={errorMsg}
              visible={toastVisible}
              onClose={closeToast}
              duration={2000}
            />
          )}
          <Routes>
            <React.Fragment>
              <Route path="/" element={<SignUp />} />
              {isVerify && (
                <Route path="/verification" element={<UserVerification />} />
              )}
              <Route path="/login" element={<Login />} />
              {sessionStorage.getItem("token") != null && <Route path="/jobForm" element={<JobForm />} />}
              <Route path="/demo" element={<Demo />} />
            </React.Fragment>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
