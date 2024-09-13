import React from "react";



const Team = () => {
    return (
        <div className="sezione h-dvh">
            <h1 className="bg-logo text-white text-8xl">Il Nostro Team</h1>
            <div className="flex justify-center items-center h-5/6">
                <ul className="flex flex-row justify-center items-center">
                    <li className="flex flex-col mx-20 justify-center items-center ">
                        <img src="manu.jpg" alt="" className="rounded-full h-96 grayscale ease-in-out duration-500 hover:grayscale-0"/>
                        <h2 className="text-2xl my-3">
                            Martina Sacchetti
                        </h2>
                        <h3 className="text-xl">
                            Ruolo
                        </h3>
                    </li>
                    <li className="flex flex-col mx-20 justify-center items-center">
                        <img src="manu.jpg" alt="" className="rounded-full h-96"/>
                        <h2 className="text-2xl my-3">
                            Chiara Sacchetti
                        </h2>
                        <h3 className="text-xl">
                            Ruolo
                        </h3>
                    </li>                
                    <li className="flex flex-col mx-20 justify-center items-center">
                        <img src="manu.jpg" alt="Foto Emanuela Cittarelli" className="rounded-full h-96"/>
                        <h2 className="text-2xl my-3">
                            Emanuela Cittarelli
                        </h2>
                        <h3 className="text-xl">
                            Ruolo
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Team;
