import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NavigationContext } from "../context/NavigationContext";
import { sortText } from "../utils/data";
import { SectionTitle } from "../components/SectionTitle";
import { useInView } from "react-intersection-observer";

export const Sort = () => {
    const { language } = useContext(LanguageContext);
    const { changeSection } = useContext(NavigationContext);
    const sortItems = language === "en" ? sortText.en : sortText.no;

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("sort");
        },
    });

    return (
        <div
            ref={ref}
            id="sort"
            className="bg-gold lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col lg:gap-16 sm:gap-10 gap-8 lg:scroll-mt-12 scroll-mt-20"
        >
            <SectionTitle
                text={
                    language === "en"
                        ? "The taste of honey that calls to heart"
                        : "Smaken av honning som kaller på hjertet"
                }
                fontColor="black"
            />
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start lg:gap-5 sm:gap-y-8 sm:gap-x-6 gap-6">
                {sortItems.map((item) => (
                    <div className="flex flex-col gap-2" key={item.title}>
                        <div className="flex items-center gap-2">
                            <div className="flex justify-center">
                                <img
                                    src="honey-comb.png"
                                    className="text-center"
                                />
                            </div>
                            <p className="text-[32px] leading-[48px]">
                                {item.title}
                            </p>
                        </div>
                        <p className="sm:text-xl text-lg sm:leading-[28px] leading-[26px]">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
