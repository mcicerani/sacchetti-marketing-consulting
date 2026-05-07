import React, { useState } from "react";

const Contatti = () => {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            e.target.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="sezione bg-ghost lg:h-dvh">
            <div className="px-2 pt-4 pb-2">
                <h1 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                    Richiedi un Preventivo
                </h1>
                <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
                <p className="text-base text-gray-500 font-work mt-2">Gratuito e senza impegno</p>
            </div>
            <form className="mt-8 flex items-start justify-center" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                            Nome <span className="text-logo" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="text" id="nome" name="nome" placeholder="Mario"
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white block focus:border-logo focus:ring-1 focus:ring-logo outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="cognome" className="text-sm font-medium text-gray-700">
                            Cognome <span className="text-logo" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="text" id="cognome" name="cognome" placeholder="Rossi"
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white block focus:border-logo focus:ring-1 focus:ring-logo outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email <span className="text-logo" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="email" id="email" name="email" placeholder="mario@esempio.it"
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white block focus:border-logo focus:ring-1 focus:ring-logo outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="telefono" className="text-sm font-medium text-gray-700">Telefono</label>
                        <input
                            type="tel" id="telefono" name="telefono" placeholder="+39 000 000 0000"
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white block focus:border-logo focus:ring-1 focus:ring-logo outline-none transition-colors"
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label htmlFor="messaggio" className="text-sm font-medium text-gray-700">
                            Messaggio <span className="text-logo" aria-hidden="true">*</span>
                        </label>
                        <textarea
                            id="messaggio" name="messaggio" placeholder="Descrivi il tuo progetto..."
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white block resize-none h-24 focus:border-logo focus:ring-1 focus:ring-logo outline-none transition-colors"
                            required
                        ></textarea>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 items-center justify-center lg:items-start">
                        <p className="text-xs text-gray-400">
                            <span className="text-logo" aria-hidden="true">*</span> Campi obbligatori
                        </p>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-10 py-3 bg-logo text-white rounded-full text-lg font-work hover:bg-logo-dark transition-colors duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Invio...' : 'Invia'}
                        </button>
                        {status === 'success' && (
                            <p role="alert" className="text-green-600 font-medium text-sm">
                                Messaggio inviato! Ti contatteremo presto.
                            </p>
                        )}
                        {status === 'error' && (
                            <p role="alert" className="text-red-600 font-medium text-sm">
                                Errore nell'invio. Riprova o scrivici direttamente.
                            </p>
                        )}
                    </div>
                    <img
                        src="qr-code.png"
                        alt="QR Code per contatti rapidi — scansiona per aprire la nostra pagina"
                        width={192} height={192}
                        className="h-40 mx-auto mt-6 col-span-2 opacity-80"
                    />
                </div>
            </form>
        </div>
    );
}

export default Contatti;
