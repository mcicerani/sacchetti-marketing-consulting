import React from "react";

const About = () => {
    return (
        <div className="sezione h-dvh">
            <h1 className="bg-red-400 text-white text-8xl">Chi Siamo</h1>
            <div className="grid grid-cols-3 grid-rows-1 h-5/6 m-6">
                <img src="about.webp" alt="hero" className=" h-full col-start-1 col-span-2 row-start-1 m-auto"/>
                <p className="p-6 text-2xl col-start-2 col-end-5 row-start-1 m-auto bg-white/75 shadow-xl rounded-lg">
                    Siamo <span className="text-red-500">M</span>artina e <span className="text-red-500">C</span>hiara 
                    e dal 2019 ci occupiamo di Marketing e Comunicazione nella nostra agenzia.
                    <br></br>
                    <span className="text-red-500">La nostra mission?</span>
                    <br></br>
                    Far capire a tutti gli imprenditori, e a chi vuole sviluppare un progetto imprenditoriale di successo,
                    che nell’era digitale non si può più fare a meno di una buona strategia di comunicazione.
                    <br></br>
                    <span className="text-red-500">Cosa Facciamo?</span>
                    <br></br>
                    Trasformiamo sogni e progetti in fatti reali e concreti.
                    Laddove vi è un’esigenza comunicativa noi l’ascoltiamo e successivamente insieme a voi la progettiamo.
                </p>
            </div>
        </div>
    );
}

export default About;