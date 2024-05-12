import { SectionTitle } from "../components/SectionTitle";
import { SocialMediaBox } from "../components/SocialMediaBox";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { navigationActions } from "../store";

export const Contacts = () => {
    const { language } = useAppSelector((store) => store.language);
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
            className="bg-[url('/images/honeycombs.jpg')] bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(235,165,38,0.8)] lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col items-center lg:gap-16 gap-10 lg:scroll-mt-12 scroll-mt-20"
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
