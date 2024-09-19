import React from "react";

const About = () => {
    return (
        <div className="sezione lg:h-dvh">
            <h1 className="bg-logo text-white text-5xl lg:text-8xl">Chi Siamo</h1>
            <div className="lg:grid lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 h-full lg:h-5/6 lg:m-6">
                <img src="about.webp" alt="hero" className="my-5 lg:h-full lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:m-auto resize-none object-cover"/>
                <p className="pl-1 lg:p-6 text-base lg:text-xl lg:col-start-2 lg:col-end-5 lg:row-start-1 m-auto bg-white/75 shadow-xl rounded-lg">
                    Siamo <span className="text-logo text-2xl">M</span>artina e <span className="text-logo text-2xl">C</span>hiara 
                    e dal 2019 ci occupiamo di Marketing e Comunicazione nella nostra agenzia.
                    <br></br>
                    <span className="text-logo">La nostra mission?</span>
                    <br></br>
                    Far capire a tutti gli imprenditori, e a chi vuole sviluppare un progetto imprenditoriale di successo,
                    che nell’era digitale non si può più fare a meno di una buona strategia di comunicazione.
                    <br></br>
                    <span className="text-logo">Cosa Facciamo?</span>
                    <br></br>
                    Trasformiamo sogni e progetti in fatti reali e concreti.
                    Laddove c'è un’esigenza comunicativa, noi l’ascoltiamo e successivamente, insieme a voi, la progettiamo.
                </p>
            </div>
        </div>
    );
}

export default About;