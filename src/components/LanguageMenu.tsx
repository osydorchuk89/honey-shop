import { Menu } from "@headlessui/react";
import { useAppSelector } from "../store/hooks";

export const LanguageMenu = () => {
    const { language } = useAppSelector((store) => store.language);
    const otherLanguage = language === "en" ? "NO" : "EN";

    return (
        <Menu as="div" className="rounded-[32px]">
            <Menu.Button className="w-[90px] h-[48px] border border-gold bg-inherit rounded-[32px] px-8 py-3 z-10">
                <p className="text-white text-[18px] leading-[20.67px]">
                    {language.toUpperCase()}
                </p>
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    <button
                        className="w-[90px] border border-gold bg-gold rounded-[64px] px-8 py-3 hover:shadow-button-hovered active:shadow-button-active ease-out duration-300"
                        onClick={() => {
                            localStorage.setItem(
                                "lang",
                                otherLanguage.toLowerCase()
                            );
                            location.reload();
                        }}
                    >
                        <p className="text-black dark:hover:text-black text-[18px] leading-[20.67px]">
                            {otherLanguage}
                        </p>
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};
