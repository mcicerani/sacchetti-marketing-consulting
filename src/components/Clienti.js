import React, { useEffect, useRef } from "react";

const Clienti = () => {

    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            const clone = ul.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            ul.parentNode.appendChild(clone); // Append the clone directly to the parent
        }
    }, []);

    return (
        <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden h-32 lg:h-[50vh] [mask-image:_linear-gradient(to_right,transparent_0,_black_132px,_black_calc(100%-132px),transparent_100%)]">
            <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-2 lg:[&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
            >
                <li className="px-1"><img className="h-32 lg:h-64" src="1.svg" alt="In Salute" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="2.svg" alt="Diet Natural" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="3.svg" alt="Studio Germani" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="4.svg" alt="Newton" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="5.svg" alt="Centro Servizi Appia" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="6.svg" alt="Città Della Salute" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="7.svg" alt="Analysis" /></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="8.svg" alt="Le Vie di Feronia"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="9.svg" alt="Metronotte"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="10.svg" alt="ITREST"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="11.svg" alt="Atenia Consulting"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="12.svg" alt="Armonia & Benessere"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="13.svg" alt="Newton Autoscuola"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="14.svg" alt="Delegazione ACI Newton Roma"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="15.svg" alt="Basket Virtus Fondi"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="16.svg" alt="Basket Virtus Terracina"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="17.svg" alt="Nautica Newton"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="18.svg" alt="Black Mamba"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="19.svg" alt="Natur House"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="20.svg" alt="Multi Sport Camp Rive Di Traiano"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="21.svg" alt="Sandro Di Mauro Impresa Edile"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="22.svg" alt="Buttafoco 2.0 Food&Beverage"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="23.svg" alt="Visit Terracina"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="24.png" alt="Circe Immobiliare"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="25.svg" alt="La Magic Paint"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="26.svg" alt="Power 360"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="27.svg" alt="Red Baron Club"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="32.svg" alt="Copy Center"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="29.svg" alt="Comune di Terracina"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="30.svg" alt="Terracina Summer Village"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="31.svg" alt="Pontina Tec"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="32.svg" alt="De Angelis Arredamenti"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="33.svg" alt="Dea Yachting"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="34.svg" alt="Eco Mixed"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="35.svg" alt="Polo Museale di Terracina"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="36.svg" alt="Conti Consulenze"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="37.svg" alt="SPE International"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="38.svg" alt="Illusion Dinner Live Disco"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="39.svg" alt="Fondazione Città di Terracina"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="40.svg" alt="EvenGarden Shopping Center"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="41.svg" alt="SoleMar"/></li>
                <li className="px-1"><img className="h-32 lg:h-64" src="42.svg" alt="EdilPiEmme"/></li>
            </ul>
        </div>
    );
}

export default Clienti;