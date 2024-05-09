import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { MenuIcon, CloseIcon } from "./Icons";
import { navLinks } from "../utils/data";
import { LanguageMenu } from "./LanguageMenu";
import { LanguageContext } from "../context/LanguageContext";

export const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useContext(LanguageContext);

    return (
        <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="lg:hidden fixed inset-0 flex w-screen items-center justify-center z-30">
                    <Dialog.Panel className="w-full h-full bg-brown flex flex-col justify-center items-center gap-[104px] relative">
                        <button
                            className="absolute top-10 right-4"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon />
                        </button>
                        <ul className="flex flex-col justify-center items-center gap-14 text-white text-[18px] leading-[20.67px]">
                            {navLinks.map((item) => (
                                <li key={item.text.en}>
                                    <a
                                        className="hover:underline hover:decoration-gold hover:underline-offset-4"
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {language === "en"
                                            ? item.text.en
                                            : item.text.no}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="h-[90px] w-[90px]">
                            <LanguageMenu />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};
