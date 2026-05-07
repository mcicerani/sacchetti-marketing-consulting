import React, { useState } from "react";
import Clienti from './Clienti';
import Parallax from "../AnimationComponents/Parallax";
import { useSiteData } from "../../sanity/SanityContext";
import { urlFor } from "../../sanity/imageUrl";
import { SkeletonCard } from "../AnimationComponents/Skeleton";

const SIZE_CLASSES = {
  full: 'lg:col-span-3',
  wide: 'lg:col-span-2',
  tall: 'lg:row-span-2',
  normal: '',
};

const IMG_HEIGHT = {
  full: 'h-64 lg:h-80',
  wide: 'h-64 lg:h-72',
  tall: 'h-64 lg:h-full',
  normal: 'h-64 lg:h-72',
};

const Portfolio = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { data, loading } = useSiteData();
    const projects = data?.portfolio || [];
    const portfolioSubtitle = data?.siteSettings?.portfolioSubtitle || '';
    const clientiTitle = data?.siteSettings?.clientiTitle || 'Ci hanno scelto';

    const handleCardClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <React.Fragment>
            <div className="sezione min-h-dvh bg-white">
                <div className="pt-4 pb-2">
                    <h1 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                        I Nostri Lavori
                    </h1>
                    <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
                </div>
                {portfolioSubtitle && (
                    <p className="text-base lg:text-xl py-5 lg:py-6 lg:mt-6 text-gray-600 leading-relaxed max-w-4xl">
                        {portfolioSubtitle}
                    </p>
                )}

                {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <SkeletonCard key={i} className="h-64" />
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6">
                        {projects.map((project, index) => {
                            const size = project.size || 'normal';
                            const isOpen = openIndex === index;
                            const imgSrc = project.image && typeof project.image === 'object'
                                ? urlFor(project.image).width(800).height(576).fit('crop').url()
                                : project.image;

                            return (
                                <div
                                    key={index}
                                    className={`portfolio-item relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${SIZE_CLASSES[size] || ''} ${size === 'tall' ? 'h-full' : ''}`}
                                    onClick={() => handleCardClick(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isOpen}
                                    aria-label={`${project.title} — ${isOpen ? 'chiudi' : 'espandi'} dettagli`}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(index)}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={project.title}
                                        className={`w-full object-cover ${IMG_HEIGHT[size] || IMG_HEIGHT.normal}`}
                                        loading="lazy"
                                    />
                                    <div className={`absolute bottom-0 left-0 w-full p-4 flex flex-col justify-center items-start overflow-hidden transform transition-all duration-500 ease-in-out
                                        ${isOpen
                                            ? 'max-h-[160px] bg-logo'
                                            : 'max-h-[48px] bg-gradient-to-t from-black/60 to-transparent group-hover:max-h-[160px] group-hover:bg-logo'
                                        }`}
                                    >
                                        <h3 className={`text-base lg:text-lg font-marcellus transition-colors duration-300 ${isOpen ? 'text-white' : 'text-logo group-hover:text-white'}`}>{project.title}</h3>
                                        <p className={`text-sm mt-1 text-white leading-snug transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden group-hover:block'}`}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            {clientiTitle && (
                <div className="bg-logo/10 px-5 py-4 text-center">
                    <p className="font-marcellus text-2xl lg:text-3xl text-gray-700 tracking-wide">
                        {clientiTitle}
                    </p>
                </div>
            )}
            <Parallax image="parallax-2.png" height="20vh">
                <Clienti />
            </Parallax>
        </React.Fragment>
    );
}

export default Portfolio;
