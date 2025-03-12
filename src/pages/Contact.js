import React from 'react';
import './Contact.css'; // Import the CSS file
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Address</h2>
                    <span>No. 35/24, PTG Complex Jayanagar 5th Block</span>
                    <span>Bangalore - 560041 INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail / Phone Number</h2>
                    <span>
                      <a href="mailto:doctorjavatechnologies@gmail.com" className="email-link">
                        doctorjavatechnologies@gmail.com
                      </a>
                    </span>
                    <span>
                      <a href="tel:+9188677399480" style={{ color: '#999999', textDecoration: 'none' }}>
                        918867739948
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Office Time</h2>
                    <span>Mon - Thu 9:00 am - 4:00 pm</span>
                    <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Subject" name="subject" />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Write Your Message" name="message"></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124443.28968134298!2d77.50362794255447!3d12.917180689293284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae599d9481068d%3A0xe8eb1105d3601838!2s1st%20Floor%2C%20Doctor%20Java%20Technologies%2C%20PTG%20Complex%2C%2035%2F24%2C%2011th%20Main%20Rd%2C%20opp.%20to%20Raghavendra%20Swamy%20Mutt%2C%20Vishya%20Bank%20Colony%2C%205th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!3m2!1d12.9171936!2d77.58602979999999!5e0!3m2!1sen!2sin!4v1733259144065!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
