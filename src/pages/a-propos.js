import React, { useRef, useEffect, useState } from 'react';
import ynovLogo from '../images/Capture_d_écran_2024-08-27_234713-removebg-preview.png'; // Ensure this path is correct
import '../App.css';
import '../tailwind.css';

function useInViewAnimation(animationClass) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, isInView ? animationClass : ''];
}

function Apropos() {
  const [slideInRef, slideInClass] = useInViewAnimation('animate-slideInDown');

  return (
    <div className="min-h-screen flex flex-col items-center text-[#2C3E50]">
      {/* Main Content */}
      <main className="w-full px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-mono font-bold mb-20 px-4 py-1 bg-[#34495E] text-[#E0E1DD] rounded-md animate-fadeIn">
          Guillaume OZOUX
        </h1>

        {/* Container for the logo and the text with triangle */}
        <div className="w-full flex justify-center items-center pl-20 mt-20 mb-20 relative">
          <img src={ynovLogo} alt="YNOV Campus" className="w-auto h-32 animate-fadeInLeft" />
          <p className="ml-4 pl-16 text-lg leading-relaxed text-left max-w-xl font-mono animate-fadeInRight">
            Bonjour et bienvenue sur mon blog professionnel ! Je m'appelle Guillaume OZOUX, étudiant en informatique au campus Ynov Bordeaux, actuellement en 2ème année de Bachelor spécialisé en infrastructure réseau et système.
          </p>
        </div>

        {/* Mon Parcours Section */}
        <section className="w-full max-w-3xl text-center mt-20 mb-20 font-mono text-[#E0E1DD] relative">
          <div className="w-full bg-[#34495E] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Mon Parcours</h2>
            <p className="text-lg leading-relaxed">
              Après avoir obtenu mon Baccalauréat général avec mention assez bien, en spécialités Sciences du numérique et de l'informatique ainsi que Sciences économiques et sociales, j'ai décidé de me spécialiser dans l'infrastructure réseau et système, un domaine qui m'a toujours fasciné par ses défis techniques et son importance cruciale dans notre monde connecté.
            </p>
          </div>
        </section>

        {/* Mes Expériences Professionnelles Section */}
        <section className="w-full max-w-3xl text-center mt-20 mb-20 font-mono">
          <h2 className="text-xl font-bold bg-[#5D6D7E] text-[#E0E1DD] py-2 px-4 mb-4 rounded-full p-6 inline-block">
            Mes Expériences Professionnelles
          </h2>
          <p ref={slideInRef} className={`text-lg leading-relaxed ${slideInClass}`}>
            En juin et juillet 2024, j'ai eu l'opportunité de réaliser un stage chez Cheops Technology, une expérience qui a marqué un tournant dans ma formation. Durant ce stage, j'ai travaillé sur la création de scripts PowerShell pour automatiser les configurations GPO, participé au déploiement d'environnements virtualisés dans leur showroom, et assisté lors des interventions d'infrastructure. Cette expérience m'a permis de mettre en pratique mes connaissances théoriques, d'acquérir de nouvelles compétences techniques, et de mieux comprendre les exigences d'un environnement professionnel.
          </p>
        </section>

        {/* Mes Compétences Section */}
        <section className="w-full max-w-3xl text-center mt-20 mb-20 font-mono relative">
          <h2 className="text-2xl font-bold mb-4">Mes Compétences</h2>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-[-50px] w-[20px] h-[20px] bg-[#ACB7C3] rounded-sm rotate-[45deg] animate-spin-slow"></div>
          <div className="absolute bottom-0 right-[-50px] w-[20px] h-[20px] bg-[#ACB7C3] rounded-sm rotate-[45deg] animate-spin-slow"></div>
          <p className="text-lg leading-relaxed">
            Au fil de mes études et de mes expériences, j'ai développé une solide expertise dans la configuration de services sous Linux, l'administration de serveurs Windows, et l'installation et la configuration de composants réseaux. Je maîtrise plusieurs outils et technologies tels que Docker, Vagrant, VirtualBox, VMware, GNS3, Ansible, ainsi que plusieurs langages de programmation dont Python, C#, JavaScript, et PHP.
          </p>
        </section>

      </main>
    </div>
  );
}

export default Apropos;
