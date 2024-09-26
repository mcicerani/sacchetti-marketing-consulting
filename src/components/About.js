import React from "react";
import Team from "./Team";

const About = () => {
    return (
        <div className="sezione lg:min-h-dvh">
            <h1 className="bg-logo text-white text-5xl lg:text-8xl">
                Agenzia
            </h1>
            <div className="grid lg:grid-cols-3 h-full divide-logo/25 divide-y-2 lg:divide-y-0 lg:divide-x-2 mt-5">
                <div className="flex flex-col justify-center p-10 ">
                    <h2 className="text-xl lg:text-3xl text-logo">
                        Chi siamo
                    </h2>
                    <p className="text-base lg:text-xl mt-5 lg:mt-10">
                        Professioniste del Marketing e della Comunicazione. Dal 2019, nella nostra
                        agenzia, aiutiamo aziende e professionisti a distinguersi nel mercato. Grazie a un mix di creatività 
                        e strategia, trasformiamo le idee in progetti concreti e di successo.
                    </p>
                </div>
                <div className="flex flex-col justify-center p-10">
                    <h2 className="text-xl lg:text-3xl text-logo">
                        La nostra mission
                    </h2>
                    <p className="text-base lg:text-xl mt-5 lg:mt-10">
                        Vogliamo mostrare agli imprenditori l’importanza di una strategia di comunicazione solida nell’era digitale. 
                        Crediamo che un brand vincente nasca da una comunicazione efficace, capace di raggiungere il pubblico 
                        giusto al momento giusto.
                    </p>
                </div>
                <div className="flex flex-col justify-center p-10">
                    <h2 className="text-xl lg:text-3xl text-logo">
                        Cosa facciamo
                    </h2>
                    <p className="text-base lg:text-xl mt-5 lg:mt-10">
                        Ascoltiamo le esigenze dei nostri clienti e, insieme a loro, creiamo piani su misura. Dalla gestione 
                        dei contenuti digitali alle campagne pubblicitarie, progettiamo soluzioni innovative che portano 
                        risultati concreti.
                    </p>                
                </div>
            </div>
            <Team/>
        </div>
    );
}

export default About;