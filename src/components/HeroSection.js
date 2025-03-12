import React, { useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './HeroSection.css';
import jumpBanner from './../assets/images/jump-start-banner.webp';
import jumpBannerr from './../assets/images/Jump-Start-Your-Career_banner.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Learn from './../assets/images/OurProcess/rb_305.png';
import Practice from './../assets/images/OurProcess/rb_434.png';
import GetHired from './../assets/images/OurProcess/rb_1596.png';

const logos = [
  "https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png",
  "https://www.svgrepo.com/show/303123/bmw-logo.svg",
  "https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png",
];

const testimonials = [
  {
    text: "Joining this institute was the best decision I made for my career. The faculty here are not just experts but also mentors who genuinely care about our growth.",
    name: "Arjun Reddy",
    role: "Software Engineer at Infosys",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "The structured curriculum and hands-on projects gave me the confidence to excel in my job interviews. I couldn't have done it without their guidance.",
    name: "Priya Sharma",
    role: "Data Analyst at TCS",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The practical approach to teaching here is outstanding. I gained not just theoretical knowledge but real-world skills that made me industry-ready.",
    name: "Vivek Patel",
    role: "Full Stack Developer at Wipro",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "The personalized attention and regular doubt-clearing sessions made a huge difference in my learning journey. Highly recommend this institute!",
    name: "Sanya Gupta",
    role: "UX Designer at Capgemini",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    text: "The projects and assignments here are top-notch. They mirror real-world challenges, which prepared me well for my job as a developer.",
    name: "Rohit Singh",
    role: "Backend Developer at Cognizant",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];


const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
   <div className="admission-banner container">
      <div className="banner-content">
        {/* Left Section */}
        <div className="banner-left" data-aos="fade-right">
          <h1 className="banner-title">Admissions Open</h1>
          <p className="banner-subtitle">
            Secure your future with world-class education. Limited seats available!
          </p>
          <button className="banner-btn">Join Us Now</button>
        </div>

        {/* Right Section */}
        <div className="banner-right" data-aos="fade-left">
          <img
            src="https://doctorjavatechnologies.com/images/logo-original-color.jpg"
            alt="Admissions Open"
            className="banner-image"
          />
        </div>
      </div>
    </div>


      {/* OUR COURSES Starts */}
      <div className="courses-section">
        <h2 className="courses-title title">Our Courses</h2>
        <div className="courses-container">
          {/* Card 1 */}
          <div className="course-card" data-aos="fade-up">
            <img
              src="https://doctorjavatechnologies.com/images/JavaJ2EE.jpg"
              alt="Full-Stack Java Course"
              className="course-img"
            />
            <h3 className="course-title">Full-Stack Java Course</h3>
            {/* <p className="course-description">
              Backend: Core Java, SQL, Spring Boot, Security, Cloud, DataJPA
              Frontend: HTML, CSS, JavaScript, Angular
              <br />
              etc.
            </p> */}
            <Button variant="primary"><i class="fa fa-eye" aria-hidden="true"></i> &nbsp; Brochure &nbsp; <i class="fa fa-download" aria-hidden="true"></i></Button>
          </div>
          {/* Card 2 */}
          <div className="course-card" data-aos="fade-up">
            <img
              src="https://doctorjavatechnologies.com/images/pythoncropped.png"
              alt="Full Stack Development"
              className="course-img"
            />
            <h3 className="course-title">Python for DataScience</h3>
            {/* <p className="course-description">
              Python Basics, Data Structures, File Handling and I/O, Object-Oriented Programming (OOP), Exception Handling, Modules and Packages, etc.

            </p> */}
            <Button variant="primary"><i class="fa fa-eye" aria-hidden="true"></i> &nbsp; Brochure &nbsp; <i class="fa fa-download" aria-hidden="true"></i></Button>

          </div>
          {/* Card 3 */}
          <div className="course-card" data-aos="fade-up">
            <img
              src="https://doctorjavatechnologies.com/images/wedev.png"
              alt="Data Science with Python"
              className="course-img"
            />
            <h3 className="course-title">Web Designing and Hosting</h3>
            <Button variant="primary"><i class="fa fa-eye" aria-hidden="true"></i> &nbsp; Brochure &nbsp; <i class="fa fa-download" aria-hidden="true"></i></Button>
          </div>
        </div>
      </div>
      {/* OUR COURSES ENDS */}


{/* Industries level hire from us Starts  */}
      <div class="container">
        {/* Industries level hire from us starts */}
        <div className="responsive-container" data-aos="slide-up">
          {/* Left Half */}
          <div className="left-half">
            Industry Leaders <br /> Hire From Us
          </div>
          {/* Right Half */}
          <div className="right-half">
            <p>
              Join our placement-linked programs and become ‘day one job-ready’ professionals
            </p>
            <div className="cta-container">
              <Button variant="primary" className="cta-button">
                Limited Seats, Join Us Today
              </Button>
            </div>
          </div>
        </div>
        {/* Industries level hire from us Ends */}
      </div>
      {/* Industries level hire from us Ends  */}


{/* Doctors way Starts */}


<section className="success-section container"  data-aos="slide-up">
      {/* Left Content */}
      <div className="success-content">
        <h2>Doctor Java Path to Success</h2>
        <p className="content-description">
          <b><i> Unlock Your Path to Success with Expert Guidance and Proven Strategies. </i></b>
          We Believe in Practical Learning, Expert Mentorship, and Real-World Experience to Help You Achieve Your Goals.
        </p>
        <ul className="points-list">
          <li>
            <i className="fa fa-check-circle"></i> Expert mentor-led guidance.
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Structured and systematic learning materials.
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Hands-on practical assignments with real-world experience.
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Personalized progress reviews with actionable insights.
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Mastery-focused content tailored to your journey.
          </li>
        </ul>
      </div>

      {/* Right Video Section */}
      <div className="success-video">
      <iframe
          src="https://www.youtube.com/embed/g4HDfqEWf6Y"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Doctor Ways to Success"
        />
      </div>
    </section>


       {/* doctors way ends */}


      {/* Testimonials Section */}
      <div className="testimonial-section" data-aos="fade-up">
        <h2 className="testimonial-title">Success stories from our learners</h2>
        <Carousel className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-wrapper">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-img-wrapper">
                  <img
                    src={testimonial.image}
                    alt={`testimonial-${index}`}
                    className="testimonial-img"
                  />
                </div>
                <div className="testimonial-person-info">
                  <p>
                    <b>{testimonial.name}</b><br />
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* Testimonials Ends */}


      


      {/* Hiring Parters Starts*/}

      <div className="hiring-partners-container" data-aos="fade-up">
        <div className="hiring-partners-content">
          <h2 className="hiring-partners-heading">Our Hiring Partners</h2>
          <div className="hiring-partners-slider">
            <div className="hiring-partners-items">
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/sx9bXn46/logo.png"
                  alt="Partner 1"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/4x3jfQ7P/logo1.png"
                  alt="Partner 2"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/SQWBDsb6/logo2.png"
                  alt="Partner 3"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/nLj57V1Q/logo3.png"
                  alt="Partner 4"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/zBTctd6z/logo4.png"
                  alt="Partner 5"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/25stxpH9/logo5.png"
                  alt="Partner 6"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/yYjwCbdW/logo6.png"
                  alt="Partner 7"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/NfBWVcQW/logo7.png"
                  alt="Partner 8"
                />
              </div>
              <div className="hiring-partner-item">
                <img
                  src="https://i.postimg.cc/zGP6VHTr/logo8.png"
                  alt="Partner 9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer is here */}
    </div>
  );
};

export default HeroSection;
