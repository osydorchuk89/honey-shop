import { SectionTitle } from "../components/SectionTitle";
import { SocialMediaBox } from "../components/SocialMediaBox";

export const Contacts = () => {
    return (
        <div className="bg-[url('honeycombs.png')] bg-cover shadow-[inset_0_0_0_2000px_rgba(235,165,38,0.8)] lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col items-center lg:gap-16 gap-10">
            <SectionTitle
                text="In each sip is nature and care"
                fontColor="black"
            />
            <SocialMediaBox />
        </div>
    );
};
