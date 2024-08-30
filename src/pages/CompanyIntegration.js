import React from 'react';
import image1 from '../images/Mur-dimage.jpg';
import image2 from '../images/CHEOPS-Technology-3.jpg';
import image3 from '../images/mise-en-lumiere-salle-de-conference.jpg';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct


const CompanyIntegration = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-20 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/competences-acquises"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">Mon intégration dans l’entreprise</h1>
        <Link
          to="/aspect-technique"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
        {/* Text Block */}
        <div className="max-w-lg p-6 bg-[#1B263B] text-white text-center rounded-lg mb-8 md:mb-0 animate-fadeIn">
          <p className="text-lg">
            Mon intégration dans l'entreprise a été marquée par une immersion progressive dans ses différentes divisions. Après une visite du site de Canéjan, où j’ai découvert les départements Cloud & Managed Services, Infrastructure et Réseau, Sécurité & Communications Unifiées, j’ai installé mon environnement de travail et débuté le développement d’un script PowerShell pour auditer les GPO. Les jours suivants, j'ai approfondi la création et l’optimisation de ce script, tout en participant à des réunions régulières avec mon maître de stage pour ajuster les objectifs du projet. J'ai également eu l’opportunité de visiter les locaux et de comprendre leurs infrastructures. Cette expérience m’a permis de développer des compétences techniques en PowerShell, en gestion des GPO, ainsi qu’en environnements virtualisés, tout en me familiarisant avec les processus internes de l’entreprise et les exigences de sécurité.
          </p>
        </div>

        {/* Image Block */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center md:ml-16 lg:ml-24 relative animate-fadeInLeft">
            <div className="bg-[#415A77] p-2 rounded-lg absolute -left-2 -top-2 w-full h-full" style={{ zIndex: 1 }}></div>
            <div className="relative" style={{ zIndex: 2 }}>
              <img src={image1} alt="Office Image 1" className="w-full md:w-64 h-auto rounded-lg" />
            </div>
          </div>
          <div className="flex justify-center md:mr-16 lg:mr-24 relative animate-fadeInLeft">
            <div className="bg-[#778DA9] p-2 rounded-lg absolute -right-2 -top-2 w-full h-full" style={{ zIndex: 1 }}></div>
            <div className="relative" style={{ zIndex: 2 }}>
              <img src={image2} alt="Office Image 2" className="w-full md:w-64 h-auto rounded-lg" />
            </div>
          </div>
          <div className="flex justify-center md:ml-16 lg:ml-24 relative animate-fadeInLeft">
            <div className="bg-[#2E4059] rounded-lg absolute -left-2 -top-2 w-full h-full" style={{ zIndex: 1 }}></div>
            <div className="relative" style={{ zIndex: 2 }}>
              <img src={image3} alt="Office Image 3" className="w-full md:w-64 h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyIntegration;
