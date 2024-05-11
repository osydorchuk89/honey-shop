import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __EMAILJS_SERVICE_ID__: process.env.VITE_EMAILJS_SERVICE_ID,
        __EMAILJS_TEMPLATE_ID__: process.env.VITE_EMAILJS_TEMPLATE_ID,
        __EMAILJS_PUBLIC_KEY__: process.env.VITE_EMAILJS_PUBLIC_KEY,
    },
});
