import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowToTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Torna all'inizio della pagina"
            className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-logo hover:bg-logo-dark text-white shadow-lg flex items-center justify-center transition-colors duration-200 border-0"
        >
            <FaArrowUp className="text-lg lg:text-xl" />
        </button>
    );
};

export default ArrowToTop;
