import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ContactButton = ({ type, handleClick }: ButtonProps) => {
    const { language } = useContext(LanguageContext);

    return (
        <button
            className="border border-gold bg-gold rounded-[64px] px-16 py-4 hover:shadow-button-hovered active:shadow-button-active ease-out duration-300"
            type={type}
            onClick={handleClick}
        >
            <p className="text-xl text-black leading-[26px]">
                {language === "en" ? "Contact" : "Kontakt"}
            </p>
        </button>
    );
};
