import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <React.Fragment>
        <div className="footer bg-logo text-white flex flex-col lg:flex-row justify-between items-center lg:h-96">
            <div className="flex flex-col justify-center items-center lg:w-1/3 my-3 mx-1">
                <h1 className="text-2xl lg:text-3xl mt-5">Dove Trovarci</h1>
                <p className="text-l lg:text-xl text-center">Via Lungolinea Pio VI, 120 <br></br>04019 Terracina (LT) </p>
                <ul className="flex flex-row text-2xl lg:text-3xl my-2">
                    <li className="mx-2 ease-in-out duration-500 lg:hover:scale-125"><a href="https://www.instagram.com/sacchettimktconsulting/"><SiInstagram /></a></li>
                    <li className="mx-2 ease-in-out duration-500 lg:hover:scale-125"><a href="https://www.facebook.com/profile.php?id=61559447582233"><SiFacebook /></a></li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center my-3 mx-1">
                <h1 className="text-2xl lg:text-3xl mt-5">Contatti</h1>
                <p className="text-l lg:text-xl">Martina: +39 320 6030 417 </p>
                <p className="text-l lg:text-xl">Chiara: +39 339 6943 158</p>
                <p className="text-l lg:text-xl">sacchetti.mktconsulting@gmail.com</p>
                <p className="text-l lg:text-xl">sacchetti.marketingconsulting@pec.it</p>

            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/3 mt-5 mx-1">
                <img src="logo-bianco.png" alt="logo" className="w-64"/>
            </div>
        </div>
        <div>
            <p className="text-xs lg:text-sm bg-logo text-white text-center pt-10 lg:pt-0">Privacy Policy - Cookie Policy <br></br>Sacchetti Marketing Consulting P.IVA 03139530590 - Created By Matteo Cicerani</p>
        </div>
        </React.Fragment>
    );
}

export default Footer;