import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
    return (
        <div
            id="about"
            className="lg:px-20 sm:px-10 px-4 lg:py-[104px] py-20 flex flex-col gap-16"
        >
            <SectionTitle text="About" fontColor="black" />
            <div className="flex flex-col lg:gap-10 gap-6">
                <div className="sm:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-10 sm:grid-cols-2 flex flex-col gap-6">
                    <div className="lg:col-span-2">
                        <p className="lg:text-xl text-lg lg:leading-[28px] leading-[26px]">
                            Lorem ipsum dolor sit amet consectetur. Volutpat id
                            pellentesque lorem egestas ac adipiscing sit. Et sem
                            sit arcu ipsum ornare elit fermentum. Proin
                            pellentesque sed dictumst enim nisl faucibus. Nisi
                            consectetur felis odio proin venenatis consectetur
                            sed lectus ultrices. Quisque cursus purus ultrices
                            justo non urna. Sed semper amet sit commodo lorem ac
                            vulputate mollis. Ornare tempor lorem eget sed vitae
                            eget vel ipsum. Sit faucibus sed egestas senectus at
                            pellentesque. Cras eu vitae amet tortor mattis
                            tempor
                        </p>
                    </div>
                    <div className="lg:col-span-3 lg:col-start-3">
                        <img
                            className="sm:h-0 sm:min-h-full w-full object-cover rounded-2xl"
                            src="honey-jar.jpg"
                        />
                    </div>
                    <div className="lg:col-span-3 lg:row-start-2">
                        <img
                            className="sm:h-0 sm:min-h-full w-full object-cover rounded-2xl"
                            src="bee.jpg"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-4 lg:row-start-2">
                        <p className="lg:text-xl text-lg lg:leading-[28px] leading-[26px]">
                            Lorem ipsum dolor sit amet consectetur. Volutpat id
                            pellentesque lorem egestas ac adipiscing sit. Et sem
                            sit arcu ipsum ornare elit fermentum. Proin
                            pellentesque sed dictumst enim nisl faucibus. Nisi
                            consectetur felis odio proin venenatis consectetur
                            sed lectus ultrices. Quisque cursus purus ultrices
                            justo non urna. Sed semper amet sit commodo lorem ac
                            vulputate mollis. Ornare tempor lorem eget sed vitae
                            eget vel ipsum. Sit faucibus sed egestas senectus at
                            pellentesque. Cras eu vitae amet tortor mattis
                            tempor duis. Rutrum sed proin odio cras risus
                            pellentesque ultricies
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[...Array(6).keys()].map((num) => (
                        <img
                            key={num}
                            src={`image-${num}.jpg`}
                            className="h-[248px] w-full object-cover rounded-3xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
