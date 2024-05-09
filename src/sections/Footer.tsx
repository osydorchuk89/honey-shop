import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
    const { changeSection } = useContext(NavigationContext);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("none");
        },
    });

    return (
        <div
            ref={ref}
            className="bg-brown px-20 py-14 flex flex-col justify-between items-center gap-6"
        >
            <a href="/">
                <img src="logo.png" />
            </a>
            <p className="text-white text-lg leading-[20.67px]">2024</p>
        </div>
    );
};
