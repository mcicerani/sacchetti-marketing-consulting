import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed bottom-1 lg:bottom-7 left-1 lg:left-auto lg:right-7 z-50 cursor-pointer" onClick={handleClick}>
            <FaArrowUp className="text-4xl lg:text-5xl bg-logo text-white p-2 rounded-full shadow-xl border border-white" />
        </div>
    );
}

export default ArrowToTop;