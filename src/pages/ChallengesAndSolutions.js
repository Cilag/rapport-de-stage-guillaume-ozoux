import React from 'react';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct

const ChallengesAndSolutions = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-40 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/connaissances-mobilisees"  // Change this to the actual previous article route
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">Les difficultés éventuelles rencontrées & les solutions apportées</h1>
        <Link
          to="/competences-acquises"  // Change this to the actual next article route
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="max-w-2xl p-8 bg-[#4A5A72] text-[#E0E1DD] rounded-lg">
        <p className="text-lg">
          Au cours de mon stage, j’ai rencontré plusieurs difficultés, principalement lors de la création d’un script PowerShell pour l'audit des GPOs. L’un des défis majeurs était de garantir que le script puisse être validé avec un certificat sans compromettre la sécurité des Active Directories. Pour y remédier, j’ai recherché des pratiques sécurisées et mis en place un environnement de test sur des VMs pour valider le script. La configuration des environnements virtuels a aussi été complexe, nécessitant une attention particulière à la compatibilité et aux ressources. J’ai surmonté cela en suivant les meilleures pratiques et en vérifiant les configurations rigoureusement. L’optimisation du script, notamment l’intégration des expressions régulières (RegEx), a nécessité des ajustements continus, que j’ai abordés en utilisant des outils de test et en documentant les problèmes rencontrés. Enfin, pour assurer une bonne communication et coordination avec mon maître de stage, j’ai planifié des réunions régulières et maintenu une documentation détaillée. Ces démarches ont permis de résoudre efficacement les problèmes et d’atteindre des objectifs du stage.
        </p>
      </div>
    </div>
  );
}

export default ChallengesAndSolutions;
