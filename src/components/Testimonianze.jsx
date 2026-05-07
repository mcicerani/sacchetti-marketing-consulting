import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useSiteData } from "../sanity/SanityContext";
import RevealOnScroll from "./AnimationComponents/RevealOnScroll";
import { SkeletonCards } from "./AnimationComponents/Skeleton";

const Testimonianze = () => {
    const { data, loading } = useSiteData();
    const list = data?.testimonials || [];

    return (
        <div className="sezione bg-logo-light">
            <div className="pt-4 pb-2">
                <h2 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                    Cosa dicono di noi
                </h2>
                <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
            </div>
            {loading
                ? <SkeletonCards count={3} cols="grid md:grid-cols-3" cardHeight="h-48" />
                : (
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {list.map(({ testo, nome, ruolo }, index) => (
                            <RevealOnScroll key={nome} delay={index * 120}>
                                <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 h-full">
                                    <FaQuoteLeft className="text-logo text-2xl opacity-60" aria-hidden="true" />
                                    <p className="font-work text-gray-600 leading-relaxed text-sm lg:text-base italic flex-1">
                                        "{testo}"
                                    </p>
                                    <div className="border-t border-gray-100 pt-4">
                                        <p className="font-marcellus text-gray-900 text-base">{nome}</p>
                                        <p className="font-work text-gray-500 text-sm">{ruolo}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Testimonianze;
