import validator from "validator";
import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z.string().trim().min(1, {
        message: "Please enter your name,Vennligst skriv inn navnet ditt",
    }),
    phone: z
        .string()
        .trim()
        .min(1, {
            message:
                "Please enter your phone number,Vennligst skriv inn telefonnummeret ditt",
        })
        .refine(validator.isMobilePhone, {
            message:
                "Please enter a valid phone number,Vennligst skriv inn et gyldig telefonnummer",
        }),
    message: z.string().trim().min(1, {
        message:
            "Please enter your message text,Vennligst skriv inn meldingsteksten din",
    }),
});
