import React, { useState } from 'react';
import './Eaushadi.css';
import { NavLink } from 'react-router-dom';

// Import the images
import eaushadi from './components/eaushadi.jpeg';
import img5 from './components/img5.jpg';
import img6 from './components/img6.webp';
import img7 from './components/img7.jpg';
import img8 from './components/img8.jpg';
import img9 from './components/img9.png';
import img10 from './components/img10.jpeg';
import img11 from './components/img11.jpeg';

const Eaushadi = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [recommendedTreatment, setRecommendedTreatment] = useState('');
  const [homeRemedies, setHomeRemedies] = useState('');
  const [showBuyButtons, setShowBuyButtons] = useState(false);

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
    setRecommendedTreatment('');
    setHomeRemedies('');
    setShowBuyButtons(false);
  };

  const handleSuggestTreatment = () => {
    // Implement logic to suggest treatment based on the selected disease
    // For simplicity, I'll provide static suggestions for all diseases.
    const suggestedRecommendedTreatment = 'Nalpamaradi Keram';
    const suggestedHomeRemedies = 'Triphala, turmeric, cardamom, and neem';

    setRecommendedTreatment(suggestedRecommendedTreatment);
    setHomeRemedies(suggestedHomeRemedies);
    setShowBuyButtons(true);
  };

  return (
    <div className="main-container">
    <div  className='image-container'>
    <img src={img6} alt="Image 9" />
    </div>
      <br/>
      <div id="container" className="custom-body">
        <h1 id="heading">Skin Disease Treatment</h1>
        <select id="diseaseSelect" value={selectedDisease} onChange={handleDiseaseChange}>
          <option value="">Select a Skin Disease</option>
          <option value="disease1">Acne</option>
          <option value="disease2">Pemphigus</option>
          <option value="disease3">Ichthyosis</option>
          <option value="disease4">Atopic Dermatitis</option>
          <option value="disease5">Pachyonychia Congenita</option>
          <option value="disease6">Alopecia Areata</option>
        </select>
        <button id="suggestButton" onClick={handleSuggestTreatment}>
          Suggest Treatment
        </button>

        {showBuyButtons && (
          <img id="treatmentImage" src={eaushadi} alt="Nalpamaradi Keram" />
        )}

        {recommendedTreatment && (
          <>
            <p className="titlesss">Recommended Treatment:</p>
            <div id="recommendedTreatment" className="treatment-info">
              <p>{recommendedTreatment}</p>
            </div>
          </>
        )}

        {homeRemedies && (
          <>
            <p className="titlesss">Home Remedies:</p>
            <div id="homeRemedies" className="treatment-info">
              <p>{homeRemedies}</p>
            </div>
          </>
        )}

        {showBuyButtons && (
          <div id="treatmentInstructions" className="treatment-info">
            <div className="steps-container">
              <p id="k">Treatment Steps:</p>
              <ol>
                <li>Apply the recommended treatment twice a day.</li>
                <li>Take a pinch of home remedies with water after meals.</li>
                <li>Avoid exposure to direct sunlight.</li>
                <li>Keep the affected area clean and dry.</li>
                <li>Consult a dermatologist for best results.</li>
              </ol>
            </div>
          </div>
        )}

        {showBuyButtons && (
          <div id="buyOptions" className="buy-options">
            <NavLink to="/buyonline">
              <button id="buyOnline" className="buy-online">
                Buy Online
              </button>
            </NavLink>
            <NavLink to="/maps">
              <button id="buyOffline" className="buy-offline">
                Buy Offline
              </button>
            </NavLink>
          </div>
        )}
      </div>
      {
        showBuyButtons && (
        <div className="image-container-front">
        <img src={img5} alt="Image 5" />
        
        <img src={img7} alt="Image 7" />
        <img src={img8} alt="Image 8" />   
        <img src={img10} alt="Image 10" />
        <img src={img11} alt="Image 11" />
      </div>
      )}
      
    </div>
  );
};

export default Eaushadi;
