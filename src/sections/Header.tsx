import { TopNavBar } from "../components/TopNavBar";
import { headerText } from "../utils/data";
import { useInView } from "react-intersection-observer";
import { ContactFormDialog } from "../components/ContactFormDialog";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { navigationActions } from "../store";

export const Header = () => {
    const { language } = useAppSelector((store) => store.language);
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("none"));
        },
    });

    return (
        <div ref={ref} className="w-auto relative text-white">
            <TopNavBar />
            <div className="lg:h-[1022px] sm:h-[1194px] h-[812px] bg-[url('/images/title-bg.jpg')] bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(68,62,59,0.8)] flex flex-col items-center">
                <div className="lg:mt-[388px] sm:mt-[415px] mt-[275px] lg:px-20 px-10">
                    <p className="font-handwritten lg:text-[74px] sm:text-[54px] text-[40px] lg:leading-[111px] sm:leading-[70.2px] leading-[52px] text-center text-white">
                        Honning frå Sunnmørsalpane
                    </p>
                </div>
                <p className="lg:mt-10 sm:mt-12 mt-6 lg:mb-20 sm:mb-[104px] mb-[180px] lg:w-1/2 md:w-2/3 md:p-0 sm:px-10 px-4 text-center lg:text-[32px] sm:text-[28px] text-xl lg:leading-[48px] sm:leading-[42px] leading-[30px]">
                    {language === "en" ? headerText.en : headerText.no}
                </p>
                <ContactFormDialog />
            </div>
        </div>
    );
};
