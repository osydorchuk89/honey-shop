interface ButtonProps {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const activeButtonStyle =
    "border border-gold bg-gold rounded-[64px] px-16 py-4 hover:shadow-button-hovered active:shadow-button-active ease-out duration-300";
const disabledButtonStyle =
    "border border-gray bg-gray rounded-[64px] px-16 py-4";

export const Button = ({ text, type, disabled, handleClick }: ButtonProps) => {
    return (
        <button
            className={disabled ? disabledButtonStyle : activeButtonStyle}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            <p className="text-xl text-black dark:text-black leading-[26px]">
                {text}
            </p>
        </button>
    );
};
