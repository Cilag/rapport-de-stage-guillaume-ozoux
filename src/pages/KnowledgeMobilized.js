import React from 'react';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct

const KnowledgeMobilized = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-40 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/aspect-technique"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">Les connaissances mobilisées lors de mes missions</h1>
        <Link
          to="/difficultes-solutions"
        >
            <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="max-w-2xl p-8 bg-[#384D68] text-[#E0E1DD] rounded-lg">
        <p className="text-lg">
          Pendant mon stage, j’ai mobilisé une gamme étendue de connaissances techniques, en particulier dans la création de scripts PowerShell pour auditer les GPOs, ce qui a impliqué une maîtrise approfondie de PowerShell, la gestion de la sécurité des scripts, et l’utilisation des expressions régulières pour traiter les données. J’ai également renforcé mes compétences en administration des environnements Windows Server et en virtualisation en déployant des environnements virtualisés, tout en participant à des interventions système et infrastructure. De plus, j’ai acquis des connaissances pratiques sur la gestion des datacenters et la documentation technique, ce qui m’a permis de contribuer efficacement à des projets complexes tout en optimisant les processus et en assurant une gestion sécurisée des configurations.
        </p>
      </div>
    </div>
  );
}

export default KnowledgeMobilized;
