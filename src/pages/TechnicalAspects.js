import React from 'react';
import image1 from '../images/png-transparent-brand-artikel-market-price-csv-text-photography-logo-thumbnail-removebg-preview.png';
import image2 from '../images/PowerShell_Core_6.0_icon.png';
import image3 from '../images/png-transparent-active-directory-microsoft-azure-lightweight-directory-access-protocol-user-advertising-angle-cloud-computing-microsoft-removebg-preview.png';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct

const TechnicalAspects = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-40 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/integration"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">L’aspect technique de mes missions</h1>
        <Link
          to="/connaissances-mobilisees"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <img src={image1} alt="CSV Icon" className="w-24 h-24 animate-bounceDown" />
        <img src={image2} alt="PowerShell Icon" className="w-24 h-24 animate-bounceDown" />
        <img src={image3} alt="PowerShell Icon" className="w-24 h-24 animate-bounceDown" />
      </div>
      <div className="max-w-2xl mt-8 p-8 bg-[#2D3E50] text-white rounded-lg">
        <p className="text-lg">
          Durant mon stage, j’ai été impliqué dans plusieurs missions techniques. J’ai conçu et optimisé des scripts PowerShell pour automatiser l'audit des Group Policy Objects (GPO), en intégrant des fonctions RegEx et en assurant la signature des scripts avec un certificat pour maintenir un niveau de sécurité élevé. J’ai également déployé et configuré des environnements virtualisés en mettant en place des machines virtuelles pour tester ces scripts, y compris la configuration de PowerShell Remoting avec WinRM pour faciliter l’exécution à distance. En parallèle, j’ai assuré une documentation détaillée des étapes de développement et des configurations, tout en apportant mon assistance lors d’interventions système à l'agence de Bordeaux, contribuant ainsi à la résolution de problèmes techniques et à la mise en place des projets.
        </p>
      </div>
    </div>
  );
}

export default TechnicalAspects;
