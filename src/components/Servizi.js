import React from "react";

const Servizi = () => {
    return (
        <div className="sezione min-h-dvh lg:h-dvh">
            <h1 className="bg-logo text-white text-5xl lg:text-8xl">I Nostri Servizi</h1>
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 h-5/6 m-10 items-center justify-center gap-10 lg:p-5">
            <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Social Media Manager</h2>
                    <p className="text-base lg:text-lg">
                        Apertura e gestione periodica dei social network con pubblicazione di contenuti.
                    </p>
                </div>
                <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Siti Web</h2>
                    <p className="text-base lg:text-lg">
                        Realizzazione di siti web, blog, landing page con testi redatti in ottica SEO e SEM.<br></br>
                        Gestione e manutenzione periodica
                    </p>
                </div>
                <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Foto, Video e Grafica</h2>
                    <p className="text-base lg:text-lg">
                        Organizzazione e realizzazione di shooting fotografici e video con Fotografi professionisti e Videomaker.<br></br>
                        Realizzazione grafica digitale e cartacea: volantini, brochure, locandine e gadget.
                    </p>
                </div>
                <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Organizzazione Eventi</h2>
                    <p className="text-base lg:text-lg">
                        Ci occupiamo di eventi a 360º: ricerca location, moderatori e relatori, sponsorizzazioni e
                        partnership, richiesta permessi burocratici, allestimento, comunicazione e ufficio stampa
                    </p>
                </div>
                <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Consulenza Aziendale</h2>
                    <p className="text-base lg:text-lg">
                        Valutazione dell'andamento e redazione del piano di marketing.<br></br>
                        Sviluppo e implementazione strategie di marketing.<br></br>
                        Monitoraggio, misurazione e supporto.<br></br>
                        Lancio di nuovi prodotti e progetti.<br></br>
                    </p>
                </div>
                <div className="servizio shadow-xl bg-gray-300/75 rounded-lg p-10 lg:p-5 text-center h-80 lg:h-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-3xl m-4">Ufficio Stampa</h2>
                    <p className="text-base lg:text-lg">
                        Redazione di comunicati stampa, invio a mailing list, monitoraggio online e offline della brand reputation.<br></br>
                        Scrittura testi e articoli per il web e per la stampa.<br></br> Organizzazione di conferenze stampa.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Servizi;