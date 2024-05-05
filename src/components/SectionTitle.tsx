interface SectionTitleProps {
    text: string;
    fontColor: string;
}

export const SectionTitle = ({ text, fontColor }: SectionTitleProps) => {
    return (
        <p
            className={`font-handwritten lg:text-7xl sm:text-[54px] text-[40px] lg:leading-[93.6px] sm:leading-[70.2px] leading-[52px] text-center text-${fontColor}`}
        >
            {text}
        </p>
    );
};
