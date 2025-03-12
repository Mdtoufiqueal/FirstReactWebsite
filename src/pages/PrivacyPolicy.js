import React, { useState } from 'react';
import './PrivacyPolicy.css'; // External CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faExclamationCircle,
  faCookie,
  faShieldAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // State to manage active category

  return (
    <>
      <Header />
      <div className="privacy-policy-container">
        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-text">
            <h1>Welcome to Our Company</h1>
            <p>We specialize in Software Training, Development, Placement, and more!</p>
            <button className="cta-btn">Learn More</button>
          </div>
        </header>

        {/* Main Privacy Policy Content */}
        <div className="content-container">
          <h2 className="privacy-heading">Privacy Policy</h2>
          <div className="policy-section">
            {/* Introduction */}
            <div className="section">
              <strong>> Introduction:</strong>
              <p>Welcome to [Your Company Name]. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            </div>

            {/* Personal Information Section */}
            <div className="section">
              <strong>> Personal Information:</strong>
              <p>We may collect personally identifiable information, including:</p>
              <ul>
                <li>--> Name</li>
                <li>--> Email address</li>
                <li>--> Phone number</li>
                <li>--> Mailing address</li>
                <li>--> Payment information</li>
              </ul>
            </div>

            {/* Non-Personal Information Section */}
            <div className="section">
              <strong>> Non-Personal Information:</strong>
              <p>Includes browser name, device, operating system, internet providers, and other technical info.</p>
            </div>

            {/* How We Use Information */}
            <div className="section">
              <strong>> How We Use Your Information:</strong>
              <p>We use collected information to:</p>
              <ul>
                <li>--> Personalize your experience</li>
                <li>--> Improve our website</li>
                <li>--> Process transactions</li>
                <li>--> Send periodic emails related to your order</li>
              </ul>
            </div>

            {/* How We Protect Your Information */}
            <div className="section">
              <strong>> How We Protect Your Information:</strong>
              <p>We implement security measures to maintain the safety of your data. However, no data transmission over the Internet can be 100% secure.</p>
            </div>

            {/* Sharing Information Section */}
            <div className="section">
              <strong>> Sharing Your Information:</strong>
              <p>We share data with:</p>
              <ul>
                <li>--> Trusted service providers</li>
                <li>--> When necessary to comply with laws</li>
              </ul>
            </div>

            {/* Third Party Links Section */}
            <div className="section">
              <strong>> Third Party Links:</strong>
              <p>We have no responsibility for content or activity on third-party websites.</p>
            </div>

            {/* Your Rights Section */}
            <div className="section">
              <strong>> Your Rights:</strong>
              <p>Depending on your location, you may request:</p>
              <ul>
                <li>--> Access and copy of your data</li>
                <li>--> Rectification of inaccuracies</li>
                <li>--> Deletion of personal information</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="section">
              <strong>> Contact Us:</strong>
              <p>You can contact us at:</p>
              <ul>
                <li>--> Email: contact@yourcompany.com</li>
                <li>--> Phone: +1 (555) 123-4567</li>
                <li>--> Address: 123 Privacy Lane, Tech City</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
