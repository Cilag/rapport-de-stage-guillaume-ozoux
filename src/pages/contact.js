import React from 'react';

const Contact = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-20">Contact</h1>
      <div className="w-full max-w-6xl max-h-lvh bg-[#0a192f] text-[#E0E1DD] p-24 rounded-lg relative animate-slideInDown">
        {/* Decorative squares */}
        <div className="absolute top-4 left-4 grid grid-rows-2 grid-cols-2 gap-2">
          <div className="w-8 h-8 bg-[#778DA9] rounded-md"></div>
          <div className="w-8 h-8 bg-[#415A77] rounded-md"></div>
          <div className="w-8 h-8 bg-[#2E4059] rounded-md"></div>
        </div>
        <div className="absolute top-4 right-4 grid grid-rows-2 grid-cols-2 gap-2 rotate-90">
          <div className="w-8 h-8 bg-[#778DA9] rounded-md"></div>
          <div className="w-8 h-8 bg-[#415A77] rounded-md"></div>
          <div className="w-8 h-8 bg-[#2E4059] rounded-md"></div>
        </div>
        <div className="absolute bottom-4 left-4 grid grid-rows-2 grid-cols-2 gap-2 -rotate-90">
          <div className="w-8 h-8 bg-[#778DA9] rounded-md"></div>
          <div className="w-8 h-8 bg-[#415A77] rounded-md"></div>
          <div className="w-8 h-8 bg-[#2E4059] rounded-md"></div>
        </div>
        <div className="absolute bottom-4 right-4 grid grid-rows-2 grid-cols-2 gap-2 rotate-180">
          <div className="w-8 h-8 bg-[#778DA9] rounded-md"></div>
          <div className="w-8 h-8 bg-[#415A77] rounded-md"></div>
          <div className="w-8 h-8 bg-[#2E4059] rounded-md"></div>
        </div>

        {/* Main content */}
        <div className="text-left">
          <p className="text-3xl mb-4">
            N'hésitez pas m'envoyer un message pour plus d'information.
          </p>
          <p className="text-2xl">
            email : <a href="mailto:ozouxguillaume@gmail.com" className="underline">ozouxguillaume@gmail.com</a>
          </p>
          <p className="text-2xl mt-2">
            mes réseaux : 
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="underline ml-2">LinkedIn</a> / 
            <a href="https://github.com/Cilag/" target="_blank" rel="noopener noreferrer" className="underline ml-2">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
