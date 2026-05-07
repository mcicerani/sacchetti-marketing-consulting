import { useRef, useEffect, useState } from "react";

const parseValue = (val) => {
    const match = String(val).match(/^(\d+)(.*)$/);
    return match ? { num: parseInt(match[1]), suffix: match[2] } : { num: 0, suffix: "" };
};

const CountUp = ({ value, duration = 1800 }) => {
    const { num, suffix } = parseValue(value);
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(eased * num));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );
        const el = ref.current;
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [num, duration]);

    return <span ref={ref}>{display}{suffix}</span>;
};

export default CountUp;
