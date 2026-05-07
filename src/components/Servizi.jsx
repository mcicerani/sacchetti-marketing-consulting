import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import Parallax from "./AnimationComponents/Parallax";
import RevealOnScroll from "./AnimationComponents/RevealOnScroll";
import { useSiteData } from "../sanity/SanityContext";
import { iconMap } from "../sanity/iconMap";
import { SkeletonCards } from "./AnimationComponents/Skeleton";

const Servizi = () => {
    const { data, loading } = useSiteData();
    const servizi = (data?.services || []).map((s) => ({ ...s, icona: iconMap[s.iconName] || FaHeart }));
    const steps = data?.siteSettings?.servizioSteps || [];

    return (
        <React.Fragment>
            <div className="sezione min-h-dvh bg-ghost">
                <div className="pt-4 pb-2">
                    <h1 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                        I Nostri Servizi
                    </h1>
                    <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
                </div>
                {loading
                    ? <SkeletonCards count={6} cardHeight="h-48" />
                    : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 items-stretch justify-center gap-6">
                            {servizi.map(({ title, description, icona: Icona }, index) => (
                                <RevealOnScroll key={index} delay={index * 80}>
                                    <div className="bg-white rounded-xl p-6 lg:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 group h-full">
                                        <div className="bg-logo-light group-hover:bg-logo rounded-full p-4 mb-4 transition-colors duration-300">
                                            {Icona && <Icona className="text-logo group-hover:text-white text-3xl transition-colors duration-300" />}
                                        </div>
                                        <h2 className="text-xl lg:text-2xl text-gray-900 mb-3 font-marcellus">{title}</h2>
                                        <p className="text-sm lg:text-base text-gray-500 leading-relaxed">{description}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    )
                }
                <div className="pb-8 mt-2">
                    <Link to="contatti" smooth={true} duration={500}>
                        <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-logo text-white rounded-full text-sm font-work hover:bg-logo-dark transition-colors duration-200 shadow-sm">
                            Inizia adesso <FaArrowRight className="text-xs" aria-hidden="true" />
                        </button>
                    </Link>
                </div>
            </div>
            <Parallax image="parallax-2.png" height="50vh">
                <div className="h-full w-full flex flex-col justify-evenly lg:flex-row lg:justify-center lg:items-center px-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center justify-center w-full lg:w-56 py-2 lg:h-36 px-4 border border-white/40 bg-logo/60 backdrop-blur-sm lg:rounded-xl">
                                <span className="text-white/60 text-sm font-work mb-1">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h2 className="text-xl lg:text-2xl text-white font-marcellus">{step}</h2>
                            </div>
                            {index < steps.length - 1 && (
                                <FaArrowRight className="hidden lg:block text-white/70 text-xl flex-shrink-0 mx-1" aria-hidden="true" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Parallax>
        </React.Fragment>
    );
}

export default Servizi;
