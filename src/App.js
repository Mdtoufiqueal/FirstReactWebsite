import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import Combined from './components/Combined';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing import
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import AboutUs from './pages/AboutUs';
import Update from './pages/Update';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Career from './pages/Career';

// import Testimonial from './pages/Testimonials';

function App() {
  return (
      // <HeroSection/>
      // <Combined/>
      // <Login/>
    <Router>  
      <Routes>
        {/* <Route path="/Login" element={<LandingPage/>} /> */}
        <Route path="/" element={<Combined/>} />
        {/* <Route path="/Login" element={<Login />} /> Route for Login page */} //AboutUs
        <Route path="/SignUp" element={<Login />} /> {/* Route for Sign Up page */}
        <Route path="/AboutUs" element={<AboutUs />} /> {/* Route for AboutUs page */}
        <Route path="/Update" element={<Update />} /> {/* Route for Update page */}
        <Route path="*" element={<PageNotFound />} />  
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Privacy" element={<PrivacyPolicy />} /> 
        <Route path="/Career" element={<Career />} /> 
      </Routes>
    </Router>

  );
}

export default App;
