import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <div>
      {/* Parent container for vertical stacking */}
      <div className="floating_buttons_container">
        
        {/* WhatsApp Floating Button */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/8867739948"
          className="floating_whatsapp_btn"
        >
          <div className="contact_icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <p className="text_icon">WhatsApp Us</p>
        </a>

        {/* Call Floating Button */}
        <a
          href="tel:+1234567890"
          className="floating_call_btn"
        >
          <div className="call_icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <p className="text_icon">Call Us</p>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
