interface SectionTitleProps {
    text: string;
    fontColor: string;
    onDialog?: boolean;
}

export const SectionTitle = ({
    text,
    fontColor,
    onDialog,
}: SectionTitleProps) => {
    const initialSectionTitleStyle =
        "font-handwritten lg:text-[72px] sm:text-[54px] text-[40px] lg:leading-[93.6px] sm:leading-[70.2px] leading-[52px] text-center";

    const intermediarySectionTitleStyle = onDialog
        ? initialSectionTitleStyle
        : initialSectionTitleStyle + " xl:text-left";

    const finalSectionStyle =
        fontColor === "black"
            ? intermediarySectionTitleStyle + " text-black dark:text-black"
            : intermediarySectionTitleStyle + " text-white dark:text-white";

    return <p className={finalSectionStyle}>{text}</p>;
};
