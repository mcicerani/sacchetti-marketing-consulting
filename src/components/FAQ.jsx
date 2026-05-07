import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSiteData } from "../sanity/SanityContext";
import { SkeletonText } from "./AnimationComponents/Skeleton";

const FAQItem = ({ domanda, risposta }) => {
    const [aperta, setAperta] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => setAperta(!aperta)}
                aria-expanded={aperta}
            >
                <span className="font-marcellus text-base lg:text-lg text-gray-900 pr-4">{domanda}</span>
                <FaChevronDown
                    className={`text-logo flex-shrink-0 transition-transform duration-300 ${aperta ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${aperta ? 'max-h-64' : 'max-h-0'}`}
            >
                <p className="font-work text-gray-600 text-sm lg:text-base leading-relaxed p-5 pt-0 bg-white">
                    {risposta}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { data, loading } = useSiteData();
    const faqs = data?.faqs || [];

    return (
        <div className="sezione bg-ghost">
            <div className="pt-4 pb-2">
                <h2 className="font-marcellus text-5xl lg:text-7xl text-gray-900">
                    Domande Frequenti
                </h2>
                <div className="h-1 bg-logo w-20 mt-3 rounded-full" />
            </div>
            <div className="max-w-3xl mx-auto mt-10 flex flex-col gap-3">
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                          <SkeletonText key={i} className="h-14 w-full rounded-xl" />
                      ))
                    : faqs.map((faq) => (
                          <FAQItem key={faq.domanda} {...faq} />
                      ))
                }
            </div>
        </div>
    );
};

export default FAQ;
