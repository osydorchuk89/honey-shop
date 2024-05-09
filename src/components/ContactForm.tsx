import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../utils/schemas";
import { ContactButton } from "./ContactButton";

interface ContactInputs {
    name: string;
    phone: string;
    message: string;
}

interface ContacFormProps {
    intro: string;
    inputOne: string;
    inputTwo: string;
    inputThree: string;
}

export const ContactForm = ({
    intro,
    inputOne,
    inputTwo,
    inputThree,
}: ContacFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactInputs>({
        resolver: zodResolver(ContactFormSchema),
    });

    const onSubmit: SubmitHandler<ContactInputs> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form
            noValidate
            className="w-full flex flex-col lg:items-start items-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="mb-8 text-xl leading-[28px] self-start">{intro}</p>
            <div className="w-full flex flex-col gap-6 mb-10">
                <div className="flex flex-col w-full">
                    <input
                        {...register("name")}
                        className="bg-gray p-4 rounded-lg text-lg"
                        type="text"
                        id="name"
                        placeholder={inputOne}
                    />
                    <p className="text-red">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("phone")}
                        className="bg-gray p-4 rounded-lg text-lg"
                        type="tel"
                        id="phone"
                        placeholder={inputTwo}
                    />
                    <p className="text-red">{errors.phone?.message}</p>
                </div>
                <div className="flex flex-col w-full">
                    <textarea
                        {...register("message")}
                        className="resize-none bg-gray p-4 rounded-lg text-lg"
                        cols={40}
                        rows={5}
                        id="message"
                        placeholder={inputThree}
                    />
                    <p className="text-red">{errors.message?.message}</p>
                </div>
            </div>
            <ContactButton />
        </form>
    );
};
