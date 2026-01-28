import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function WhatsAppButton() {
 
  const whatsappNumber = "919876543210"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-[#2BBBAD] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
} 
