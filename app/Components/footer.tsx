'use client';

import WhatsAppFloatingButton from "./whatsapp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 flex flex-col items-center justify-center">
      <p className="text-gray-400 text-sm mb-2">
        Powered by Murad Raza
      </p>
     
      <WhatsAppFloatingButton/>
    </footer>
  );
};

export default Footer;
