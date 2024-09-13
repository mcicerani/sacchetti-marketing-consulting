import React from "react";

const Contatti = () => {
    return (
        <div className=" sezione h-screen">
            <h1 className="bg-red-400 text-white text-8xl">Richiedi un Preventivo Gratuito</h1>
            <form className="h-5/6 mt-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" className="w-full p-2" />
                    </div>
                    <div>
                        <label htmlFor="cognome">Cognome</label>
                        <input type="text" id="cognome" name="cognome" className="w-full p-2" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2" />
                    </div>
                    <div>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" id="telefono" name="telefono" className="w-full p-2" />
                    </div>
                    <div>
                        <label htmlFor="messaggio">Messaggio</label>
                        <textarea id="messaggio" name="messaggio" className="w-full p-2"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-red-400 text-white p-2">Invia</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contatti;
