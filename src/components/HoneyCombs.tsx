import { useState } from "react";
import { HexagonIcon } from "./Icons";
import { useAppSelector } from "../store/hooks";

const upperRowText = {
    en: [
        "The unique taste and aroma of honey collected from heather flowers",
        "Variety of flavours and aromas typical of flowering plants gathered in summer",
    ],
    no: [
        "Den unike smaken og aromaen av honning fra lyngblomster",
        "En rekke smaker og aromaer som er typiske for blomstrende planter samlet om sommeren",
    ],
};

const middleRowText = {
    en: [
        "Bright amber color, makes honey especially attractive and appetizing",
        "Golden color that emphasizes the naturalness and quality of the product",
    ],
    no: [
        "Lys ravfarge gjør honningen spesielt attraktiv og appetittvekkende",
        "Gylden farge som understreker produktets naturlighet og kvalitet",
    ],
};

const bottomRowText = {
    en: [
        "Wealth of useful properties, enhancing the effect of therapeutic properties of heather honey",
        "High concentration of beneficial substances that enrich your nutrition and strengthen your immunity",
    ],
    no: [
        "Mange nyttige egenskaper som forsterker effekten av lynghonningens terapeutiske egenskaper",
        "Høy konsentrasjon av gunstige stoffer som beriker ernæringen din og styrker immunforsvaret",
    ],
};

export const HoneyCombs = () => {
    const { language } = useAppSelector((store) => store.language);
    const upperRowContent =
        language === "en" ? upperRowText.en : upperRowText.no;
    const bottomRowContent =
        language === "en" ? bottomRowText.en : bottomRowText.no;

    const [bgColor, setBgColor] = useState({
        first: "none",
        second: "none",
        third: "none",
        fourth: "none",
        fifth: "none",
        sixth: "none",
    });

    const rowStyle =
        "h-[259px] flex justify-center items-center hover:scale-125 ease-in-out duration-300 text-white hover:text-black dark:hover:text-black hover:z-10";

    return (
        <div className="flex flex-col justify-center items-center xl:w-[736px] w-[800px] h-[750px] xl:px-0 px-10 xl:m-0 m-auto">
            <div className="flex mb-[-48px] gap-[18px]">
                {upperRowContent.map((item, index) => (
                    <div
                        key={item}
                        className={"w-[233px] " + rowStyle}
                        onMouseEnter={() =>
                            setBgColor((prevState) => ({
                                ...prevState,
                                [index === 0 ? "first" : "second"]: "gold",
                            }))
                        }
                        onMouseLeave={() =>
                            setBgColor((prevState) => ({
                                ...prevState,
                                [index === 0 ? "first" : "second"]: "none",
                            }))
                        }
                    >
                        <HexagonIcon
                            bgColor={
                                index === 0 ? bgColor.first : bgColor.second
                            }
                        />
                        <div className="relative">
                            <div className="absolute -top-[78px] -left-[214px] w-[193px] h-[156px] flex justify-center items-center">
                                <p className="text-center text-[18px] leading-[26px]">
                                    {item}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-[30px]">
                <div
                    className={"w-[228px] " + rowStyle}
                    onMouseEnter={() =>
                        setBgColor((prevState) => ({
                            ...prevState,
                            third: "gold",
                        }))
                    }
                    onMouseLeave={() =>
                        setBgColor((prevState) => ({
                            ...prevState,
                            third: "none",
                        }))
                    }
                >
                    <HexagonIcon bgColor={bgColor.third} />
                    <div className="relative">
                        <div className="absolute -top-[78px] -left-[210px] w-[193px] h-[156px] flex justify-center items-center">
                            <p className="text-center text-[18px] leading-[26px]">
                                {language === "en"
                                    ? middleRowText.en[0]
                                    : middleRowText.no[0]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[220px] h-[250px] flex justify-center items-center">
                    <HexagonIcon bgColor="none" />
                    <div className="relative">
                        <div className="absolute -top-[78.5px] -left-[206.5px] w-[193px] h-[156px] px-6 flex justify-between items-center">
                            <img src="ear.png" />
                            <img src="line.png" className="h-[244px]" />
                            <img src="dandelion.png" className="mr-[-16px]" />
                        </div>
                    </div>
                </div>
                <div
                    className={"w-[228px] " + rowStyle}
                    onMouseEnter={() =>
                        setBgColor((prevState) => ({
                            ...prevState,
                            fourth: "gold",
                        }))
                    }
                    onMouseLeave={() =>
                        setBgColor((prevState) => ({
                            ...prevState,
                            fourth: "none",
                        }))
                    }
                >
                    <HexagonIcon bgColor={bgColor.fourth} />
                    <div className="relative">
                        <div className="absolute -top-[78px] -left-[210px] w-[193px] h-[156px] flex justify-center items-center">
                            <p className="text-center text-[18px] leading-[26px]">
                                {language === "en"
                                    ? middleRowText.en[1]
                                    : middleRowText.no[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-[-48px] gap-[18px]">
                {bottomRowContent.map((item, index) => (
                    <div
                        key={item}
                        className={"w-[233px] " + rowStyle}
                        onMouseEnter={() =>
                            setBgColor((prevState) => ({
                                ...prevState,
                                [index === 0 ? "fifth" : "sixth"]: "gold",
                            }))
                        }
                        onMouseLeave={() =>
                            setBgColor((prevState) => ({
                                ...prevState,
                                [index === 0 ? "fifth" : "sixth"]: "none",
                            }))
                        }
                    >
                        <HexagonIcon
                            bgColor={
                                index === 0 ? bgColor.fifth : bgColor.sixth
                            }
                        />
                        <div className="relative">
                            <div className="absolute -top-[78px] -left-[214px] w-[193px] h-[156px] flex justify-center items-center">
                                <p className="text-center text-[18px] leading-[26px]">
                                    {item}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
