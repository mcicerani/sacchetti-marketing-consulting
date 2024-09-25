import React from "react";
import { FaLinkedin } from "react-icons/fa";


const Team = () => {
    return (
        <div className="sezione">
            <h1 className="bg-logo text-white text-5xl lg:text-8xl">Il Nostro Team</h1>
            <div className="flex justify-center items-center h-full mt-10">
                <ul className="flex flex-col lg:flex-row justify-center items-center">
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center ">
                        <img src="martina.png" alt="" className="rounded-full h-48 lg:h-72"/>
                        <h2 className="text-lg lg:text-2xl my-1">
                            Martina Sacchetti
                        </h2>
                        <h3 className="text-base lg:text-xl font-work text-gray-500">
                            Marketing Manager
                        </h3>
                        <a href="https://www.linkedin.com/in/martina-sacchetti/" target="_blank" rel="noreferrer" className="text-3xl lg:text-5xl text-logo my-1">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center">
                        <img src="chiara.png" alt="" className="rounded-full h-48 lg:h-72"/>
                        <h2 className="text-lg lg:text-2xl my-1">
                            Chiara Sacchetti
                        </h2>
                        <h3 className="text-base lg:text-xl font-work text-gray-500">
                            Copywriter
                        </h3>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-3xl lg:text-5xl text-logo my-1">
                            <FaLinkedin/>
                        </a>
                    </li>                
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center">
                        <img src="emanuela.png" alt="Foto Emanuela Cittarelli" className="rounded-full h-48 lg:h-72"/>
                        <h2 className="text-lg lg:text-2xl my-1">
                            Emanuela Cittarelli
                        </h2>
                        <h3 className="text-base lg:text-xl font-work text-gray-500">
                            Graphic Designer
                        </h3>
                        <a href="https://www.linkedin.com/in/emanuela-cittarelli-9b8500263/" target="_blank" rel="noreferrer" className="text-3xl lg:text-5xl text-logo my-1">
                            <FaLinkedin/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Team;
