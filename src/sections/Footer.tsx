import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../store/hooks";
import { navigationActions } from "../store";

export const Footer = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("none"));
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
