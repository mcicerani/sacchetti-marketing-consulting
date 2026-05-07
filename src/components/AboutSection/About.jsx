import React from "react";
import Team from "./Team";
import RevealOnScroll from "../AnimationComponents/RevealOnScroll";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { useSiteData } from "../../sanity/SanityContext";
import { iconMap } from "../../sanity/iconMap";

const About = () => {
    const { data } = useSiteData();
    const columns = data?.siteSettings?.aboutColumns || [];

    return (
        <React.Fragment>
            <div className="sezione bg-white">
                <div className="pt-4 pb-2">
                    <h1 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                        Agenzia
                    </h1>
                    <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
                </div>
                <div className="grid lg:grid-cols-3 h-full mt-8 gap-0 divide-logo/20 divide-y-2 lg:divide-y-0 lg:divide-x-2">
                    {columns.map(({ iconName, title, text }) => {
                        const Icon = iconMap[iconName];
                        return (
                            <div key={title} className="flex flex-col p-5 lg:p-10">
                                {Icon && (
                                    <div className="bg-logo-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                        <Icon className="text-logo text-xl" />
                                    </div>
                                )}
                                <h2 className="text-xl lg:text-2xl text-logo mb-4">{title}</h2>
                                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pb-8 mt-4 px-5 md:px-12 lg:px-[80px] xl:px-[120px]">
                <Link to="contatti" smooth={true} duration={500}>
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-logo text-white rounded-full text-sm font-work hover:bg-logo-dark transition-colors duration-200 shadow-sm">
                        Richiedi un preventivo gratuito <FaArrowRight className="text-xs" aria-hidden="true" />
                    </button>
                </Link>
            </div>
            <RevealOnScroll>
                <Team />
            </RevealOnScroll>
        </React.Fragment>
    );
}

export default About;
