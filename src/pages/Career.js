// Careers.js
import React from 'react';
import './Career.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jobOpenings = [
  {
    title: 'Java Full-Stack Developer',
    location: 'Bangalore',
    type: 'Full-time',
    description: 'Build scalable Java applications with a focus on full-stack development.',
    link: '#apply-now',
  },
  {
    title: 'React Developer',
    location: 'Remote',
    type: 'Part-time',
    description: 'Develop responsive web interfaces using React.js and integrate APIs.',
    link: '#apply-now',
  },
  {
    title: 'Data Engineer Intern',
    location: 'Bangalore',
    type: 'Internship',
    description: 'Assist in data pipeline development and database optimization.',
    link: '#apply-now',
  },
];

const testimonials = [
  {
    name: 'Sarah',
    role: 'Java Developer',
    quote: 'Working at Doctor Java Technologies has been a transformative experience. The team fosters creativity and innovation.',
  },
  {
    name: 'Rahul',
    role: 'React Developer',
    quote: 'A fantastic place to grow and learn cutting-edge technologies with a supportive team.',
  },
];

const Career = () => {
  return (
    <>
    <Header/>

    <div class="main-container">
    <div className="career-container">
      {/* Hero Section */}
      <header className="hero">
        <h1 class="myh1">Join Our Team at Doctor Java Technologies!</h1>
        <p>Empowering innovation, driving excellence.</p>
        <button className="cta-button">View Open Positions</button>
      </header>

      {/* About Us */}
      <section className="about">
        <h2 class="myh2">About Us</h2>
        <p>
          At Doctor Java Technologies, we are revolutionizing software solutions
          with cutting-edge technologies and a focus on Java expertise. Our team
          is our biggest asset.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="why-work">
        <h2 class="myh2">Why Work With Us?</h2>
        <ul>
          <li>Work on cutting-edge Java technologies.</li>
          <li>Collaborative and innovative work environment.</li>
          <li>Competitive salaries and benefits.</li>
          <li>Career growth and learning opportunities.</li>
        </ul>
      </section>

      {/* Current Openings */}
      <section className="openings">
        <h2 class="myh2">Current Open Positions</h2>
        <div className="job-list">
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p>{job.description}</p>
              <a href={job.link} className="apply-button">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 class="myh2">Life at Doctor Java Technologies</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">- {testimonial.name}, {testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact">
        <h2 class="myh2">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <p>Have questions? Reach us at <a href="mailto:doctorjavatechnologies@gmail.com">doctorjavatechnologies@gmail.com</a></p>
      </section>
    </div>
    </div>


    <Footer/>
    </>
  );
};

export default Career;
