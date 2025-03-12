import React from "react";
import "./Footer.css"; // Ensure this CSS file is in the correct directory
import pngLogo from './../assets/images/DJ_Png_HighResol.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Footer = () => {

  const navigate = useNavigate(); // Initialize useNavigate

const onAbout = () => {
    navigate("/AboutUs"); // Navigate to the Login page
  };
  // Function to navigate to the Login page
  const onClickContact = () => {
    navigate("/Contact"); // Navigate to the Login page
  };
  
  const OnClickPrivacy = () => {
    navigate("/Privacy"); // Navigate to the Login page
  };
  const onClickCareer = () => {
    navigate("/Career"); // Navigate to the Login page
  };
  const openLinkInNewTab = (path) => {
    window.open(path, "_blank");
  };
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <div className="">
      <footer className="bg-primary text-center text-lg-start text-white footer-section">
        {/* Grid container */}
        <div className="container p-4 footer-inner-container">
          {/* Grid row */}
          <div className="row my-4">
            {/* Column 1: Subscription Section */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="footer-left">
                <div className="parent-wrapper">
                  <div className="subscribe-wrapper">
                    <h4>Subscribe to Our Newsletter</h4>
                    <input
                      type="email"
                      name="email"
                      className="subscribe-input"
                      placeholder="Enter Your Email"
                    />
                    <div className="submit-btn">
                      Submit
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-unstyled d-flex flex-row justify-content-center mt-3">
                <li>
                  <a className="text-white px-2" href="#!">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white px-2" href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white ps-2" href="#!">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2: About Section */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About Dr Java</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                <a className="text-white" onClick={onAbout => openLinkInNewTab("/AboutUs")}> 
                    About Us
                </a>
                </li>
                <li className="mb-2">
                  <a  className="text-white"  onClick={onClickCareer => openLinkInNewTab("/Career")}>
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a  onClick={onClickContact => openLinkInNewTab("/Contact")} className="text-white">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a  onClick={OnClickPrivacy => openLinkInNewTab("/Privacy")} className="text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3: News Coverage */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">News Coverage</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    General Information
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    News Dossier
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4: Contact Section */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pe-2"></i>No. 35/24, PTG Complex Jayanagar 5th BlockBangalore - 560041 INDIA
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone pe-2"></i>
                    <a href="tel:+9188677399480" style={{ color: '#ffffff', textDecoration: 'none' }}onMouseEnter={(e) => (e.target.style.color = 'black')} 
                    onMouseLeave={(e) => (e.target.style.color = '#ffffff')} >918867739948</a>
                    {/* <a href="tel:+9188677399480" className="phone-link">918867739948</a> */}
                  </p>
                </li>
                <li>
                <p>
                  <i className="fas fa-envelope pe-2 mb-0"></i>
                  <a
                    href="mailto:doctorjavatechnologies@gmail.com"
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.color = 'black')} // Change color to black on hover
                    onMouseLeave={(e) => (e.target.style.color = '#ffffff')} // Change color back to white when hover ends
                  >
                    doctorjavatechnologies@gmail.com
                  </a>
                </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center p-3 footer-copyright">
          © 2023 - {currentYear} | Doctor Java Technologies | All Rights Reserved <br />
          Designed by&nbsp;&nbsp;
          <a className="text-light" href="#">
            Doctor Java Technologies
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
