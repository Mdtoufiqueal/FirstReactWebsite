import React, { useState } from 'react';
import './AboutUs.css'; // CSS styles for the page
import Header from '../components/Header';
import Footer from '../components/Footer';
import image1 from './../assets/images/1.webp';
import image2 from './../assets/images/2.png';
import image3 from './../assets/images/DJ_Png_HighResol.png';
import image4 from './../assets/images/DJ_Black_HighResol.jpg';
import image5 from './../assets/images/logo.jpg';
const AboutUs = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // State to manage active category

//   const galleryImages = [
//     { id: 1, category: 'Software', src: {image1}, alt: 'Software Training' },
//     { id: 2, category: 'Placement', src: {image2}, alt: 'Placement Event' },
//     { id: 3, category: 'Training', src: {image3}, alt: 'Employee Training' },
//     { id: 4, category: 'Software', src: {image4}, alt: 'Software Development' },
//     { id: 5, category: 'Employees', src: {image5}, alt: 'Employee Team' },
//     { id: 6, category: 'Offices', src: 'path-to-image6.jpg', alt: 'Office Workspace' },
//   ];
const galleryImages = [
    { id: 1, category: 'Software', src: image1, alt: 'Software Training' },
    { id: 2, category: 'Placement', src: image2, alt: 'Placement Event' },
    { id: 3, category: 'Training', src: image3, alt: 'Employee Training' },
    { id: 4, category: 'Software', src: image4, alt: 'Software Development' },
    { id: 5, category: 'Employees', src: image5, alt: 'Employee Team' },
    { id: 6, category: 'Offices', src: 'path-to-image6.jpg', alt: 'Office Workspace' },
  ];
  
  // Filter gallery images based on active category
  const filteredImages = galleryImages.filter((image) =>
    activeCategory === 'All' || image.category === activeCategory
  );

  return (
    <>
    <Header/>
    <div className="about-us">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Company</h1>
          <p>We specialize in Software Training, Development, Placement, and more!</p>
          <button className="cta-btn">Learn More</button>
        </div>
      </header>

<section className="about-info py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Image Section */}
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src={image1}
          alt="Our Company"
          className="img-fluid rounded shadow-lg"
        />
      </div>
      {/* Right Text Section */}
      <div className="col-md-6">
        <h2 className="text-gold mb-4">About Us</h2>
        <p className="text-muted">
          Our company is dedicated to providing high-quality training and development in the field of
          software. We focus on upskilling individuals for a successful career in tech, with a team of
          experienced professionals, state-of-the-art resources, and a strong emphasis on practical learning.
        </p>
        <p className="text-muted">
          With a commitment to excellence and innovation, we ensure our clients and students receive the
          best support and tools for achieving their professional goals.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="gallery-section">
        <h2>Our Gallery</h2>

        {/* Pills Navigation */}
        <ul className="nav nav-pills mb-4">
          {['All', 'Software', 'Placement', 'Training', 'Employees', 'Offices'].map((category) => (
            <li className="nav-item" key={category}>
              <button
                className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Gallery */}
        <div className="gallery">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} className="img-fluid" />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
