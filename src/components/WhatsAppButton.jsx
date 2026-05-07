import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSiteData } from "../sanity/SanityContext";

const WhatsAppButton = () => {
    const { data } = useSiteData();
    const number = data?.siteSettings?.whatsappNumber || "393206030417";
    const message = encodeURIComponent(
        data?.siteSettings?.whatsappMessage || "Ciao! Vorrei ricevere informazioni sui vostri servizi."
    );

    return (
        <a
            href={`https://wa.me/${number}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contattaci su WhatsApp"
            className="fixed bottom-20 right-4 lg:bottom-28 lg:right-8 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center transition-colors duration-200"
        >
            <FaWhatsapp className="text-xl lg:text-2xl" />
        </a>
    );
};

export default WhatsAppButton;
