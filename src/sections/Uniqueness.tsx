import { SectionTitle } from "../components/SectionTitle";

const uniqueItems = [
    {
        title: "Уникальные свойства",
        text: "Lorem ipsum dolor sit amet consectetur. Bibendum orci integer massa habitasse. Mauris lorem urna elementum semper ullamcorper. Et amet duis aliquam id. A consectetur sagittis mauris praesent in justo aliquam convallis. Magna tempus.",
    },
    {
        title: "Происхождение",
        text: "Lorem ipsum dolor sit amet consectetur. Bibendum orci integer massa habitasse. Mauris lorem urna elementum semper ullamcorper. Et amet duis aliquam id. A consectetur sagittis mauris praesent in justo aliquam convallis. Magna tempus.",
    },
    {
        title: "Вкусовые качества",
        text: "Lorem ipsum dolor sit amet consectetur. Bibendum orci integer massa habitasse. Mauris lorem urna elementum semper ullamcorper. Et amet duis aliquam id. A consectetur sagittis mauris praesent in justo aliquam convallis. Magna tempus.",
    },
    {
        title: "Методы сбора",
        text: "Lorem ipsum dolor sit amet consectetur. Bibendum orci integer massa habitasse. Mauris lorem urna elementum semper ullamcorper. Et amet duis aliquam id. A consectetur sagittis mauris praesent in justo aliquam convallis. Magna tempus.",
    },
];

export const Uniqueness = () => {
    return (
        <div
            id="uniqueness"
            className="bg-gold lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col lg:gap-16 sm:gap-10 gap-8"
        >
            <SectionTitle text="Uniqueness" fontColor="black" />
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start lg:gap-5 sm:gap-y-8 sm:gap-x-6 gap-6">
                {uniqueItems.map((item) => (
                    <div className="flex flex-col gap-2" key={item.title}>
                        <div className="flex justify-center">
                            <img src="honey-comb.png" className="text-center" />
                        </div>
                        <p className="text-[32px] leading-[48px]">
                            {item.title}
                        </p>
                        <p className="sm:text-xl text-lg sm:leading-[28px] leading-[26px]">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
