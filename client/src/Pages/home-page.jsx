import React, { useState, useEffect, useRef } from 'react';
import './home-page.css';
import doctorImage from '../assets/images/doctor.png'; 
import { Link } from 'react-router-dom';
import groupimage from '../assets/Images/group_profiles.png'; 
import Header from  "../Component/Header"

function HomePage() {
  const [specialistInput, setSpecialistInput] = useState('');
  const [filteredSpecialists, setFilteredSpecialists] = useState([]);
  const [showSpecialistOptions, setShowSpecialistOptions] = useState(false);

  const [locationInput, setLocationInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const specialistDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  const specialists = [
    "Cardiologist", "Cardiothoracic Surgeon", "Cardiovascular Specialist",
    "Dermatologist", "Neurologist", "Nephrologist", "Neurosurgeon",
    "Pediatrician", "Pulmonologist", "Psychiatrist", "Plastic Surgeon",
    "Orthopedic", "Ophthalmologist", "Oncologist", "Obstetrician",
    "Gynecologist", "Gastroenterologist", "Endocrinologist", "Dentist"
  ];

  const locations = [
    "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna",
    "Setif", "Tlemcen", "Bejaia", "Skikda", "Tizi Ouzou", "Mostaganem",
    "Chlef", "El Oued", "Biskra", "Ghardaia", "Ouargla", "Sidi Bel Abbes",
    "Relizane", "Tiaret", "Laghouat", "Jijel", "Saida", "Mascara",
    "Bouira", "Guelma", "Tindouf", "Adrar", "Tipaza", "Boumerdes"
  ];

  useEffect(() => {
    setFilteredSpecialists(specialists);
    setFilteredLocations(locations);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (specialistDropdownRef.current && !specialistDropdownRef.current.contains(event.target)) {
        setShowSpecialistOptions(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) {
        setShowLocationOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSpecialistInput = (e) => {
    const value = e.target.value;
    setSpecialistInput(value);

    const filtered = specialists.filter(s =>
      s.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredSpecialists(filtered);
    setShowSpecialistOptions(true);
  };

  const handleLocationInput = (e) => {
    const value = e.target.value;
    setLocationInput(value);

    const filtered = locations.filter(l =>
      l.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredLocations(filtered);
    setShowLocationOptions(true);
  };

  return (

    <>
    <Header/>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className='title'>Quality Healthcare at Your <br />Fingertips</h1>
          <p className="hero-text">
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.
          </p>
          <button className="book-button">
            Book appointment <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-image">
          <img src={doctorImage} alt="Doctor with stethoscope" />
        </div>
        <div className="group-image">
          <img src={groupimage} alt="Group" />
        </div>
      </div>

      {/* 🔍 Quick Search Section */}
      <div className="quick-search-container">
        <h2 className="quick-search-title">Quick Search</h2>
        <div className="search-inputs">
          <div className="search-field-container" ref={specialistDropdownRef}>
            <input
              type="text"
              className="search-field"
              placeholder="Doctors Specialist"
              value={specialistInput}
              onChange={handleSpecialistInput}
              onFocus={() => setShowSpecialistOptions(true)}
            />
            <span className="search-icon">⌕</span>
            {showSpecialistOptions && (
              <div className="dropdown-options scrollable">
                {filteredSpecialists.length ? (
                  filteredSpecialists.map((specialist, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setSpecialistInput(specialist);
                        setShowSpecialistOptions(false);
                      }}
                    >
                      {specialist}
                    </div>
                  ))
                ) : (
                  <div className="dropdown-item">No results found</div>
                )}
              </div>
            )}
          </div>

          <div className="search-field-container" ref={locationDropdownRef}>
            <input
              type="text"
              className="search-field"
              placeholder="Location"
              value={locationInput}
              onChange={handleLocationInput}
              onFocus={() => setShowLocationOptions(true)}
            />
            <span className="search-icon">⌕</span>
            {showLocationOptions && (
              <div className="dropdown-options scrollable">
                {filteredLocations.length ? (
                  filteredLocations.map((location, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setLocationInput(location);
                        setShowLocationOptions(false);
                      }}
                    >
                      {location}
                    </div>
                  ))
                ) : (
                  <div className="dropdown-item">No results found</div>
                )}
              </div>
            )}
          </div>

          <button className="search-button">Search</button>
        </div>
      </div>

      {/* 🩺 Featured Doctors Section */}
      <div className="featured-doctors-section">
        <h2>Suggested Doctors</h2>
        <p className='paragraph'>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctors-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="doctor-card">
              <div className="doctor-img-placeholder"></div>
              <h3>Dr. Example Name</h3>
              <p>Specialty: {item % 2 === 0 ? "Cardiologist" : "Dermatologist"}</p>
              <p>Location: {item % 3 === 0 ? "Algiers" : "Constantine"}</p>
              <button className="book-doctor-btn">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;