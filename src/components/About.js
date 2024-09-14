import React from "react";

const About = () => {
    return (
        <div className="sezione min-h-dvh lg:h-dvh">
            <h1 className="bg-logo text-white text-7xl lg:text-8xl">Chi Siamo</h1>
            <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 h-5/6 m-6">
                <img src="about.webp" alt="hero" className="h-96 lg:h-auto col-span-3 lg:col-start-1 lg:col-span-2 row-start-1 m-auto resize-none"/>
                <p className="p-6 text-xl lg:text-2xl col-span-3 lg:col-start-2 lg:col-end-5 row-start-2 lg:row-start-1 m-auto bg-white/75 shadow-xl rounded-lg">
                    Siamo <span className="text-logo text-3xl font-medium">M</span>artina e <span className="text-logo text-3xl font-medium">C</span>hiara 
                    e dal 2019 ci occupiamo di Marketing e Comunicazione nella nostra agenzia.
                    <br></br>
                    <span className="text-logo font-medium">La nostra mission?</span>
                    <br></br>
                    Far capire a tutti gli imprenditori, e a chi vuole sviluppare un progetto imprenditoriale di successo,
                    che nell’era digitale non si può più fare a meno di una buona strategia di comunicazione.
                    <br></br>
                    <span className="text-logo font-medium">Cosa Facciamo?</span>
                    <br></br>
                    Trasformiamo sogni e progetti in fatti reali e concreti.
                    Laddove vi è un’esigenza comunicativa noi l’ascoltiamo e successivamente insieme a voi la progettiamo.
                </p>
            </div>
        </div>
    );
}

export default About;