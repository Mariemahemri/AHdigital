'use client';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const localTime = new Date().toLocaleTimeString('fr-FR', {
    timeZone: 'Europe/Paris',
    hour12: false,
  });

  return (
    <footer className="bg-black text-white px-6 py-12 font-sans">
      {/* Ligne 1 : titre et email */}
      <div className="border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-5xl font-bold">Parlons-en.</h1>
        <a
          href="mailto:y.sdiri@chatflowai.co"
          className="text-lg mt-4 md:mt-0 text-white hover:underline"
        >
          <span className="text-white">automation</span>
          <span className="text-lime-200">@</span>
          <span className="text-white">ahdigital.tech</span>
        </a>
      </div>

      {/* Ligne 2 : réseaux sociaux */}
      <div className="mt-8 flex gap-6 text-white text-xl">
        <a href="https://www.linkedin.com/company/ahdigital-automation/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-200">
          <FaLinkedin />
        </a>
        <a href="https://web.facebook.com/people/Ahdigital/61570213799534/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-200">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/ahdigitalautomation" target="_blank" rel="noopener noreferrer" className="hover:text-lime-200">
          <FaInstagram />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=212636308953&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-lime-200">
          <FaWhatsapp />
        </a>
      </div>

      {/* Ligne 3 : copyright, nom, heure */}
      <div className="pt-8 text-sm text-white/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lime-200">© {currentYear}</span>
          <span>AHDIGITAL</span>
        </div>
        <div className="flex items-left gap-2">
          <span>Local time: {localTime} (CET)</span>
          <span className="w-2 h-2 rounded-full bg-lime-200 animate-pulse"></span>
        </div>
      </div>
    </footer>
  );
}
