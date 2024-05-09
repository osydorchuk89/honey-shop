import { useContext } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { LanguageContext } from "../context/LanguageContext";
import { LanguageContent, aboutText } from "../utils/data";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const About = () => {
    const { language } = useContext(LanguageContext);
    const { changeSection } = useContext(NavigationContext);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("about");
        },
    });
    const content =
        language === "en"
            ? (aboutText.en as LanguageContent)
            : (aboutText.no as LanguageContent);

    return (
        <div
            ref={ref}
            id="about"
            className="lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col gap-16 lg:scroll-mt-12 scroll-mt-20"
        >
            <SectionTitle text={content.title} fontColor="black" />
            <div className="flex flex-col lg:gap-10 gap-6">
                <div className="sm:grid lg:grid-cols-5 lg:gap-x-5 lg:gap-y-10 sm:grid-cols-2 flex flex-col gap-6">
                    <div className="lg:col-span-2 lg:text-xl text-lg lg:leading-[28px] leading-[26px]">
                        <p>{content.firstParagraph}</p>
                        <br />
                        <p>{content.secondParagraph}</p>
                    </div>
                    <div className="lg:col-span-3 lg:col-start-3">
                        <img
                            className="sm:h-0 sm:min-h-full w-full object-cover 2xl:object-[0px_33%] xl:object-[0px_38%] object-center rounded-2xl"
                            src="beekeper.jpg"
                        />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[...Array(6).keys()].map((num) => (
                        <img
                            key={num}
                            src={`image-${num}.jpg`}
                            className="h-[248px] w-full object-cover rounded-3xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
