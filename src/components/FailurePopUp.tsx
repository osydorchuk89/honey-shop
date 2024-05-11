import { Dialog } from "@headlessui/react";
import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { contactFormActions } from "../store";
import { FailureIcon } from "./Icons";

export const FailurePopUp = () => {
    const { language } = useAppSelector((store) => store.language);
    const { failurePopUpIsOpen } = useAppSelector((store) => store.contactForm);
    const dispatch = useAppDispatch();

    return (
        <div>
            <Dialog
                open={failurePopUpIsOpen}
                onClose={() => dispatch(contactFormActions.closeFailurePopUp())}
            >
                <div
                    className="fixed inset-0 bg-black/75 z-40"
                    aria-hidden="true"
                />
                <div className="fixed inset-0 flex w-screen items-center justify-center z-40">
                    <Dialog.Panel className="xl:w-1/2 lg:w-2/3 sm:w-3/4 w-full bg-brown flex flex-col justify-center items-center px-10 py-10 rounded-3xl">
                        <FailureIcon />
                        <p className="text-white text-center lg:text-3xl text-2xl mt-10 mb-20">
                            {language === "en"
                                ? "Something went wrong. Please try again later."
                                : "Noe gikk galt. Vennligst prøv igjen senere."}
                        </p>
                        <Button
                            text="OK"
                            handleClick={() =>
                                dispatch(contactFormActions.closeFailurePopUp())
                            }
                        />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};
