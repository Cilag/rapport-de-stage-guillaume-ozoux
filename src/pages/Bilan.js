import React from 'react';
import { Link } from 'react-router-dom';
import flechegauche from '../images/Capture_d_écran_2024-08-29_193716-removebg-preview.png'; // Ensure this path is correct

const Bilan = () => {
  return (
    <div className="bg-[#E0E1DD] mt-20 flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="text-center mb-40 flex items-center justify-center animate-fadeInDown">
        <Link
          to="/aspect-technique"  // Replace with the actual route
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10" />
        </Link>
        <h1 className="text-2xl font-bold mx-4">Bilan de Mon Stage</h1>
        <Link
          to="/integration"  // Replace with the actual route
        >
          <img src={flechegauche} alt="fleche gauche" className="w-auto h-10 rotate-180" />
        </Link>
      </div>
      <div className="max-w-2xl p-8 bg-[#4A5D73] text-white rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          Ce stage m'a offert une occasion précieuse de mettre en pratique mes compétences théoriques acquises durant mes études. J'ai pu travailler sur divers projets qui ont non seulement renforcé mes capacités techniques mais aussi développé mes compétences en gestion de projet. Le travail en équipe avec des professionnels expérimentés m'a permis d'améliorer ma communication et ma capacité à collaborer efficacement. En outre, les défis rencontrés au cours du stage m'ont aidé à développer une approche plus rigoureuse et structurée face à la résolution de problèmes complexes.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          J'ai également acquis une meilleure compréhension des environnements de production, en particulier dans le domaine de l'infrastructure et de la sécurité des systèmes d'information. Cette expérience a solidifié ma décision de poursuivre une carrière dans ce domaine, tout en m'apportant des connaissances pratiques qui seront inestimables pour mes futurs projets.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          En conclusion, ce stage a été une étape cruciale dans mon développement professionnel. Il m'a préparé aux défis du monde du travail tout en m'offrant une vision claire des attentes et des exigences du secteur. Je suis désormais plus confiant dans mes capacités à contribuer efficacement à des projets complexes et à évoluer dans un environnement professionnel.
        </p>
      </div>
    </div>
  );
}

export default Bilan;
