import React from 'react';
import cheopsLogo from '../images/cheops-logo.png'; // Ensure this path is correct
import '../App.css';
import '../tailwind.css';
import { Link } from 'react-router-dom';

function Articles() {
  return (
    <div className="mt-10 flex flex-col items-center bg-[#E0E1DD]">

      {/* Main Content */}
      <main className="w-full max-w-3xl py-12 flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-20">Articles</h1>

        {/* Company Logo */}
        <div className="w-full flex justify-center mb-20">
          <div className="bg-[#1B263B] p-6 rounded-lg">
            <img src={cheopsLogo} alt="CHEOPS Technology" className="w-64 h-auto" />
          </div>
        </div>

        {/* Text Box */}
        <div className="w-full bg-[#6A7C96] text-[#E0E1DD] p-8 rounded-lg mb-8 text-lg leading-relaxed">
          <h2 className="text-2xl mb-4">présentation de l'entreprise</h2>
          <p>Cheops Technologie est une entreprise spécialisée dans l'intégration de solutions informatiques et la gestion des infrastructures IT. Fondée en 1998, Cheops Technologie se distingue par son expertise dans l'accompagnement des entreprises pour optimiser leur système d'information et leur performance. Nous offrons une large gamme de services, allant de la conception et l’implémentation de solutions IT jusqu’à leur maintenance et leur support technique.</p>
        </div>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Link to="/integration" className="block">
            <div className="bg-[#1B263B] text-[#E0E1DD] p-6 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Mon intégration dans l'entreprise
            </div>
          </Link>
          <Link to="/aspect-technique" className="block">
            <div className="bg-[#2D3E50] text-[#E0E1DD] p-6 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              L'aspect technique de mes missions
            </div>
          </Link>
          <Link to="/connaissances-mobilisees" className="block">
            <div className="bg-[#384D68] text-[#E0E1DD] p-6 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Les connaissances mobilisées lors de mes missions
            </div>
          </Link>
          <Link to="/difficultes-solutions" className="block">
            <div className="bg-[#4A5A72] text-[#E0E1DD] p-2 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Les difficultés éventuelles rencontrées & les solutions apportées
            </div>
          </Link>
          <Link to="/competences-acquises" className="block">
            <div className="bg-[#8A9BAD] text-[#E0E1DD] p-6 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Les compétences acquises
            </div>
          </Link>
          <Link to="/competences-acquises" className="block">
            <div className="bg-[#B0BCC7] text-[#E0E1DD] p-6 rounded-lg text-center text-2xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Bilan de mon stage
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Articles;
