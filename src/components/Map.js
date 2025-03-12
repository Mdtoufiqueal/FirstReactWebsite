import React from 'react';
import './Map.css'; // Import the CSS file

const Map = () => {
  return (

    <div className="container-fluid contact-section">
    <div className="row w-100">
      {/* Contact Form Section */}
      <div className="col-md-6 form-section bg-light">
        <h2 className="text-warning">Contact</h2>
        <h3 className="mb-4">Let's Chat</h3>
        <p className="text-muted">
          Voluptatibus quaerat laboriosam fugit non. Ut consequatur animi est
          molestias enim a voluptate totam natus modi debitis dicta.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning text-white">
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="col-md-6 map-section">
        {/* Replace with your Google Maps embed code */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509689!2d-122.4194154846812!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f4dc7ab%3A0x4a3d9e2eb097e51d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1697072891567!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "100%", border: 0 }}
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default Map;
