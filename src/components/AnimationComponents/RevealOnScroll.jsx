import { useRef, useEffect, useState } from "react";

const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const [isVisible, setIsVisible] = useState(prefersReduced);
    const ref = useRef(null);

    useEffect(() => {
        if (prefersReduced) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12 }
        );

        const el = ref.current;
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [prefersReduced]);

    const hidden = {
        up:    "opacity-0 translate-y-10",
        down:  "opacity-0 -translate-y-10",
        left:  "opacity-0 translate-x-10",
        right: "opacity-0 -translate-x-10",
    }[direction] ?? "opacity-0 translate-y-10";

    return (
        <div
            ref={ref}
            style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
            className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : hidden}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
