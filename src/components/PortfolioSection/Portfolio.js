import React from "react";
import Clienti from './Clienti';
import Parallax from "../AnimationComponents/Parallax";

const Portfolio = () => {

    const projects = [
        {
            title: "Progetto 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax-2.png"
        },
        {
            title: "Progetto 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax.png"
        },
        {
            title: "Progetto 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax-3.jpg"
        },
        {
            title: "Progetto 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax.png"
        },
        {
            title: "Progetto 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax-3.jpg"
        },
        {
            title: "Progetto 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "parallax-2.png"
        }
    ];

    return (
        <React.Fragment>
            <div className="sezione min-h-dvh">
                <h1 className="bg-logo text-white text-5xl lg:text-8xl">I Nostri Lavori</h1>
                <p className="text-base lg:text-xl p-5 lg:p-10 lg:mt-10">
                    Nel corso degli anni, abbiamo lavorato con aziende e professionisti di diversi settori, sviluppando 
                    strategie personalizzate per ogni esigenza. Ogni progetto racconta una storia di successo e crescita, 
                    frutto della nostra passione per il marketing e la comunicazione. Qui troverai alcuni dei lavori che meglio 
                    rappresentano il nostro approccio creativo e strategico.
                </p>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-10">
                    {projects.map((project, index) => (
                        <div key={index} className={`portfolio-item relative group ${index === 0  ? 'lg:col-span-3' : index === 1 || index === 4 || index === 5 ? 'lg:col-span-2' : index === 3 ? 'lg:row-span-2 lg:h-full' : ''}`}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`h-96 w-full ${index === 3 ? 'lg:h-full' : 'lg:h-96'} object-cover rounded-xl`}
                            />
                            {/* Title and description container */}
                            <div className="bg-logo absolute bottom-0 left-0 w-full bg-opacity-50 text-white p-4 flex flex-col justify-center items-start rounded-b-xl max-h-[40px] overflow-hidden transform transition-all duration-500 ease-in-out group-hover:max-h-[160px] group-hover:bg-opacity-100 group-hover:bg-logo">
                                {/* Title */}
                                <h3 className="text-lg lg:text-xl">
                                    {project.title}
                                </h3>
                                {/* Description is hidden with display: none initially */}
                                <p className="text-sm lg:text-base hidden group-hover:block transition-all duration-500 ease-in-out mt-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Parallax image="parallax-2.png" height="20vh">
                <Clienti/>
            </Parallax>
        </React.Fragment>
    );
}

export default Portfolio;
