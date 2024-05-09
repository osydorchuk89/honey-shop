import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { LanguageContent, contactUsText } from "../utils/data";
import { NavigationContext } from "../context/NavigationContext";
import { useInView } from "react-intersection-observer";

export const ContactUs = () => {
    const { language } = useContext(LanguageContext);
    const { changeSection } = useContext(NavigationContext);

    const content =
        language === "en"
            ? (contactUsText.en as LanguageContent)
            : (contactUsText.no as LanguageContent);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && changeSection("contact");
        },
    });

    return (
        <div
            ref={ref}
            id="contact"
            className="lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col gap-16 lg:scroll-mt-12 scroll-mt-20"
        >
            <SectionTitle text={content.title} fontColor="black" />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <ContactForm
                    intro={content.firstParagraph!}
                    inputOne={content.inputOne!}
                    inputTwo={content.inputTwo!}
                    inputThree={content.inputThree!}
                />
                <img
                    src="honey.jpg"
                    className="w-full object-cover rounded-3xl lg:h-0 lg:min-h-full"
                />
            </div>
        </div>
    );
};
