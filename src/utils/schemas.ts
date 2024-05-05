import validator from "validator";
import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z.string().trim().min(1, { message: "Please enter your name" }),
    phone: z
        .string()
        .trim()
        .min(1, { message: "Please enter your phone" })
        .refine(validator.isMobilePhone, {
            message: "Please enter valid phone number",
        }),
    message: z.string().trim().min(1, { message: "Please enter message text" }),
});
