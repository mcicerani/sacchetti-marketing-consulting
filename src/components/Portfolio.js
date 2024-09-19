import React from "react";
import Clienti from './Clienti';

const Portfolio = () => {
    const projects = [
        {
            title: "Progetto 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Progetto 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Progetto 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Progetto 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Progetto 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Progetto 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/400"
        }
    ];

    return (
        <div className="sezione min-h-dvh">
            <h1 className="bg-logo text-white text-5xl lg:text-8xl">I Nostri Lavori</h1>
            <p className="text-base lg:text-xl mt-5 lg:mt-10">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-5 lg:mt-10">
                {projects.map((project, index) => (
                    <div key={index} className={`portfolio-item relative group ${index === 0  ? 'lg:col-span-3' : index === 1 || index === 4 || index === 5 ? 'lg:col-span-2' : index === 3 ? 'lg:row-span-2 lg:h-full' : ''}`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full ${index === 3 ? 'h-full' : 'h-96'} object-cover rounded-xl`}
                        />
                        {/* Title and description container */}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 flex flex-col justify-center items-start rounded-b-xl max-h-[40px] overflow-hidden transform transition-all duration-500 ease-in-out group-hover:max-h-[160px] group-hover:bg-opacity-100 group-hover:bg-logo">
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
            <Clienti/>
        </div>
    );
}

export default Portfolio;
