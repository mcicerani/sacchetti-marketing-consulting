import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <React.Fragment>
        <div className="footer bg-red-400 text-white flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center w-1/3">
                <img src="logo-bianco.png" alt="logo" className="w-96"/>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
                <h1 className="text-3xl my-5">Contatti</h1>
                <p className="text-xl">Martina: +39 320 6030 417 </p>
                <p className="text-xl">Chiara: +39 339 6943 158</p>
                <p className="text-xl">sacchetti.mktconsulting@gmail.com</p>
                <p className="text-xl">sacchetti.marketingconsulting@pec.it</p>

            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
                <h1 className="text-3xl my-5">Dove Trovarci</h1>
                <p className="text-xl text-center">Via Lungolinea Pio VI, 120 <br></br>04019 Terracina (LT) </p>
                <ul className="flex flex-row text-3xl my-5">
                    <li className="mx-2"><SiInstagram /></li>
                    <li className="mx-2"><SiFacebook /></li>
                </ul>

            </div>
        </div>
        <div>
            <p className="text-sm bg-red-400 text-white text-center">Sacchetti Marketing Consulting P.IVA 03139530590 - Privacy Policy - Cookie Policy - Created By Matteo Cicerani</p>
        </div>
        </React.Fragment>
    );
}

export default Footer;