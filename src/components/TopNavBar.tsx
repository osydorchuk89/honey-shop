import { LanguageMenu } from "./LanguageMenu";
import { SideMenu } from "./SideMenu";
import { navLinks } from "../utils/data";

export const TopNavBar = () => {
    return (
        <nav className="w-full md:h-28 h-20 absolute md:top-4 top-12 lg:px-20 px-10 flex justify-between items-center">
            <a href="/">
                <img src="logo.png" />
            </a>
            <ul className="hidden md:flex justify-between gap-[72px] text-[18px] leading-[20.67px]">
                {navLinks.map((item) => (
                    <li key={item.text}>
                        <a
                            className="hover:underline hover:decoration-gold hover:underline-offset-4"
                            href={item.href}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex md:justify-normal justify-end relative w-[90px] h-full">
                <div className="absolute top-8 hidden md:block">
                    <LanguageMenu />
                </div>
                <div className="absolute top-4 block md:hidden">
                    <SideMenu />
                </div>
            </div>
        </nav>
    );
};
