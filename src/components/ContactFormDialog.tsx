import { Button } from "./Button";
import { ContactForm } from "./ContactForm";
import { Dialog } from "@headlessui/react";
import { LanguageContent, contactUsText } from "../utils/data";
import { SectionTitle } from "./SectionTitle";
import { CloseIcon } from "./Icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { contactFormActions } from "../store";

export const ContactFormDialog = () => {
    const { language } = useAppSelector((store) => store.language);
    const { dialogIsOpen } = useAppSelector((store) => store.contactForm);
    const dispatch = useAppDispatch();

    const content =
        language === "en"
            ? (contactUsText.en as LanguageContent)
            : (contactUsText.no as LanguageContent);

    return (
        <div>
            <Button
                text={language === "en" ? "Contact" : "Kontakt"}
                handleClick={() => dispatch(contactFormActions.openDialog())}
            />
            <Dialog
                open={dialogIsOpen}
                onClose={() => dispatch(contactFormActions.closeDialog())}
            >
                <div
                    className="fixed inset-0 bg-black/75 z-20"
                    aria-hidden="true"
                />
                <div className="fixed inset-0 flex w-screen items-center justify-center z-30">
                    <Dialog.Panel className="lg:w-5/6 w-full bg-white relative flex flex-col sm:gap-10 gap-4 justify-center items-center py-10 lg:px-20 sm:px-10 px-4 rounded-3xl">
                        <button
                            className="absolute top-4 right-4 w-10 h-10 flex justify-center items-center"
                            onClick={() =>
                                dispatch(contactFormActions.closeDialog())
                            }
                        >
                            <CloseIcon color="black" style="w-5 h-5" />
                        </button>
                        <SectionTitle
                            text={content.title}
                            fontColor="black"
                            onDialog
                        />
                        <ContactForm
                            intro={content.firstParagraph!}
                            inputOne={content.inputOne!}
                            inputTwo={content.inputTwo!}
                            inputThree={content.inputThree!}
                            location="onDialog"
                            langNum={language === "en" ? 0 : 1}
                        />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};
