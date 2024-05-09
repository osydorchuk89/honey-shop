import { useContext } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { SocialMediaBox } from "../components/SocialMediaBox";
import { LanguageContext } from "../context/LanguageContext";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const Contacts = () => {
    const { language } = useContext(LanguageContext);
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
            className="bg-[url('/honeycombs.png')] bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(235,165,38,0.8)] lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col items-center lg:gap-16 gap-10 lg:scroll-mt-12 scroll-mt-20"
        >
            <SectionTitle
                text={
                    language === "en"
                        ? "In each sip is nature and care"
                        : "I hver slurk er det natur og omsorg"
                }
                fontColor="black"
            />
            <SocialMediaBox />
        </div>
    );
};
