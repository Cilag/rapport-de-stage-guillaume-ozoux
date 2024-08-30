import React from 'react';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct

const SkillsAcquired = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-40 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/difficultes-solutions"
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">Les compétences acquises</h1>
        <Link
          to="/Bilan"
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="max-w-2xl p-8 bg-[#8A9BAD] text-white rounded-lg">
        <p className="text-lg">
          Au cours de mon stage, j’ai développé des compétences clés en PowerShell, en gestion d’environnements Windows Server et en déploiement d’infrastructures virtualisées. J’ai conçu et optimisé des scripts PowerShell pour auditer les GPO, intégrant des techniques avancées telles que l’utilisation de regex et la validation par certificat. J’ai également configuré des machines virtuelles, géré des GPOs, et mis en place PowerShell Remoting avec WinRM. En parallèle, j’ai renforcé ma compréhension des infrastructures modernes et des services associés, documenté les processus techniques et rédigé des rapports de suivi. Ces expériences m’ont permis de maîtriser les aspects techniques et organisationnels du stage, tout en approfondissant mes connaissances en réseau, sécurité, et gestion des environnements virtualisés.
        </p>
      </div>
    </div>
  );
}

export default SkillsAcquired;
