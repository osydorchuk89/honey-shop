import { LanguageMenu } from "./LanguageMenu";
import { SideMenu } from "./SideMenu";
import { navLinks } from "../utils/data";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NavigationContext } from "../context/NavigationContext";

export const TopNavBar = () => {
    const { language } = useContext(LanguageContext);
    const { section } = useContext(NavigationContext);

    console.log(section);

    const TOP_OFFSET = 50;
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= TOP_OFFSET
                ? setHasScrolled(true)
                : setHasScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navBarStyle =
        "ease-in-out duration-300 w-full lg:h-40 sm:h-48 h-44 fixed lg:px-20 px-10 flex justify-between items-center";
    const scrolledNavBarStyle =
        "ease-in-out duration-300 w-full h-32 fixed lg:px-20 px-10 flex justify-between items-center bg-brown z-20";

    const languageMenuStyle =
        "ease-in-out duration-300 absolute lg:top-[56px] top-[72px] hidden md:block";
    const scrolledLanguageMenuStyle =
        "ease-in-out duration-300 absolute top-[40px] hidden md:block";

    const sideMenuStyle =
        "ease-in-out duration-300 absolute sm:top-[72px] top-[64px] block md:hidden";
    const scrolledSideMenuStyle =
        "ease-in-out duration-300 absolute top-[40px] block md:hidden";

    const navLinkStyle =
        "hover:underline hover:decoration-gold hover:underline-offset-4";

    return (
        <nav className={hasScrolled ? scrolledNavBarStyle : navBarStyle}>
            <a href="/">
                <img src="logo.png" />
            </a>
            <ul className="hidden md:flex justify-between gap-[72px] text-[18px] leading-[20.67px]">
                {navLinks.map((item) => (
                    <li key={item.text.en}>
                        <a
                            className={
                                section === item.text.en.toLowerCase()
                                    ? navLinkStyle + " text-gold"
                                    : navLinkStyle
                            }
                            href={item.href}
                        >
                            {language === "en" ? item.text.en : item.text.no}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex md:justify-normal justify-end relative w-[90px] h-full">
                <div
                    className={
                        hasScrolled
                            ? scrolledLanguageMenuStyle
                            : languageMenuStyle
                    }
                >
                    <LanguageMenu />
                </div>
                <div
                    className={
                        hasScrolled ? scrolledSideMenuStyle : sideMenuStyle
                    }
                >
                    <SideMenu />
                </div>
            </div>
        </nav>
    );
};
