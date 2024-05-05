import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";

export const ContactUs = () => {
    return (
        <div
            id="contact"
            className="lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col gap-16"
        >
            <SectionTitle text="Contact us" fontColor="black" />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <ContactForm />
                <img
                    src="honey.jpg"
                    className="object-cover rounded-3xl lg:h-0 lg:min-h-full"
                />
            </div>
        </div>
    );
};
