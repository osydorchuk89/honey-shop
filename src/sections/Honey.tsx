import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SectionTitle } from "../components/SectionTitle";
import { LanguageContent, honeyText } from "../utils/data";
import { HoneyCombs } from "../components/HoneyCombs";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const Honey = () => {
    const { language } = useContext(LanguageContext);
    const { changeSection } = useContext(NavigationContext);

    const content =
        language === "en"
            ? (honeyText.en as LanguageContent)
            : (honeyText.no as LanguageContent);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("honey");
        },
    });

    return (
        <div
            ref={ref}
            id="honey"
            className="lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col gap-10 bg-brown lg:scroll-mt-12 scroll-mt-20"
        >
            <SectionTitle text={content.title} fontColor="white" />
            <div className="w-full flex xl:flex-row flex-col 2xl:gap-[10%] gap-10 xl:justify-between xl:items-center">
                <article className="flex flex-col gap-4 text-white sm:text-xl text-lg sm:leading-[28px] leading-[26px]">
                    <p>{content.firstParagraph}</p>
                    <p>{content.secondParagraph}</p>
                </article>
                <div className="xl:overflow-x-visible overflow-x-auto w-full flex">
                    <HoneyCombs />
                </div>
            </div>
        </div>
    );
};
