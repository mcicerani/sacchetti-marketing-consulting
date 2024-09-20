import React, { useEffect } from "react";

const Loading = ({ onLoaded }) => {
    useEffect(() => {
        // Aggiungiamo un listener per il caricamento completo della pagina
        window.onload = () => {
            onLoaded(); // Avvisa il componente padre che la pagina è stata caricata
        };
        // Pulizia (facoltativa ma raccomandata)
        return () => {
            window.onload = null;
        };
    }, [onLoaded]);

    return (
        <div className="hero flex flex-col justify-center items-center h-dvh">
            <img
                src="logo.png"
                alt="logo"
                className="logo h-72 p-5 md:h-80 lg:h-96 animate-pulse-slow infinite"
            />
        </div>
    );
};

export default Loading;
