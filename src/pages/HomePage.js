// Home.js
import React from 'react';
import ynovLogo from '../images/ynov-logo.png';
import cheopsLogo from '../images/cheops-logo.png';
import meloLogo from '../images/melo-logo.png';
import papierLogo from '../images/papier-logo.png';

function Home() {
  return (
    <main className="relative flex flex-col font-mono p-10 ">
      <div className="absolute" style={{ top: '300px', left: '150px' }}>
        <h1 className="text-4xl font-bold mb-6 leading-snug animate-fadeInLeft">
          Salut, moi c’est <br />Guillaume OZOUX
        </h1>
        <p className="text-xl mb-8 animate-fadeInDown">
          Etudiant en informatique spécialisé dans <br />
          l'infrastructure réseau et système au campus <br />
          YNOV Bordeaux.
        </p>
      </div>
      <div className="relative mt-6">
        <div
          className="bg-[#2E4059] p-6 rounded-lg flex items-center justify-center absolute"
          style={{
            top: '20px',
            left: '652px',
            width: '175px',
            height: '154px',
          }}
        >
          <img src={ynovLogo} alt="YNOV Campus" className="max-w-full h-auto" />
        </div>
        <div
          className="bg-[#1B263B] p-6 rounded-lg flex items-center justify-center absolute"
          style={{
            top: '140px',
            left: '868px',
            width: '400px',
            height: '400px',
          }}
        >
          <img src={cheopsLogo} alt="CHEOPS Technology" className="max-w-full h-auto" />
        </div>
        <div
          className="bg-[#778DA9] p-6 rounded-lg flex items-center justify-center absolute"
          style={{
            top: '40px',
            left: '1276px',
            width: '175px',
            height: '154px',
          }}
        >
          <img src={meloLogo} alt="Articles" className="w-200px h-auto" />
        </div>
        <div
          className="bg-[#415A77] p-6 rounded-lg flex items-center justify-center absolute"
          style={{
            top: '545px',
            left: '770px',
            width: '175px',
            height: '154px',
          }}
        >
          <img src={papierLogo} alt="Document" className="max-w-full h-auto" />
        </div>
      </div>
    </main>
  );
}

export default Home;
