interface ButtonProps {
    style: string;
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
}

const outlined = "border border-gold bg-inherit rounded-[32px] px-8 py-3 z-10";
const filled =
    "border border-gold bg-gold rounded-[64px] px-16 py-4 hover:shadow-button-hovered  active:shadow-button-active ease-out duration-300";

export const Button = ({ style, children, type }: ButtonProps) => {
    return (
        <button
            className={style === "outlined" ? outlined : filled}
            type={type}
        >
            {children}
        </button>
    );
};
