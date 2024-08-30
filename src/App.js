import './tailwind.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import Apropos from './pages/a-propos';
import Articles from './pages/Articles';
import ContactPage from './pages/contact';
import IntegrationPage from './pages/CompanyIntegration';  // Example page
import AspectTechniquePage from './pages/TechnicalAspects'; // Example page
import ConnaissancesPage from './pages/KnowledgeMobilized';  // Example page
import DifficultesPage from './pages/ChallengesAndSolutions';  // Example page
import CompetencesPage from './pages/SkillsAcquired';  // Example page
import BilanPage from './pages/Bilan';  // Example page

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#E0E1DD]">
        <header className="w-full p-4 flex justify-center items-center bg-[#E0E1DD]">
          <nav className="flex space-x-20 text-black">
            <Link to="/" className="text-black font-extrabold p-1 hover:bg-gray-400 rounded-full transition">Home</Link>
            <Link to="/about" className="text-black font-extrabold p-1 hover:bg-gray-400 rounded-full transition">A propos</Link>
            <Link to="/contact" className="text-black font-extrabold p-1 hover:bg-gray-400 rounded-full transition">Contact</Link>
            <Link to="/articles" className="text-black font-extrabold p-1 hover:bg-gray-400 rounded-full transition">Articles</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/integration" element={<IntegrationPage />} />
          <Route path="/aspect-technique" element={<AspectTechniquePage />} />
          <Route path="/connaissances-mobilisees" element={<ConnaissancesPage />} />
          <Route path="/difficultes-solutions" element={<DifficultesPage />} />
          <Route path="/competences-acquises" element={<CompetencesPage />} />
          <Route path="/bilan" element={<BilanPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
