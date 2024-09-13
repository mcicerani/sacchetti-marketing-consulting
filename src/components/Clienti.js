import React, { useEffect, useRef } from "react";

const Clienti = () => {

    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            const clone = ul.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            ul.parentNode.appendChild(clone); // Append the clone directly to the parent
        }
    }, []);

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden bg-gray-300/75 h-40 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
                <li className="px-10"><img src="./facebook.svg" alt="Facebook" /></li>
                <li className="px-10"><img src="./disney.svg" alt="Disney" /></li>
                <li className="px-10"><img src="./airbnb.svg" alt="Airbnb" /></li>
                <li className="px-10"><img src="./apple.svg" alt="Apple" /></li>
                <li className="px-10"><img src="./spark.svg" alt="Spark" /></li>
                <li className="px-10"><img src="./samsung.svg" alt="Samsung" /></li>
                <li className="px-10"><img src="./quora.svg" alt="Quora" /></li>
                <li className="px-10"><img src="./sass.svg" alt="Sass" /></li>
            </ul>
        </div>
    );
}

export default Clienti;