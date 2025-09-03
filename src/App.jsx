import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SpeciesDirectory from './pages/SpeciesDirectory';
import EndangeredSpecies from './pages/EndangeredSpecies';
import InteractiveMap from './pages/InteractiveMap';
import ClimateZones from './pages/ClimateZones';
import BiodiversityHotspots from './pages/BiodiversityHotspots';
import NaturalHazards from './pages/NaturalHazards';
import CropCalendar from './pages/CropCalendar';
import SeasonalGuide from './pages/SeasonalGuide';
import SubmitObservation from './pages/SubmitObservation';
import BlogResources from './pages/BlogResources';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species-directory" element={<SpeciesDirectory />} />
          <Route path="/endangered-species" element={<EndangeredSpecies />} />
          <Route path="/interactive-map" element={<InteractiveMap />} />
          <Route path="/climate-zones" element={<ClimateZones />} />
          <Route path="/biodiversity-hotspots" element={<BiodiversityHotspots />} />
          <Route path="/natural-hazards" element={<NaturalHazards />} />
          <Route path="/crop-calendar" element={<CropCalendar />} />
          <Route path="/seasonal-guide" element={<SeasonalGuide />} />
          <Route path="/submit-observation" element={<SubmitObservation />} />
          <Route path="/blog-resources" element={<BlogResources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

