import { SectionTitle } from "../components/SectionTitle";

export const Menu = () => {
    return (
        <div
            id="menu"
            className="px-20 py-[104px] flex flex-col gap-16 bg-brown"
        >
            <SectionTitle text="About" fontColor="white" />
            <div className="flex justify-between items-center">
                <article className="w-[500px] flex flex-col gap-4 text-white text-xl leading-[28px]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Volutpat id
                        pellentesque lorem egestas ac adipiscing sit. Et sem sit
                        arcu ipsum ornare elit fermentum. Proin pellentesque sed
                        dictumst enim nisl faucibus. Nisi consectetur felis odio
                        proin venenatis consectetur sed lectus ultrices.
                    </p>
                    <p>
                        Quisque cursus purus ultrices justo non urna. Sed semper
                        amet sit commodo lorem ac vulputate mollis. Ornare
                        tempor lorem eget sed vitae eget vel ipsum. Sit faucibus
                        sed egestas senectus at pellentesque. Cras eu vitae amet
                        tortor mattis tempor duis. Rutrum sed proin odio cras
                        risus pellentesque ultricies in morbi. Tellus odio
                        lacinia nunc aliquam eget nisl ipsum at nec. Gravida
                        placerat nisi sed quam sed quis.
                    </p>
                    <p>
                        Proin pellentesque sed dictumst enim nisl faucibus. Nisi
                        consectetur felis odio proin venenatis consectetur sed
                        lectus ultrices.
                    </p>
                </article>
                <img src="polygon.png" className="w-[500px]" />
            </div>
        </div>
    );
};
