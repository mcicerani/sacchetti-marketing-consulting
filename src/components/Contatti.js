import React from "react";

const Contatti = () => {
    return (
        <div className=" sezione h-dvh">
            <h1 className="bg-logo text-white text-7xl lg:text-8xl">Richiedi un Preventivo Gratuito</h1>
            <form className="h-5/6 mt-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-10 w-full" >
                    <div>
                        <input type="text" id="nome" name="nome" placeholder="Nome" className="w-full p-2 rounded-sm border border-gray-500 block focus:border-logo focus:ring-logo" required/>
                    </div>
                    <div>
                        <input type="text" id="cognome" name="cognome" placeholder="Cognome" className="w-full p-2 rounded-sm border border-gray-500 block focus:border-logo focus:ring-logo" required/>
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="email" className="w-full p-2 rounded-sm border border-gray-500 block focus:border-logo focus:ring-logo" required/>
                    </div>
                    <div>
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" className="w-full p-2 rounded-sm border border-gray-500 block focus:border-logo focus:ring-logo" />
                    </div>
                    <div>
                        <textarea id="messaggio" name="messaggio" placeholder="Messaggio" className="w-full p-2 rounded-sm border border-gray-500 block resize-none h-40 focus:border-logo focus:ring-logo" required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-logo text-white w-48 h-14 rounded-xl text-xl hover:bg-black hover:text-logo ease-in-out duration-500">Invia</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contatti;
