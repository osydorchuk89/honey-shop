import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { ContactFormSchema } from "../utils/schemas";
import { Button } from "./Button";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { contactFormActions } from "../store";

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
    location: string;
    langNum: number;
}

interface FormVariantType {
    form: string;
    p: string;
    div: string;
}

interface FormVariantsType {
    onPage: FormVariantType;
    onDialog: FormVariantType;
}

export const ContactForm = ({
    intro,
    inputOne,
    inputTwo,
    inputThree,
    location,
    langNum,
}: ContacFormProps) => {
    const { language } = useAppSelector((store) => store.language);
    const { dataIsSending } = useAppSelector((store) => store.contactForm);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactInputs>({
        resolver: zodResolver(ContactFormSchema),
    });

    const EMAILJS_SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID!;
    const EMAILJS_TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID!;
    const EMAILJS_PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY!;

    const onSubmit: SubmitHandler<ContactInputs> = () => {
        dispatch(contactFormActions.startSendingData());
        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    dispatch(contactFormActions.openSuccessPopUp());
                    dispatch(contactFormActions.stopSendingData());
                },
                (error) => console.log("Error: ", error)
            );
        reset();
    };

    const formRef = useRef(null);

    const formVariants: FormVariantsType = {
        onPage: {
            form: "w-full flex flex-col lg:items-start items-center",
            p: "mb-8 text-xl leading-[28px] self-start}",
            div: "w-full flex flex-col gap-6 mb-10",
        },
        onDialog: {
            form: "w-full flex flex-col items-center",
            p: "mb-8 text-xl leading-[28px] self-center}",
            div: "lg:w-3/5 w-full flex flex-col sm:gap-6 gap-4 mb-10",
        },
    };

    const originalButtonText = language === "en" ? "Contact" : "Kontakt";
    const sendingButtonText = language === "en" ? "Sending..." : "Sender...";

    return (
        <form
            ref={formRef}
            noValidate
            className={`${
                formVariants[location as keyof FormVariantsType].form
            }`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <p
                className={`${
                    formVariants[location as keyof FormVariantsType].p
                }`}
            >
                {intro}
            </p>
            <div
                className={`${
                    formVariants[location as keyof FormVariantsType].div
                }`}
            >
                <div className="flex flex-col w-full">
                    <input
                        {...register("name")}
                        name="name"
                        className="border p-4 rounded-lg text-lg"
                        type="text"
                        id="name"
                        placeholder={inputOne}
                    />
                    <p className="text-red">
                        {errors.name?.message?.split(",")[langNum]}
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("phone")}
                        name="phone"
                        className="border p-4 rounded-lg text-lg"
                        type="tel"
                        id="phone"
                        placeholder={inputTwo}
                    />
                    <p className="text-red">
                        {errors.phone?.message?.split(",")[langNum]}
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <textarea
                        {...register("message")}
                        name="message"
                        className="resize-none border p-4 rounded-lg text-lg h-[130px]"
                        cols={40}
                        id="message"
                        placeholder={inputThree}
                    />
                    <p className="text-red">
                        {errors.message?.message?.split(",")[langNum]}
                    </p>
                </div>
                <input
                    className="hidden"
                    name="to_name"
                    defaultValue="Oleksii"
                />
            </div>
            <Button
                text={dataIsSending ? sendingButtonText : originalButtonText}
                disabled={dataIsSending}
            />
        </form>
    );
};
