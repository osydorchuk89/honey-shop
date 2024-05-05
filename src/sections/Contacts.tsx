import { SectionTitle } from "../components/SectionTitle";
import { SocialMediaBox } from "../components/SocialMediaBox";

export const Contacts = () => {
    return (
        <div className="bg-[url('honeycombs.png')] bg-cover shadow-[inset_0_0_0_2000px_rgba(235,165,38,0.8)] px-20 py-[104px] flex flex-col items-center gap-16">
            <SectionTitle
                text="In each sip is nature and care"
                fontColor="black"
            />
            <SocialMediaBox />
        </div>
    );
};
