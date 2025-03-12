import React, { useState } from "react";
import "./Login.css"; // Ensure CSS has the updated styles
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToggle = () => {
    setIsLogin(!isLogin);
  };


  function onLogInClick(){
    
  }

  return (
    <>
    <Header/>
    <div className="sectBody">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                {/* Custom Switch */}
                <div className="custom-switch">
                  <span className={`switch-text ${isLogin ? "active" : ""}`}>
                    Log In
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={!isLogin}
                      onChange={handleSwitchToggle}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className={`switch-text ${!isLogin ? "active" : ""}`}>
                    Sign Up
                  </span>
                </div>

                {/* Card Wrapper */}
                <div className="card-3d-wrap mx-auto">
                  <div
                    className={`card-3d-wrapper ${
                      isLogin ? "" : "flipped"
                    }`}
                  >
                    {/* Login Form */}
                    <div className="card-front rounded-3">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="none"
                            />
                            <i className="input-icon fa fa-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="none"
                            />
                            <i className="input-icon fa fa-lock"></i>
                          </div>
                          <button onClick={onLogInClick} className="btn mt-4">Log In</button>
                        </div>
                      </div>
                    </div>

                    {/* Signup Form */}
                    <div className="card-back rounded-3">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="regname"
                              className="form-style"
                              placeholder="Your Name"
                              id="regname"
                              autoComplete="none"
                            />
                            <i className="input-icon fa fa-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="regemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="regemail"
                              autoComplete="none"
                            />
                            <i className="input-icon fa fa-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="regpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="regpass"
                              autoComplete="none"
                            />
                            <i className="input-icon fa fa-lock"></i>
                          </div>
                          <button className="btn mt-4">Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Card Wrapper */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
