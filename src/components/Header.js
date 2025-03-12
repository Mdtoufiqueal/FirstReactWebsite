import React from "react";
import "./Header.css";
import logo from "./../assets/images/logo.jpg"; // Replace with your logo path
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation



const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the Login page
  const onSignUp = () => {
    navigate("/SignUp"); // Navigate to the Login page
  };
  const onUpdate = () => {
    navigate("/Update"); // Navigate to the Login page
  };
  const onHome = () => {
    navigate("/"); // Navigate to the Login page
  };

  const onContact = () => {
    navigate("/Contact"); // Navigate to the Login page
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" onClick={onHome}>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                <button type="button" class="btn btn-outline-dark">LMS</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <button type="button" class="btn btn-outline-dark">Articles</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <button type="button" class="btn btn-outline-dark" onClick={onSignUp}>LogIn/Signup</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <button type="button" class="btn btn-outline-dark" onClick={onUpdate}>Update</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
