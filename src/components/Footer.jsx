import React from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { useSiteData } from "../sanity/SanityContext";

const Footer = () => {
  const { data } = useSiteData();
  const d = data?.siteSettings;

  const address = d?.footerAddress || "";
  const mapsUrl = d?.footerMapsUrl || "#";
  const phones = d?.footerPhones || [];
  const emails = d?.footerEmails || [];
  const instagram = d?.footerInstagram || "#";
  const facebook = d?.footerFacebook || "#";
  const piva = d?.footerPiva || "";

  return (
    <React.Fragment>
      <div className="footer bg-logo text-white flex flex-col lg:flex-row justify-between items-center lg:h-80 py-8 lg:py-0">
        <div className="flex flex-col justify-center items-center lg:w-1/3 my-3 mx-4">
          <h2 className="text-xl lg:text-2xl font-marcellus mb-2">Dove Trovarci</h2>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm lg:text-base text-center text-white/80 hover:text-white transition-colors duration-200 underline underline-offset-2"
          >
            {address.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
            ))}
          </a>
          <ul className="flex flex-row text-2xl lg:text-3xl mt-3 gap-4">
            <li>
              <a href={instagram} aria-label="Instagram Sacchetti Marketing" className="hover:text-white/70 transition-colors duration-200">
                <SiInstagram />
              </a>
            </li>
            <li>
              <a href={facebook} aria-label="Facebook Sacchetti Marketing" className="hover:text-white/70 transition-colors duration-200">
                <SiFacebook />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center my-3 mx-4">
          <h2 className="text-xl lg:text-2xl font-marcellus mb-2">Contatti</h2>
          {phones.map(({ person, number }) => (
            <a
              key={person}
              href={`tel:${number.replace(/\s/g, "")}`}
              className="text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200"
            >
              {person}: {number}
            </a>
          ))}
          {emails.map((email, i) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className={`text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200${i === 0 ? " mt-1" : ""}`}
            >
              {email}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3 mt-4 lg:mt-0 mx-4">
          <img src="logo-bianco.png" alt="Sacchetti Marketing Consulting" className="w-52 lg:w-64" />
        </div>
      </div>
      <div className="bg-logo border-t border-white/20">
        <p className="text-xs text-white/70 text-center py-3">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          {" — "}
          <a href="/cookie" className="hover:text-white transition-colors">Cookie Policy</a>
          {" — "}
          Sacchetti Marketing Consulting P.IVA {piva}
          {" — "}
          Created by{" "}
          <a href="https://mcicerani.live" className="hover:text-white transition-colors underline">
            Matteo Cicerani
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
