import React from "react";
import { FaHeart, FaPhotoVideo, FaCalendar} from "react-icons/fa";  // Importa le icone correttamente
import { GrAnnounce } from "react-icons/gr";
import { TbWorldWww, TbBusinessplan  } from "react-icons/tb";
import Parallax from "./AnimationComponents/Parallax";


const Servizi = () => {
    const servizi = [
        {
            title: "Social Media Manager",
            description: "Apertura e gestione periodica dei social network con pubblicazione di contenuti.",
            icona: FaHeart  // Usa direttamente il componente icona
        },
        {
            title: "Siti Web",
            description: "Realizzazione di siti web, blog, landing page con testi redatti in ottica SEO e SEM. Gestione e manutenzione periodica.",
            icona: TbWorldWww
        },
        {
            title: "Foto, Video e Grafica",
            description: "Organizzazione e realizzazione di shooting fotografici e video con Fotografi professionisti e Videomaker. Realizzazione grafica digitale e cartacea: volantini, brochure, locandine e gadget.",
            icona: FaPhotoVideo
        },
        {
            title: "Organizzazione Eventi",
            description: "Ci occupiamo di eventi a 360º: ricerca location, moderatori e relatori, sponsorizzazioni e partnership, richiesta permessi burocratici, allestimento, comunicazione e ufficio stampa",
            icona: FaCalendar
        },
        {
            title: "Consulenza Aziendale",
            description: "Valutazione dell'andamento e redazione del piano di marketing. Sviluppo e implementazione strategie di marketing. Monitoraggio, misurazione e supporto. Lancio di nuovi prodotti e progetti.",
            icona: TbBusinessplan  
        },
        {
            title: "Ufficio Stampa",
            description: "Redazione di comunicati stampa, invio a mailing list, monitoraggio online e offline della brand reputation. Scrittura testi e articoli per il web e per la stampa. Organizzazione di conferenze stampa.",
            icona: GrAnnounce
        }
    ];

    return (
        <React.Fragment>
            <div className="sezione min-h-dvh">
                <h1 className="bg-logo text-white text-5xl lg:text-8xl">I Nostri Servizi</h1>
                <div className="grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:h-[80vh] m-10 items-center justify-center gap-10 lg:p-5">
                    {servizi.map((servizio, index) => (
                        <div key={index} className="servizio shadow-xl bg-white rounded-lg p-10 lg:p-5 text-center h-full flex flex-col items-center justify-center">
                            {/* Renderizza l'icona */}
                            <h2 className="text-3xl m-4 text-logo">{servizio.title}</h2>
                            <p className="text-base lg:text-lg text-gray-500">
                                {servizio.description}
                            </p>
                            <servizio.icona className="text-2xl mt-4 text-logo" />
                        </div>
                    ))}
                </div>
            </div>
            <Parallax image="parallax-2.png" height="50vh">
                <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/60 flex justify-center items-center lg:rounded-lg">
                    <h1 className="text-2xl lg:text-4xl text-white">Ascoltiamo</h1>
                </div>
                <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/60 flex justify-center items-center lg:rounded-lg">
                    <h1 className="text-2xl lg:text-4xl text-white">Analizziamo</h1>
                </div>
                <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/60 flex justify-center items-center lg:rounded-lg">
                    <h1 className="text-2xl lg:text-4xl text-white">Pianifichiamo</h1>
                </div>
                <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/60 flex justify-center items-center lg:rounded-lg">
                    <h1 className="text-2xl lg:text-4xl text-white">Progettiamo</h1>
                </div>
                <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/60 flex justify-center items-center lg:rounded-lg">
                    <h1 className="text-2xl lg:text-4xl text-white">Realizziamo</h1>
                </div>
            </Parallax>
        </React.Fragment>
    );
}

export default Servizi;
