// App.js
import React from 'react';
import './Other.css';
import './Feature.css';
import chatbot from './components/chatbot.jpg';
import diseaseanalysis from './components/diseaseanalysis.avif';
import doctorconsultation from './components/doctorconsultation.avif';
import janasevakendra from './components/janasevakendra.png';
import mood from './components/mood.avif';
import community from './components/community.jpg';
import personalized from './components/personalized.jpg';

function Other() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Welcome to Our Dermatologist App</h1>
        <p>Your trusted source for skin health</p>
      </header>

      <section className="features-grid">
        <div className="feature">
          <img src={personalized} alt="Personalized Tracking" className="feature-image" />
          <h2>Personalized Tracking</h2>
          <p>Track your skin health with personalized insights and recommendations.</p>
          <div className="rating">Rating: 4.5</div>
        </div>
        <div className="feature">
          <img src={mood} alt="Mood Tracking" className="feature-image" />
          <h2>Mood Tracking</h2>
          <p>Monitor your emotional well-being to understand its impact on your skin.</p>
          <div className="rating">Rating: 4.2</div>
        </div>
        <div className="feature">
          <img src={community} alt="Community" className="feature-image" />
          <h2>Community</h2>
          <p>Join our community to connect with others and share your skin health journey.</p>
          <div className="rating">Rating: 4.7</div>
        </div>
        <div className="feature">
          <img src={doctorconsultation} alt="Doctor Consultation" className="feature-image" />
          <h2>Doctor Consultation</h2>
          <p>Consult with experienced dermatologists for personalized guidance.</p>
          <div className="rating">Rating: 4.3</div>
        </div>
        <div className="feature">
          <img src={chatbot} alt="ChatBot" className="feature-image" />
          <h2>ChatBot</h2>
          <p>Get information about medications, dosages, and DIY treatments.</p>
          <div className="rating">Rating: 4.8</div>
        </div>
        <div className="feature">
          <img src={diseaseanalysis} alt="Disease Analysis" className="feature-image" />
          <h2>Disease Analysis</h2>
          <p>Learn about various skin diseases and their treatments.</p>
          <div className="rating">Rating: 4.2</div>
        </div>
        <div className="feature">
          <img src={janasevakendra} alt="Rural Area" className="feature-image" />
          <h2>Jana Seva Kendra</h2>
          <p>Access skin health resources in rural areas through Jan Seva Kendra and more.</p>
          <div className="rating">Rating: 4.8</div>
        </div>
      </section>
    </div>
  );
}

export default Other;
