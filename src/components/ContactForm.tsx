import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../utils/schemas";
import { Button } from "./Button";

interface ContactInputs {
    name: string;
    phone: string;
    message: string;
}

export const ContactForm = () => {
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
            <p className="mb-8 text-xl leading-[28px] self-start">
                Enter your contact details and we will reply within 24 hours
            </p>
            <div className="w-full flex flex-col gap-6 mb-10">
                <div className="flex flex-col w-full">
                    <input
                        {...register("name")}
                        className="bg-gray p-4 rounded-lg text-lg"
                        type="text"
                        id="name"
                        placeholder="Your name"
                    />
                    <p className="text-red">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("phone")}
                        className="bg-gray p-4 rounded-lg text-lg"
                        type="tel"
                        id="phone"
                        placeholder="Your phone number"
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
                        placeholder="Your message"
                    />
                    <p className="text-red">{errors.message?.message}</p>
                </div>
            </div>
            <Button style="filled">
                <p className="text-xl leading-[26px]">Contact</p>
            </Button>
        </form>
    );
};
