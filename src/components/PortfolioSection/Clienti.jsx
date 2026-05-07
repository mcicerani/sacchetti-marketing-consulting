import React, { useEffect, useRef } from "react";
import { useSiteData } from "../../sanity/SanityContext";
import { urlFor } from "../../sanity/imageUrl";

const LogoList = ({ clienti, listRef }) => (
    <ul
        ref={listRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 lg:[&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll motion-reduce:animate-none"
    >
        {clienti.map(({ name, logo, url }, i) => {
            const imgSrc = logo && typeof logo === 'object'
                ? urlFor(logo).height(128).url()
                : logo;
            const img = (
                <img
                    className="h-32 lg:h-auto"
                    src={imgSrc}
                    alt={name}
                    width={128}
                    height={128}
                    loading="lazy"
                />
            );
            return (
                <li key={i} className="px-1">
                    {url ? <a href={url} target="_blank" rel="noopener noreferrer">{img}</a> : img}
                </li>
            );
        })}
    </ul>
);

const Clienti = () => {
    const { data } = useSiteData();
    const clienti = data?.clienti || [];
    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            const existing = ul.parentNode.querySelector('[aria-hidden="true"]');
            if (existing) existing.remove();
            const clone = ul.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            ul.parentNode.appendChild(clone);
        }
    }, [clienti]);

    return (
        <div className="bg-logo/60 w-full inline-flex flex-nowrap overflow-hidden h-full">
            <LogoList clienti={clienti} listRef={logosRef} />
        </div>
    );
};

export default Clienti;
