import { useRef,useEffect,useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        const currentRef = ref.current;
        scrollObserver.observe(currentRef);

        return () => {
            if (currentRef) {
                scrollObserver.unobserve(currentRef);
            }
        };    }, []);
 
    const classes = `transition-opacity duration-1000 ease-in-out 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};


export default RevealOnScroll;