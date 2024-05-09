import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ContactButton } from "../components/ContactButton";
import { TopNavBar } from "../components/TopNavBar";
import { headerText } from "../utils/data";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const Header = () => {
    const { language } = useContext(LanguageContext);
    const { changeSection } = useContext(NavigationContext);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("none");
        },
    });

    return (
        <div ref={ref} className="w-auto relative text-white">
            <TopNavBar />
            <div className="lg:h-[1022px] sm:h-[1194px] h-[812px] bg-[url('/title-bg.jpg')] bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(48,41,38,0.8)] flex flex-col items-center">
                <div className="lg:mt-[388px] sm:mt-[415px] mt-[275px] lg:px-20 px-10">
                    <p className="font-handwritten lg:text-[74px] sm:text-[54px] text-[40px] lg:leading-[111px] sm:leading-[70.2px] leading-[52px] text-center text-white">
                        Honning frå Sunnmørsalpane
                    </p>
                </div>
                <p className="lg:mt-10 sm:mt-12 mt-6 lg:mb-20 sm:mb-[104px] mb-[180px] lg:w-1/2 md:w-2/3 md:p-0 sm:px-10 px-4 text-center lg:text-[32px] sm:text-[28px] text-xl lg:leading-[48px] sm:leading-[42px] leading-[30px]">
                    {language === "en" ? headerText.en : headerText.no}
                </p>
                <a href="#contact">
                    <ContactButton />
                </a>
            </div>
        </div>
    );
};
