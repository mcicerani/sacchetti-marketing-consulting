import React from "react";



const Team = () => {
    return (
        <div className="sezione min-h-dvh lg:h-dvh">
            <h1 className="bg-logo text-white text-6xl lg:text-8xl">Il Nostro Team</h1>
            <div className="flex justify-center items-center h-full">
                <ul className="flex flex-col lg:flex-row justify-center items-center">
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center ">
                        <img src="manu.jpg" alt="" className="rounded-full h-48 lg:h-80"/>
                        <h2 className="text-l lg:text-2xl my-1">
                            Martina Sacchetti
                        </h2>
                        <h3 className="text-l lg:text-xl font-work">
                            Marketing Manager
                        </h3>
                    </li>
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center">
                        <img src="manu.jpg" alt="" className="rounded-full h-48 lg:h-80"/>
                        <h2 className="text-l lg:text-2xl my-1">
                            Chiara Sacchetti
                        </h2>
                        <h3 className="text-l lg:text-xl font-work">
                            Copywriter
                        </h3>
                    </li>                
                    <li className="flex flex-col mx-5 my-5 lg:mx-20 justify-center items-center">
                        <img src="manu.jpg" alt="Foto Emanuela Cittarelli" className="rounded-full h-48 lg:h-80"/>
                        <h2 className="text-l lg:text-2xl my-1">
                            Emanuela Cittarelli
                        </h2>
                        <h3 className="text-l lg:text-xl font-work">
                            Graphic Designer
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Team;
