import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";

export const ContactUs = () => {
    return (
        <div id="contact" className="px-20 py-[104px] flex flex-col gap-16">
            <SectionTitle text="Contact us" fontColor="black" />
            <div className="flex justify-between">
                <ContactForm />
                <img
                    src="honey.jpg"
                    className="w-[630px] object-cover rounded-3xl"
                />
            </div>
        </div>
    );
};
