import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY,
    },
});
