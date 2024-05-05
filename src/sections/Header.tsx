import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";
import { TopNavBar } from "../components/TopNavBar";

export const Header = () => {
    return (
        <div className="relative text-white">
            <TopNavBar />
            <div className="lg:h-[1022px] sm:h-[1194px] h-[812px] bg-[url('title-bg.jpg')] bg-cover shadow-[inset_0_0_0_2000px_rgba(48,41,38,0.8)] flex flex-col items-center">
                <div className="lg:mt-[388px] sm:mt-[415px] mt-[275px] lg:px-20 px-10">
                    <SectionTitle
                        text="Honning frå Sunnmørsalpane"
                        fontColor="white"
                    />
                </div>
                <p className="lg:mt-10 sm:mt-12 mt-6 lg:mb-20 sm:mb-[104px] mb-[180px] lg:px-[400px] sm:px-10 px-4 text-center lg:text-[32px] sm:text-[28px] text-xl lg:leading-[48px] sm:leading-[42px] leading-[30px]">
                    Lorem ipsum dolor sit amet consectetur. Libero magna cras
                    aliquam sit mi morbi facilisi
                </p>
                <Button style="filled">
                    <p className="text-xl text-black leading-[26px]">Contact</p>
                </Button>
            </div>
        </div>
    );
};
